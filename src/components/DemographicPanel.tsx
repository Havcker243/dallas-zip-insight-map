
import React from 'react';
import { ZipCodeData, formatCurrency, formatPercentage, getAssistanceFlags } from '@/data/dallasZipData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Flag } from 'lucide-react';

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
  const assistanceFlags = getAssistanceFlags(zipData);

  // Demographic sections
  const generalInfo = [
    { label: 'Population', value: demographics.population.toLocaleString() },
    { label: 'Age Range', value: demographics.medianAge },
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
        {/* Assistance Flags */}
        {(assistanceFlags.financial || assistanceFlags.food || assistanceFlags.medical) && (
          <div className="bg-red-50 p-3 rounded-md border border-red-200">
            <h3 className="font-medium text-red-800 text-sm mb-2">Assistance Needed</h3>
            <div className="space-y-1">
              {assistanceFlags.financial && (
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-red-600" fill="#e45c3a" />
                  <span className="text-xs text-red-800">Financial Assistance</span>
                </div>
              )}
              {assistanceFlags.food && (
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-orange-600" fill="#ff8c42" />
                  <span className="text-xs text-red-800">Food Assistance</span>
                </div>
              )}
              {assistanceFlags.medical && (
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-blue-600" fill="#3b82f6" />
                  <span className="text-xs text-red-800">Medical Assistance</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* General Information */}
        <div>
          <h3 className="font-medium text-lg mb-2">General Information</h3>
          <div className="grid grid-cols-3 gap-4">
            {generalInfo.map((item, index) => (
              <div 
                key={index} 
                className={`text-center p-3 rounded-md ${index === 2 && demographics.medianIncome < 30000 ? 'bg-red-100' : 'bg-secondary'}`}
              >
                <div className="text-muted-foreground text-sm">{item.label}</div>
                <div className={`font-semibold text-lg ${index === 2 && demographics.medianIncome < 30000 ? 'text-red-700' : ''}`}>
                  {item.value}
                </div>
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
        
        {/* Assistance & Insurance */}
        <div>
          <h3 className="font-medium text-lg mb-2">Assistance & Insurance</h3>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className={`text-center p-3 rounded-md ${assistanceFlags.food ? 'bg-red-100' : 'bg-secondary'}`}>
              <div className="text-muted-foreground text-sm">SNAP Benefits</div>
              <div className={`font-semibold text-lg ${assistanceFlags.food ? 'text-red-700' : ''}`}>
                {demographics.assistance.snapBenefits ? "Yes" : "No"}
              </div>
            </div>
            <div className={`text-center p-3 rounded-md ${assistanceFlags.medical ? 'bg-red-100' : 'bg-secondary'}`}>
              <div className="text-muted-foreground text-sm">Insurance Status</div>
              <div className={`font-semibold text-lg ${assistanceFlags.medical ? 'text-red-700' : ''}`}>
                {demographics.assistance.medicalInsurance.type}
              </div>
            </div>
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
