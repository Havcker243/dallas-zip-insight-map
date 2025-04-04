
import React from 'react';
import { ZipCodeData, formatCurrency, formatPercentage } from '@/data/dallasZipData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface DemographicPanelProps {
  zipData: ZipCodeData | null;
}

const DemographicPanel: React.FC<DemographicPanelProps> = ({ zipData }) => {
  if (!zipData) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Zip Code Demographics</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-5/6">
          <p className="text-muted-foreground text-center">
            Select a zip code on the map to view demographic information
          </p>
        </CardContent>
      </Card>
    );
  }

  const { demographics } = zipData;

  // Demographic sections
  const generalInfo = [
    { label: 'Population', value: demographics.population.toLocaleString() },
    { label: 'Median Age', value: demographics.medianAge.toFixed(1) },
    { label: 'Median Income', value: formatCurrency(demographics.medianIncome) },
  ];

  const raceData = [
    { label: 'White', value: demographics.race.white, color: 'bg-blue-500' },
    { label: 'Black', value: demographics.race.black, color: 'bg-purple-500' },
    { label: 'Hispanic', value: demographics.race.hispanic, color: 'bg-orange-500' },
    { label: 'Asian', value: demographics.race.asian, color: 'bg-green-500' },
    { label: 'Other', value: demographics.race.other, color: 'bg-gray-500' },
  ];

  const educationData = [
    { label: 'High School', value: demographics.education.highSchool, color: 'bg-blue-300' },
    { label: 'Bachelor\'s Degree', value: demographics.education.bachelors, color: 'bg-blue-500' },
    { label: 'Graduate Degree', value: demographics.education.graduate, color: 'bg-blue-700' },
  ];

  const housingData = [
    { label: 'Owned Homes', value: formatPercentage(demographics.housing.ownedHomes) },
    { label: 'Median Home Value', value: formatCurrency(demographics.housing.medianHomeValue) },
    { label: 'Median Rent', value: formatCurrency(demographics.housing.medianRent) },
  ];

  return (
    <Card className="h-full overflow-auto">
      <CardHeader className="bg-map-secondary/10 pb-2">
        <CardTitle className="flex justify-between items-center text-xl">
          {zipData.zipCode} - {zipData.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        {/* General Information */}
        <div>
          <h3 className="font-medium text-lg mb-2">General Information</h3>
          <div className="grid grid-cols-3 gap-4">
            {generalInfo.map((item, index) => (
              <div key={index} className="text-center p-3 bg-secondary rounded-md">
                <div className="text-muted-foreground text-sm">{item.label}</div>
                <div className="font-semibold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Race Demographics */}
        <div>
          <h3 className="font-medium text-lg mb-2">Race & Ethnicity</h3>
          <div className="space-y-2">
            {raceData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span>{formatPercentage(item.value)}</span>
                </div>
                <Progress value={item.value} className={`h-2 ${item.color}`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="font-medium text-lg mb-2">Education</h3>
          <div className="space-y-2">
            {educationData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span>{formatPercentage(item.value)}</span>
                </div>
                <Progress value={item.value} className={`h-2 ${item.color}`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Housing */}
        <div>
          <h3 className="font-medium text-lg mb-2">Housing</h3>
          <div className="grid grid-cols-1 gap-2">
            {housingData.map((item, index) => (
              <div key={index} className="flex justify-between p-2 bg-secondary rounded-md">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemographicPanel;
