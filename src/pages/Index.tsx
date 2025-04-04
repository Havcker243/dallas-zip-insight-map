
import React, { useState } from 'react';
import DallasMap from '@/components/DallasMap';
import DemographicPanel from '@/components/DemographicPanel';
import MapLegend from '@/components/MapLegend';
import { ZipCodeData } from '@/data/dallasZipData';
import { Search, MapPin } from 'lucide-react';

const Index: React.FC = () => {
  const [selectedZip, setSelectedZip] = useState<ZipCodeData | null>(null);

  const handleZipSelected = (zipData: ZipCodeData) => {
    setSelectedZip(zipData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-map-primary mr-2" />
              <h1 className="text-2xl font-semibold text-gray-900">Dallas Zip Insight Map</h1>
            </div>
            <div className="text-sm text-gray-500">
              Interactive Demographic Explorer
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Zip Code Map</h2>
                  <div className="text-sm text-gray-500">
                    {selectedZip 
                      ? `Viewing: ${selectedZip.zipCode} - ${selectedZip.name}` 
                      : 'Click on a zip code to view details'}
                  </div>
                </div>
                <div className="relative h-[600px] rounded-lg overflow-hidden">
                  <DallasMap 
                    selectedZip={selectedZip} 
                    onZipSelected={handleZipSelected} 
                  />
                  <MapLegend />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="h-[600px]">
                <DemographicPanel zipData={selectedZip} />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">About This Dashboard</h2>
            <p className="text-gray-600">
              The Dallas Zip Insight Map provides demographic information for zip codes in Dallas, Texas. 
              Click on any zip code to view detailed information about population, income, ethnicity, 
              education, and housing in that area. This interactive tool helps visualize geographic data 
              patterns across the Dallas metropolitan area.
            </p>
            <p className="text-gray-600 mt-4">
              The color of each zip code represents the median income level in that area, with darker colors 
              indicating higher median incomes as shown in the legend.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Dallas Zip Insight Map © 2025 - Demographic data for educational purposes only
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
