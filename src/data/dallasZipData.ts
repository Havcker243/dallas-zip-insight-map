
export interface ZipCodeData {
  zipCode: string;
  name: string;
  geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
  demographics: {
    population: number;
    medianAge: string; // Changed to string to support ranges like "35-44"
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
      snapBenefits: boolean; // Changed to boolean based on "Yes/No" format
      medicalInsurance: {
        insured: boolean; // Changed to boolean
        type: string; // Changed to string for different insurance types like "Medicaid", "CHIP", etc.
      }
    }
  };
}

export interface AssistanceFlags {
  financial: boolean; // Income < $30,000
  food: boolean;      // No SNAP benefits when income is low
  medical: boolean;   // Uninsured
}

// This is simplified mock data based on the provided dataset
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
      medianAge: "35-44",
      medianIncome: 57850,
      race: {
        white: 5,
        black: 5,
        hispanic: 85,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 85,
        bachelors: 35,
        graduate: 12
      },
      housing: {
        ownedHomes: 28.5,
        medianHomeValue: 450000,
        medianRent: 1875
      },
      assistance: {
        snapBenefits: false,
        medicalInsurance: {
          insured: true,
          type: "Medicaid"
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
      medianAge: "25-34",
      medianIncome: 81200,
      race: {
        white: 10,
        black: 5,
        hispanic: 80,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 82,
        bachelors: 25,
        graduate: 8
      },
      housing: {
        ownedHomes: 22.3,
        medianHomeValue: 185000,
        medianRent: 975
      },
      assistance: {
        snapBenefits: false,
        medicalInsurance: {
          insured: true,
          type: "Other"
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
      medianAge: "35-44",
      medianIncome: 22250,
      race: {
        white: 10,
        black: 5,
        hispanic: 80,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 80,
        bachelors: 30,
        graduate: 10
      },
      housing: {
        ownedHomes: 31.7,
        medianHomeValue: 325000,
        medianRent: 1500
      },
      assistance: {
        snapBenefits: true,
        medicalInsurance: {
          insured: true,
          type: "Medicaid"
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
      medianAge: "25-34",
      medianIncome: 24475,
      race: {
        white: 15,
        black: 5,
        hispanic: 75,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 85,
        bachelors: 40,
        graduate: 20
      },
      housing: {
        ownedHomes: 40.5,
        medianHomeValue: 550000,
        medianRent: 1950
      },
      assistance: {
        snapBenefits: false,
        medicalInsurance: {
          insured: true,
          type: "Medicaid"
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
      medianAge: "25-34",
      medianIncome: 28184,
      race: {
        white: 5,
        black: 15,
        hispanic: 75,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 70,
        bachelors: 20,
        graduate: 5
      },
      housing: {
        ownedHomes: 20.8,
        medianHomeValue: 125000,
        medianRent: 825
      },
      assistance: {
        snapBenefits: false,
        medicalInsurance: {
          insured: true,
          type: "Medicaid"
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
      medianAge: "25-34",
      medianIncome: 22250,
      race: {
        white: 5,
        black: 10,
        hispanic: 80,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 75,
        bachelors: 25,
        graduate: 8
      },
      housing: {
        ownedHomes: 40.6,
        medianHomeValue: 165000,
        medianRent: 950
      },
      assistance: {
        snapBenefits: true,
        medicalInsurance: {
          insured: true,
          type: "Medicaid"
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
      medianAge: "18-24",
      medianIncome: 20767,
      race: {
        white: 10,
        black: 15,
        hispanic: 70,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 80,
        bachelors: 30,
        graduate: 10
      },
      housing: {
        ownedHomes: 35.5,
        medianHomeValue: 295000,
        medianRent: 1370
      },
      assistance: {
        snapBenefits: false,
        medicalInsurance: {
          insured: true,
          type: "Medicaid"
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
      medianAge: "35-44",
      medianIncome: 35579,
      race: {
        white: 5,
        black: 20,
        hispanic: 70,
        asian: 3,
        other: 2
      },
      education: {
        highSchool: 65,
        bachelors: 15,
        graduate: 5
      },
      housing: {
        ownedHomes: 30.4,
        medianHomeValue: 95000,
        medianRent: 750
      },
      assistance: {
        snapBenefits: false,
        medicalInsurance: {
          insured: false,
          type: "Uninsured"
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
// Threshold: No SNAP benefits and low income
export const needsFoodAssistance = (snapReceived: boolean, income: number): boolean => {
  return !snapReceived && income < 50000;
};

// Helper to determine if a zip code needs medical assistance
// Threshold: Uninsured or CHIP (which means limited coverage)
export const needsMedicalAssistance = (insuranceType: string): boolean => {
  return insuranceType === "Uninsured" || insuranceType.includes("CHIP");
};

// Get assistance flags for a zip code
export const getAssistanceFlags = (zipData: ZipCodeData): AssistanceFlags => {
  const { medianIncome } = zipData.demographics;
  const snapBenefits = zipData.demographics.assistance.snapBenefits;
  const insuranceType = zipData.demographics.assistance.medicalInsurance.type;
  
  return {
    financial: needsFinancialAssistance(medianIncome),
    food: needsFoodAssistance(snapBenefits, medianIncome),
    medical: needsMedicalAssistance(insuranceType)
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
