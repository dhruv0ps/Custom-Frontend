import { BaseModel } from "./car";

export interface Dealer {
  // businessType: string;
  // customBusinessType: string;
  dealershipName: string;
  dealerLicenseNumber: string;
  abn: string;
  manufacturer: string;
  businessOperations: string[];
  customBusinessOperation: string;
  dealershipAddress: string;
  state: string;
  primaryFirstName: string;
  primaryLastName: string;
  primaryPhoneNumber: string;
  primaryContactDob : string;
  primaryPositionTitle: string;
  customPrimaryPositionTitle: string;
  primaryEmail: string;
  primaryPassword: string;
  includeSecondaryContact: boolean;
  secondaryFirstName: string;
  secondaryLastName: string;
  secondaryPhoneNumber: string;
  secondaryContactDob : string;
  secondaryPositionTitle: string;
  customSecondaryPositionTitle: string;
  secondaryEmail: string;
  secondaryPassword: string;
  dealershipAffiliation: boolean;
  affiliationName : string;
}

export interface VehicleConditionHistory {
  serviceHistory: string;
  roadworthyCertificate: string;
  accidentHistory: string;
  ownershipHistory: string;
  interiorCondition: string;
  exteriorCondition: string;
}

export interface VehicleFeaturesOptions {
  entertainmentSystem: string[];
  safetyFeatures: string[];
  comfortFeatures: string[];
  wheelsAndTyres: string;
  technologyAndConnectivity: string[];
  interiorFeatures: string[];
  exteriorFeatures: string[];
  towingCapacity: number;
  fuelConsumption: {
    combined: string;
    city: string;
    highway: string;
  };
}

export interface PricingOffers {
  price: number;
  specialOffers: string;
}

export interface DealershipInfo {
  dealershipId : DealerShipDetails;
}

export interface DealerShipDetails {
  dealershipName: string;
  dealershipState: string;
  dealershipAddress: string;
  primaryContact: {
    name: string;
    phone: string;
    email: string;
  };
  positionTitle: string;
  abnNumber: string;
  dealerLicenseNumber: string;
  state : string;
  businessHours: string;
}

export interface MediaItem {
  url: string;
  _id: string;
}

export interface VehicleImagesMedia {
  photos: {
    interior: MediaItem[];
    exterior: MediaItem[];
    features: MediaItem[];
    damages: MediaItem[];
  };
  video: string;
}

export interface AdvertisingListingDetails {
  adHeadline: string;
  vehicleDescription: string;
  listingDuration: number;
  listingPackage: "Standard" | "Premium";
}

export interface Variant {
  variantTitle : string
  _id : string
  variantPrice : string
  variantDescription : string
}

export interface BasicInfo {
  category: string;
  make: BaseModel;
  model: string;
  variant: Variant;
  yearOfManufacture: number;
  bodyType: BaseModel;
  transmissionType: string;
  fuelType: BaseModel;
  engineCylinder: string;
  engineSizeL: string;
  kilometersDriven: number;
  drivetrain: string;
  vin: string;
  warrantyInformation: string;
  interiorColor: string;
  exteriorColor: string;
  stockNumber: string;
  regoLicensePlateNumber: string;
  registrationExpiryDate: string;
  upholsteryType: string;
}

export interface Vehicle
  extends VehicleConditionHistory,
    PricingOffers,
    VehicleFeaturesOptions,
    DealershipInfo,
    VehicleImagesMedia, 
    AdvertisingListingDetails,
    BasicInfo {
  _id?: string;
  basicInfo: BasicInfo;
  conditionHistory: VehicleConditionHistory;
  featuresOptions: VehicleFeaturesOptions;
  pricingOffers: PricingOffers;
  dealershipInfo: DealershipInfo;
  imagesMedia: VehicleImagesMedia;
  advertisingListing: AdvertisingListingDetails;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface VechicleRegistrationImageCreateRequestData {
  type: string;
  angle?: string | null;
  base64: string;
}