
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { dallasZipCodes, getColorByIncome, ZipCodeData } from '@/data/dallasZipData';
import { GeoJSONEvent } from 'leaflet';

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
    
    const income = zipData ? zipData.demographics.medianIncome : 0;
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
        <MapControls center={dallasCenter} zoom={defaultZoom} />
      </MapContainer>
    </div>
  );
};

export default DallasMap;
