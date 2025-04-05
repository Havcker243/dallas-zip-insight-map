
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flag } from 'lucide-react';

interface LegendItem {
  color: string;
  label: string;
}

const incomeLegendItems: LegendItem[] = [
  { color: '#1e8f4e', label: '$150,000+' },
  { color: '#34d27b', label: '$100,000 - $149,999' },
  { color: '#7ae2a8', label: '$75,000 - $99,999' },
  { color: '#ffe1a8', label: '$50,000 - $74,999' },
  { color: '#ffb347', label: '$35,000 - $49,999' },
  { color: '#ff8c42', label: '$30,000 - $34,999' },
  { color: '#e45c3a', label: 'Under $30,000' },
];

const assistanceFlags = [
  { color: '#e45c3a', label: 'Financial Assistance Needed', icon: 'flag', description: 'Income < $30,000' },
  { color: '#ff8c42', label: 'Food Assistance Needed', icon: 'flag', description: 'No SNAP benefits in low-income areas' },
  { color: '#3b82f6', label: 'Medical Assistance Needed', icon: 'flag', description: 'Uninsured or CHIP coverage' },
];

const MapLegend: React.FC = () => {
  return (
    <Card className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm shadow-lg max-w-xs">
      <CardHeader className="p-3 pb-1">
        <CardTitle className="text-sm">Income & Assistance</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-3">
          {/* Income Legend */}
          <div>
            <h4 className="text-xs font-medium mb-1">Income Levels</h4>
            <div className="space-y-1">
              {incomeLegendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Assistance Flags Legend */}
          <div>
            <h4 className="text-xs font-medium mb-1">Assistance Flags</h4>
            <div className="space-y-1">
              {assistanceFlags.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Flag className="w-4 h-4" fill={item.color} color={item.color} />
                  <div className="flex flex-col">
                    <span className="text-xs">{item.label}</span>
                    <span className="text-[10px] text-gray-500">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapLegend;
