
export interface ZipCodeData {
  zipCode: string;
  name: string;
  geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
  age: string;
  ethnicity: string;
  medical: string;
  snapBenefits: boolean;
  income: number;
}

export interface AssistanceFlags {
  financial: boolean; // Income < $30,000
  food: boolean;      // No SNAP benefits when income is low
  medical: boolean;   // Uninsured or CHIP
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
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 57850
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
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Other",
    snapBenefits: false,
    income: 81200
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
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 22250
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
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 24475
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
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 28184
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
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 22250
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
    age: "18-24",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 20767
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
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 35579
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
  return {
    financial: needsFinancialAssistance(zipData.income),
    food: needsFoodAssistance(zipData.snapBenefits, zipData.income),
    medical: needsMedicalAssistance(zipData.medical)
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
