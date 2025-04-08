export interface FormData {
    fullName: string;
    email: string;
    phone: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    vin: string;
    estimatedValue: string;
    vehicleCondition: string;
    primaryUse: string;
    ageGroup: string;
    drivingExperience: string;
    insuranceStatus: string;
    numDrivers: string;
    drivingHistory: string;
    coverage: string[];
    addOns: string[];
    additionalComments: string;
    license: File | null;
    proofOfOwnership: File | null;
    previousInsurance: File | null;
    consent: boolean;
}

export interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    vehicleMake?: string;
    vehicleModel?: string;
    vehicleYear?: string;
    vin?: string;
    estimatedValue?: string;
    vehicleCondition?: string;
    primaryUse?: string;
    ageGroup?: string;
    drivingExperience?: string;
    insuranceStatus?: string;
    numDrivers?: string;
    drivingHistory?: string;
    coverage?: string;
    addOns?: string;
    license?: string;
    proofOfOwnership?: string;
    previousInsurance?: string;
    consent?: string;
    additionalComments?: string;
}

export interface DocumentUploads {
    license: string;
    proofOfOwnership: string;
    previousInsurance: string;
  }
  
  export interface VehicleInformation {
    makeAndModel: string;
    yearOfManufacture: number;
    vin: string;
    estimatedValue: number;
    newOrUsed: "New" | "Used";
    primaryUse: "Personal" | "Business";
  }
  
  export interface DriverInformation {
    ageGroup: "under25" | "25to30" | "31to40" | "41to50" | "51to60" | "over60";
    yearsOfDrivingExperience: number;
    currentInsuranceStatus: "Insured" | "Uninsured";
    currentInsurer: string;
    numberOfDrivers: number;
  }
  
  export interface DrivingHistory {
    trafficViolations: Array<"recklessDriving" | "drivingUndertheInfluence(DUI)" | "speeding" | "other">;
    accidentHistory: Array<"noAccidents" | "minorAtFault" | "majorAtFault" | "notAtFault">;
  }
  
  export interface CoverageTypes {
    comprehensive: boolean;
    thirdPartyPropertyDamage: boolean;
    thirdPartyFireAndTheft: boolean;
  }
  
  export interface OptionalAddOns {
    roadsideAssistance: boolean;
    rentalCarCoverage: boolean;
    windscreenReplacement: boolean;
    accessories: boolean;
  }
  
  export interface DesiredInsuranceCoverage {
    coverageTypes: CoverageTypes;
    optionalAddOns: OptionalAddOns;
    additionalComments: string;
  }
  
  export interface InsuranceData {
    vehicleInformation: VehicleInformation;
    driverInformation: DriverInformation;
    drivingHistory: DrivingHistory;
    desiredInsuranceCoverage: DesiredInsuranceCoverage;
    documentUploads: DocumentUploads;
    _id: string;
    userId: string;
    consent: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  