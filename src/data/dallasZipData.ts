
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
    assistance: {
      snapBenefits: number; // Percentage of households receiving SNAP benefits
      medicalInsurance: {
        insured: number; // Percentage of residents with insurance
        type: {
          private: number;
          medicaid: number;
          medicare: number;
          other: number;
        }
      }
    }
  };
}

export interface AssistanceFlags {
  financial: boolean; // Income < $30,000
  food: boolean;      // Low SNAP benefits usage
  medical: boolean;   // High uninsured rate
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
      },
      assistance: {
        snapBenefits: 5.2,
        medicalInsurance: {
          insured: 92.5,
          type: {
            private: 82.0,
            medicaid: 4.5,
            medicare: 3.0,
            other: 3.0
          }
        }
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
      medianIncome: 26500,
      race: {
        white: 28.4,
        black: 25.2,
        hispanic: 38.7,
        asian: 5.9,
        other: 1.8
      },
      education: {
        highSchool: 76.8,
        bachelors: 28.2,
        graduate: 10.6
      },
      housing: {
        ownedHomes: 22.3,
        medianHomeValue: 185000,
        medianRent: 975
      },
      assistance: {
        snapBenefits: 22.5,
        medicalInsurance: {
          insured: 68.2,
          type: {
            private: 38.7,
            medicaid: 21.3,
            medicare: 5.2,
            other: 3.0
          }
        }
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
      },
      assistance: {
        snapBenefits: 3.8,
        medicalInsurance: {
          insured: 94.7,
          type: {
            private: 87.5,
            medicaid: 2.4,
            medicare: 2.8,
            other: 2.0
          }
        }
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
      },
      assistance: {
        snapBenefits: 0.8,
        medicalInsurance: {
          insured: 98.5,
          type: {
            private: 95.5,
            medicaid: 0.4,
            medicare: 2.2,
            other: 0.4
          }
        }
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
      medianIncome: 28500,
      race: {
        white: 22.3,
        black: 34.8,
        hispanic: 36.7,
        asian: 4.4,
        other: 1.8
      },
      education: {
        highSchool: 74.2,
        bachelors: 18.7,
        graduate: 5.2
      },
      housing: {
        ownedHomes: 24.8,
        medianHomeValue: 125000,
        medianRent: 825
      },
      assistance: {
        snapBenefits: 26.3,
        medicalInsurance: {
          insured: 65.8,
          type: {
            private: 32.1,
            medicaid: 24.6,
            medicare: 6.8,
            other: 2.3
          }
        }
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
      medianIncome: 35820,
      race: {
        white: 18.7,
        black: 12.5,
        hispanic: 65.8,
        asian: 1.6,
        other: 1.4
      },
      education: {
        highSchool: 72.4,
        bachelors: 22.3,
        graduate: 6.8
      },
      housing: {
        ownedHomes: 48.6,
        medianHomeValue: 165000,
        medianRent: 950
      },
      assistance: {
        snapBenefits: 18.2,
        medicalInsurance: {
          insured: 71.5,
          type: {
            private: 42.3,
            medicaid: 19.8,
            medicare: 7.2,
            other: 2.2
          }
        }
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
      },
      assistance: {
        snapBenefits: 9.8,
        medicalInsurance: {
          insured: 87.2,
          type: {
            private: 68.5,
            medicaid: 8.7,
            medicare: 8.0,
            other: 2.0
          }
        }
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
      medianIncome: 24750,
      race: {
        white: 6.8,
        black: 67.6,
        hispanic: 23.2,
        asian: 0.8,
        other: 1.6
      },
      education: {
        highSchool: 68.2,
        bachelors: 12.5,
        graduate: 3.2
      },
      housing: {
        ownedHomes: 38.4,
        medianHomeValue: 95000,
        medianRent: 750
      },
      assistance: {
        snapBenefits: 34.5,
        medicalInsurance: {
          insured: 58.2,
          type: {
            private: 26.7,
            medicaid: 22.3,
            medicare: 7.8,
            other: 1.4
          }
        }
      }
    }
  }
];

// Helper to determine if a zip code needs financial assistance
export const needsFinancialAssistance = (income: number): boolean => {
  return income < 30000;
};

// Helper to determine if a zip code needs food assistance
// Threshold: Less than 15% of households receiving SNAP benefits in low-income areas
export const needsFoodAssistance = (snapPercentage: number, income: number): boolean => {
  return income < 50000 && snapPercentage < 15;
};

// Helper to determine if a zip code needs medical assistance
// Threshold: Less than 75% of residents insured
export const needsMedicalAssistance = (insuredPercentage: number): boolean => {
  return insuredPercentage < 75;
};

// Get assistance flags for a zip code
export const getAssistanceFlags = (zipData: ZipCodeData): AssistanceFlags => {
  const { medianIncome } = zipData.demographics;
  const snapBenefits = zipData.demographics.assistance.snapBenefits;
  const insuredPercentage = zipData.demographics.assistance.medicalInsurance.insured;
  
  return {
    financial: needsFinancialAssistance(medianIncome),
    food: needsFoodAssistance(snapBenefits, medianIncome),
    medical: needsMedicalAssistance(insuredPercentage)
  };
};

// Color scale based on median income - red to green gradient
export const getColorByIncome = (income: number): string => {
  if (income >= 150000) return '#1e8f4e'; // Dark green
  if (income >= 100000) return '#34d27b'; // Medium green
  if (income >= 75000) return '#7ae2a8'; // Light green
  if (income >= 50000) return '#ffe1a8'; // Light yellow
  if (income >= 35000) return '#ffb347'; // Light orange
  if (income >= 30000) return '#ff8c42'; // Medium orange
  return '#e45c3a';  // Red for lower income
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
