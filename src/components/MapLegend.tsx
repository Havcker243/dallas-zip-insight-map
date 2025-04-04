
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LegendItem {
  color: string;
  label: string;
}

const legendItems: LegendItem[] = [
  { color: '#084c61', label: '$150,000+' },
  { color: '#177e89', label: '$100,000 - $149,999' },
  { color: '#44a4b5', label: '$75,000 - $99,999' },
  { color: '#7dcfe9', label: '$50,000 - $74,999' },
  { color: '#b9e3f0', label: 'Under $50,000' },
];

const MapLegend: React.FC = () => {
  return (
    <Card className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm shadow-lg">
      <CardHeader className="p-3 pb-1">
        <CardTitle className="text-sm">Median Income</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-1">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MapLegend;
