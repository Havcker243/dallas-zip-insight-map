
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, Marker, Tooltip } from 'react-leaflet';
import { dallasZipCodes, getColorByIncome, ZipCodeData, getAssistanceFlags } from '@/data/dallasZipData';
import { GeoJSONEvent, Icon } from 'leaflet';
import { Flag } from 'lucide-react';

// Custom marker icon for assistance flags
const createFlagIcon = (color: string) => {
  // Create a temporary DOM element to render the SVG
  const flagElement = document.createElement('div');
  flagElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
      <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
  `;

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(flagElement.innerHTML)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
};

// This component handles resetting the map view
const MapControls: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  
  return null;
};

interface DallasMapProps {
  selectedZip: ZipCodeData | null;
  onZipSelected: (zip: ZipCodeData) => void;
}

const DallasMap: React.FC<DallasMapProps> = ({ selectedZip, onZipSelected }) => {
  // Initial center coordinates for Dallas
  const dallasCenter: [number, number] = [32.7767, -96.7970];
  const defaultZoom = 11;
  
  // Style function for the GeoJSON features
  const zipStyle = (feature: any) => {
    const zipData = dallasZipCodes.find(
      zip => zip.zipCode === feature.properties.zipCode
    );
    
    const income = zipData ? zipData.income : 0;
    const color = getColorByIncome(income);
    
    const isSelected = selectedZip && selectedZip.zipCode === feature.properties.zipCode;
    
    return {
      fillColor: color,
      weight: isSelected ? 3 : 1,
      opacity: 1,
      color: isSelected ? '#000' : '#fff',
      fillOpacity: isSelected ? 0.9 : 0.6,
      className: `zip-layer ${isSelected ? 'selected-zip' : ''}`
    };
  };
  
  // Convert our mock data to GeoJSON format
  const zipGeoJSON = {
    type: 'FeatureCollection',
    features: dallasZipCodes.map(zip => ({
      type: 'Feature',
      properties: {
        zipCode: zip.zipCode,
        name: zip.name
      },
      geometry: zip.geometry
    }))
  };
  
  // Handle click on zip code
  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      click: (e: GeoJSONEvent) => {
        const zipCode = feature.properties.zipCode;
        const zipData = dallasZipCodes.find(zip => zip.zipCode === zipCode);
        if (zipData) {
          onZipSelected(zipData);
        }
      }
    });
  };

  // Generate assistance flag markers
  const assistanceMarkers = dallasZipCodes.flatMap(zip => {
    const flags = getAssistanceFlags(zip);
    const markers = [];
    
    // Get center point of the zip code's geometry
    // This is a simple approximation - in a real app, you'd calculate the actual centroid
    const coordinates = zip.geometry.coordinates[0];
    const centerLat = coordinates.reduce((sum, coord) => sum + coord[1], 0) / coordinates.length;
    const centerLng = coordinates.reduce((sum, coord) => sum + coord[0], 0) / coordinates.length;
    
    // Fixed: Using explicit number typing to avoid TypeScript errors
    const offsetValue = 0.002;
    
    // Add financial assistance flag
    if (flags.financial) {
      markers.push({
        position: [centerLat - offsetValue, centerLng] as [number, number],
        color: '#e45c3a',
        type: 'Financial',
        zipCode: zip.zipCode
      });
    }
    
    // Add food assistance flag
    if (flags.food) {
      markers.push({
        position: [centerLat, centerLng + offsetValue] as [number, number],
        color: '#ff8c42',
        type: 'Food',
        zipCode: zip.zipCode
      });
    }
    
    // Add medical assistance flag
    if (flags.medical) {
      markers.push({
        position: [centerLat, centerLng - offsetValue] as [number, number],
        color: '#3b82f6',
        type: 'Medical',
        zipCode: zip.zipCode
      });
    }
    
    return markers;
  });
  
  return (
    <div className="h-full w-full">
      <MapContainer
        center={dallasCenter}
        zoom={defaultZoom}
        className="h-full w-full rounded-lg shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={zipGeoJSON as any}
          style={zipStyle}
          onEachFeature={onEachFeature}
        />
        
        {/* Assistance Flag Markers */}
        {assistanceMarkers.map((marker, index) => (
          <Marker 
            key={`${marker.zipCode}-${marker.type}-${index}`}
            position={marker.position}
            icon={createFlagIcon(marker.color)}
          >
            <Tooltip>
              {marker.type} Assistance Needed<br/>
              Zip Code: {marker.zipCode}
            </Tooltip>
          </Marker>
        ))}
        
        <MapControls center={dallasCenter} zoom={defaultZoom} />
      </MapContainer>
    </div>
  );
};

export default DallasMap;
