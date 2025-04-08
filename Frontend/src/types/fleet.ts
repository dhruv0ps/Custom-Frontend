export interface CompanyDetails {
  companyName: string;
  abn?: string;
  contactName: string;
  contactEmail: string;
  contactPhoneNumber: string;
  industryType: string;
  otherIndustryType?: string;
}

export interface FleetAcquisitionDetails {
  numberOfVehicles: number;
  preferredVehicleTypes: string[];
  preferredManufacturers: string[];
  vehicleSpecifications: {
    transmissionType: string;
    fuelType: string;
    bodyType: string;
    seatingCapacity?: number;
    estimatedBudgetPerVehicle: number;
    deliveryLocation: string;
    deliveryTimeline: string;
  };
  financingRequired: boolean;
  additionalRequirements?: string;
}

export interface VehicleDetails {
  makeModel: string;
  yearOfManufacture: number;
  mileage: number;
  condition: string;
  registrationStatus: boolean;
  numberPlates?: string[];
  vin?: string;
  expectedSalePrice?: number;
  photos?: (File | string)[];
  additionalDetails?: string;
  pickupLocation: string;
  disposalTimeline: string;
  transportationAssistanceRequired: boolean;
}

export interface FleetDisposalDetails {
  numberOfVehicles: number;
  vehicleDetails: VehicleDetails[];
}

export interface InventoryUpload {
  document?: string;
}

export interface AdditionalSupport {
  accountManagerRequired: boolean;
}

export interface Submission {
  comments?: string;
  supportingDocuments?: string[];
}

export interface BusinessRequest {
  companyDetails: CompanyDetails;
  requestType: string;
  fleetAcquisitionDetails?: FleetAcquisitionDetails;
  fleetDisposalDetails?: FleetDisposalDetails;
  inventoryUpload?: InventoryUpload;
  additionalSupport?: AdditionalSupport;
  submission?: Submission;
  inventoryDocument?: string | null; 
}

