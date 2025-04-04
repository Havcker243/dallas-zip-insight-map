
export interface ZipCodeData {
  zipCode: string;
  name: string;
  geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
  demographics: {
    population: number;
    medianAge: number;
    medianIncome: number;
    race: {
      white: number;
      black: number;
      hispanic: number;
      asian: number;
      other: number;
    };
    education: {
      highSchool: number;
      bachelors: number;
      graduate: number;
    };
    housing: {
      ownedHomes: number;
      medianHomeValue: number;
      medianRent: number;
    };
  };
}

// This is simplified mock data - in a real app, you would use actual GeoJSON data for Dallas zip codes
export const dallasZipCodes: ZipCodeData[] = [
  {
    zipCode: "75201",
    name: "Downtown Dallas",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.808, 32.794],
          [-96.788, 32.794],
          [-96.788, 32.78],
          [-96.808, 32.78],
          [-96.808, 32.794]
        ]
      ]
    },
    demographics: {
      population: 15425,
      medianAge: 34.2,
      medianIncome: 98750,
      race: {
        white: 65.2,
        black: 12.8,
        hispanic: 14.5,
        asian: 5.3,
        other: 2.2
      },
      education: {
        highSchool: 98.2,
        bachelors: 72.5,
        graduate: 28.9
      },
      housing: {
        ownedHomes: 28.5,
        medianHomeValue: 450000,
        medianRent: 1875
      }
    }
  },
  {
    zipCode: "75202",
    name: "Convention Center District",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.808, 32.78],
          [-96.788, 32.78],
          [-96.788, 32.766],
          [-96.808, 32.766],
          [-96.808, 32.78]
        ]
      ]
    },
    demographics: {
      population: 8932,
      medianAge: 31.8,
      medianIncome: 86420,
      race: {
        white: 58.4,
        black: 15.2,
        hispanic: 18.7,
        asian: 5.9,
        other: 1.8
      },
      education: {
        highSchool: 96.8,
        bachelors: 68.2,
        graduate: 24.6
      },
      housing: {
        ownedHomes: 22.3,
        medianHomeValue: 385000,
        medianRent: 1675
      }
    }
  },
  {
    zipCode: "75204",
    name: "Uptown Dallas",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.808, 32.808],
          [-96.788, 32.808],
          [-96.788, 32.794],
          [-96.808, 32.794],
          [-96.808, 32.808]
        ]
      ]
    },
    demographics: {
      population: 22847,
      medianAge: 32.5,
      medianIncome: 112580,
      race: {
        white: 72.8,
        black: 8.9,
        hispanic: 10.2,
        asian: 6.8,
        other: 1.3
      },
      education: {
        highSchool: 99.1,
        bachelors: 78.4,
        graduate: 34.7
      },
      housing: {
        ownedHomes: 31.7,
        medianHomeValue: 525000,
        medianRent: 2100
      }
    }
  },
  {
    zipCode: "75205",
    name: "Highland Park",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.808, 32.822],
          [-96.788, 32.822],
          [-96.788, 32.808],
          [-96.808, 32.808],
          [-96.808, 32.822]
        ]
      ]
    },
    demographics: {
      population: 26542,
      medianAge: 38.7,
      medianIncome: 184250,
      race: {
        white: 85.6,
        black: 1.8,
        hispanic: 5.4,
        asian: 5.9,
        other: 1.3
      },
      education: {
        highSchool: 99.7,
        bachelors: 86.3,
        graduate: 49.8
      },
      housing: {
        ownedHomes: 68.4,
        medianHomeValue: 1250000,
        medianRent: 2950
      }
    }
  },
  {
    zipCode: "75207",
    name: "Design District",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.828, 32.794],
          [-96.808, 32.794],
          [-96.808, 32.78],
          [-96.828, 32.78],
          [-96.828, 32.794]
        ]
      ]
    },
    demographics: {
      population: 5872,
      medianAge: 35.1,
      medianIncome: 78320,
      race: {
        white: 62.3,
        black: 14.8,
        hispanic: 16.7,
        asian: 4.4,
        other: 1.8
      },
      education: {
        highSchool: 94.2,
        bachelors: 58.7,
        graduate: 19.2
      },
      housing: {
        ownedHomes: 24.8,
        medianHomeValue: 325000,
        medianRent: 1525
      }
    }
  },
  {
    zipCode: "75208",
    name: "Oak Cliff",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.828, 32.78],
          [-96.808, 32.78],
          [-96.808, 32.766],
          [-96.828, 32.766],
          [-96.828, 32.78]
        ]
      ]
    },
    demographics: {
      population: 32654,
      medianAge: 33.6,
      medianIncome: 65820,
      race: {
        white: 38.7,
        black: 12.5,
        hispanic: 45.8,
        asian: 1.6,
        other: 1.4
      },
      education: {
        highSchool: 82.4,
        bachelors: 42.3,
        graduate: 12.8
      },
      housing: {
        ownedHomes: 48.6,
        medianHomeValue: 275000,
        medianRent: 1250
      }
    }
  },
  {
    zipCode: "75209",
    name: "Love Field",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.848, 32.794],
          [-96.828, 32.794],
          [-96.828, 32.78],
          [-96.848, 32.78],
          [-96.848, 32.794]
        ]
      ]
    },
    demographics: {
      population: 18754,
      medianAge: 36.2,
      medianIncome: 72460,
      race: {
        white: 48.5,
        black: 15.7,
        hispanic: 28.6,
        asian: 5.4,
        other: 1.8
      },
      education: {
        highSchool: 92.7,
        bachelors: 49.8,
        graduate: 16.3
      },
      housing: {
        ownedHomes: 42.5,
        medianHomeValue: 295000,
        medianRent: 1370
      }
    }
  },
  {
    zipCode: "75215",
    name: "South Dallas",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.788, 32.78],
          [-96.768, 32.78],
          [-96.768, 32.766],
          [-96.788, 32.766],
          [-96.788, 32.78]
        ]
      ]
    },
    demographics: {
      population: 14632,
      medianAge: 34.8,
      medianIncome: 38750,
      race: {
        white: 12.8,
        black: 57.6,
        hispanic: 27.2,
        asian: 0.8,
        other: 1.6
      },
      education: {
        highSchool: 78.2,
        bachelors: 18.5,
        graduate: 5.2
      },
      housing: {
        ownedHomes: 38.4,
        medianHomeValue: 165000,
        medianRent: 950
      }
    }
  }
];

// Color scale based on median income
export const getColorByIncome = (income: number): string => {
  if (income >= 150000) return '#084c61'; // Dark teal
  if (income >= 100000) return '#177e89'; // Medium teal
  if (income >= 75000) return '#44a4b5'; // Light teal
  if (income >= 50000) return '#7dcfe9'; // Very light teal
  return '#b9e3f0'; // Pale teal
};

// Get a Dallas zip code by its code
export const getZipCodeByCode = (code: string): ZipCodeData | undefined => {
  return dallasZipCodes.find(zip => zip.zipCode === code);
};

// Format currency values
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};

// Format percentage values
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
