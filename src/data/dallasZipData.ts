
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
  },
  {
    zipCode: "75001",
    name: "Addison",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.840, 32.960],
          [-96.830, 32.960],
          [-96.830, 32.950],
          [-96.840, 32.950],
          [-96.840, 32.960]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 27509
  },
  {
    zipCode: "75006",
    name: "Carrollton",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.910, 32.970],
          [-96.900, 32.970],
          [-96.900, 32.960],
          [-96.910, 32.960],
          [-96.910, 32.970]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 26218
  },{
    zipCode: "75010",
    name: "Hebron",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.9, 32.9],
          [-96.89, 32.9],
          [-96.89, 32.89],
          [-96.9, 32.89],
          [-96.9, 32.9]
        ]
      ]
    },
    age: "18-24",
    ethnicity: "Hispanic",
    medical: "Other",
    snapBenefits: false,
    income: 28184
  },
  {
    zipCode: "75019",
    name: "Coppell",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.89, 32.91],
          [-96.88, 32.91],
          [-96.88, 32.9],
          [-96.89, 32.9],
          [-96.89, 32.91]
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
    zipCode: "75040",
    name: "Garland North",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.88, 32.92],
          [-96.87, 32.92],
          [-96.87, 32.91],
          [-96.88, 32.91],
          [-96.88, 32.92]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 50800
  },
  {
    zipCode: "75041",
    name: "Garland East",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.87, 32.93],
          [-96.86, 32.93],
          [-96.86, 32.92],
          [-96.87, 32.92],
          [-96.87, 32.93]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 24475
  },
  {
    zipCode: "75042",
    name: "Garland Central",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.86, 32.94],
          [-96.85, 32.94],
          [-96.85, 32.93],
          [-96.86, 32.93],
          [-96.86, 32.94]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 26700
  },
  {
    zipCode: "75043",
    name: "Garland South",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.85, 32.95],
          [-96.84, 32.95],
          [-96.84, 32.94],
          [-96.85, 32.94],
          [-96.85, 32.95]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 44720
  },
  {
    zipCode: "75044",
    name: "Garland Northeast",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.84, 32.96],
          [-96.83, 32.96],
          [-96.83, 32.95],
          [-96.84, 32.95],
          [-96.84, 32.96]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 28184
  },
  {
    zipCode: "75050",
    name: "Grand Prairie North",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.83, 32.97],
          [-96.82, 32.97],
          [-96.82, 32.96],
          [-96.83, 32.96],
          [-96.83, 32.97]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 44158
  },
  {
    zipCode: "75051",
    name: "Grand Prairie Central",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.82, 32.98],
          [-96.81, 32.98],
          [-96.81, 32.97],
          [-96.82, 32.97],
          [-96.82, 32.98]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 34543
  },
  {
    zipCode: "75052",
    name: "Grand Prairie South",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.81, 32.99],
          [-96.80, 32.99],
          [-96.80, 32.98],
          [-96.81, 32.98],
          [-96.81, 32.99]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 41958
  },
  {
    zipCode: "75054",
    name: "Grand Prairie Southeast",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.80, 33.0],
          [-96.79, 33.0],
          [-96.79, 32.99],
          [-96.80, 32.99],
          [-96.80, 33.0]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 33768
  },
  {
    zipCode: "75060",
    name: "Irving Central",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.79, 33.01],
          [-96.78, 33.01],
          [-96.78, 33.0],
          [-96.79, 33.0],
          [-96.79, 33.01]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "CHIP",
    snapBenefits: false,
    income: 25814
  },
  {
    zipCode: "75061",
    name: "Irving South",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.78, 33.02],
          [-96.77, 33.02],
          [-96.77, 33.01],
          [-96.78, 33.01],
          [-96.78, 33.02]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Other",
    snapBenefits: false,
    income: 32420
  },
  {
    zipCode: "75062",
    name: "Irving West",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.77, 33.03],
          [-96.76, 33.03],
          [-96.76, 33.02],
          [-96.77, 33.02],
          [-96.77, 33.03]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 44250
  },
  {
    zipCode: "75063",
    name: "Valley Ranch",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.76, 33.04],
          [-96.75, 33.04],
          [-96.75, 33.03],
          [-96.76, 33.03],
          [-96.76, 33.04]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 46453
  },
  {
    zipCode: "75080",
    name: "Richardson West",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.75, 33.05],
          [-96.74, 33.05],
          [-96.74, 33.04],
          [-96.75, 33.04],
          [-96.75, 33.05]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 27320
  },
  {
    zipCode: "75081",
    name: "Richardson Central",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.74, 33.06],
          [-96.73, 33.06],
          [-96.73, 33.05],
          [-96.74, 33.05],
          [-96.74, 33.06]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "CHIP",
    snapBenefits: false,
    income: 27320
  },
  {
    zipCode: "75082",
    name: "Richardson East",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.73, 33.07],
          [-96.72, 33.07],
          [-96.72, 33.06],
          [-96.73, 33.06],
          [-96.73, 33.07]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 27320
  },
  {
    zipCode: "75088",
    name: "Rowlett Central",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.72, 33.08],
          [-96.71, 33.08],
          [-96.71, 33.07],
          [-96.72, 33.07],
          [-96.72, 33.08]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 27320
  },
  {
    zipCode: "75104",
    name: "Cedar Hill",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.70, 33.10],
          [-96.69, 33.10],
          [-96.69, 33.09],
          [-96.70, 33.09],
          [-96.70, 33.10]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 35820
  },
  {
    zipCode: "75115",
    name: "DeSoto",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.69, 33.11],
          [-96.68, 33.11],
          [-96.68, 33.10],
          [-96.69, 33.10],
          [-96.69, 33.11]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Other",
    snapBenefits: false,
    income: 26785
  },
  {
    zipCode: "75116",
    name: "Duncanville",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.68, 33.12],
          [-96.67, 33.12],
          [-96.67, 33.11],
          [-96.68, 33.11],
          [-96.68, 33.12]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 25500
  },
  {
    zipCode: "75134",
    name: "Lancaster North",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.67, 33.13],
          [-96.66, 33.13],
          [-96.66, 33.12],
          [-96.67, 33.12],
          [-96.67, 33.13]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 23800
  },
  {
    zipCode: "75137",
    name: "Duncanville South",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.66, 33.14],
          [-96.65, 33.14],
          [-96.65, 33.13],
          [-96.66, 33.13],
          [-96.66, 33.14]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "CHIP",
    snapBenefits: false,
    income: 26750
  },
  {
    zipCode: "75141",
    name: "Hutchins",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.65, 33.15],
          [-96.64, 33.15],
          [-96.64, 33.14],
          [-96.65, 33.14],
          [-96.65, 33.15]
        ]
      ]
    },
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: true,
    income: 19500
  },
  {
    zipCode: "75146",
    name: "Lancaster Central",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.64, 33.16],
          [-96.63, 33.16],
          [-96.63, 33.15],
          [-96.64, 33.15],
          [-96.64, 33.16]
        ]
      ]
    },
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 23800
  },
  {
    zipCode: "75149",
    name: "Mesquite East",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.63, 33.17],
          [-96.62, 33.17],
          [-96.62, 33.16],
          [-96.63, 33.16],
          [-96.63, 33.17]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Other",
    snapBenefits: false,
    income: 30720
  },
  {
    zipCode: "75150",
    name: "Mesquite West",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.62, 33.18],
          [-96.61, 33.18],
          [-96.61, 33.17],
          [-96.62, 33.17],
          [-96.62, 33.18]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 32000
  },
  {
    zipCode: "75159",
    name: "Seagoville",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.61, 33.19],
          [-96.60, 33.19],
          [-96.60, 33.18],
          [-96.61, 33.18],
          [-96.61, 33.19]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 21700
  },{
    zipCode: "75172",
    name: "Wilmer",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.60, 33.20],
          [-96.59, 33.20],
          [-96.59, 33.19],
          [-96.60, 33.19],
          [-96.60, 33.20]
        ]
      ]
    },
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: true,
    income: 18500
  },
  {
    zipCode: "75180",
    name: "Balch Springs",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.59, 33.21],
          [-96.58, 33.21],
          [-96.58, 33.20],
          [-96.59, 33.20],
          [-96.59, 33.21]
        ]
      ]
    },
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: true,
    income: 23950
  },
  {
    zipCode: "75181",
    name: "Mesquite South",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.58, 33.22],
          [-96.57, 33.22],
          [-96.57, 33.21],
          [-96.58, 33.21],
          [-96.58, 33.22]
        ]
      ]
    },
    age: "25-34",
    ethnicity: "Hispanic",
    medical: "CHIP",
    snapBenefits: false,
    income: 27750
  },
  {
    zipCode: "75182",
    name: "Sunnyvale",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.57, 33.23],
          [-96.56, 33.23],
          [-96.56, 33.22],
          [-96.57, 33.22],
          [-96.57, 33.23]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 30500
  },
  {
    zipCode: "75089",
    name: "Rowlett North",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.71, 33.09],
          [-96.70, 33.09],
          [-96.70, 33.08],
          [-96.71, 33.08],
          [-96.71, 33.09]
        ]
      ]
    },
    age: "45-54",
    ethnicity: "Hispanic",
    medical: "Uninsured",
    snapBenefits: false,
    income: 27320
  },
  {
    zipCode: "75007",
    name: "Carrollton North",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-96.930, 33.000],
          [-96.920, 33.000],
          [-96.920, 32.990],
          [-96.930, 32.990],
          [-96.930, 33.000]
        ]
      ]
    },
    age: "35-44",
    ethnicity: "Hispanic",
    medical: "Medicaid",
    snapBenefits: false,
    income: 31472
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
