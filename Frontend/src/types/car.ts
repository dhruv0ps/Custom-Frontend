export interface BaseModel {
  _id: string;
  name: string;
  image: string | null;
}

export interface priceRange {
  minPrice: number | null;
  maxPrice: number | null;
}

export interface Model {
  id: number;
  make: BaseModel;
  name: string;
  year: string | null;
  image: string | null;
  body_type: BaseModel | null;
  fuel_type: BaseModel | null;
  title: string;
  description: string | null;
  starting_from: number;
  fuel_efficiency: number | null;
  ancap_rating: number | null;
  customer_rating: number | null;
  warranty: number | null;
  review_video: string | null;
}

export interface ModelWithVariants {
  _id: string;
  make: string;
  model: string;
  bodyType: string;
  fuelType: string;
  variants: Variant[];
  ancapRating: string;
  warranty: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Models {
  model: Variant[];
}

export interface VariantsResponse {
  variants: Variant[];
}

export interface CurrentModels {
  models: ModelDetails[]; 
}

export interface FormData {
  make: BaseModel;
  model: string;
  variant: Variant;
  assistanceRequired: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  state: string;
  verificationCode: string;
}

export interface ModelDetails {
  model: string; 
  image: string; 
}

export interface Variant {
  _id: string;
  variantTitle: string;
  variantPrice: string;
  variantDescription: string;
}

export interface CarData {
  status: boolean;
  data: {
    _id: string;
    customer: string;
    registration: {
      isRegistered: string;
      registrationNumber: string;
      _id: string;
    };
    carDetails: {
      state: string;
      make: string;
      model: string;
      colour: string;
      year: string;
      variant: string;
      bodyType: string;
      fuelType: string;
      driveType: string;
      transmission: string;
      is_compliance_plate : string
      compliancePlate: string;
      knowsVin: string;
      vin : string
      is_chasis : string
      chassis: string | null;
      is_engine_number : string
      engineNumber: string;
      _id: string;
    };
    condition: {
      odometer: string;
      hasOwnerManual: string;
      serviceHistory: string;
      serviceHistoryDetails: string;
      numberOfKeys: string;
      tyresNeedReplacement: string;
      writtenOff: string;
      stolen: string;
      financeOwing: string;
      _id: string;
    };
    exteriorCondition: number;
    interiorCondition: number;
    exteriorImages: Array<{
      type: string;
      url: string;
      _id: string;
    }>;
    interiorImages: Array<{
      type: string;
      url: string;
      _id: string;
    }>;
    extraFeaturesImages: Array<{
      type: string;
      url: string;
      _id: string;
    }>;
    damagesImages: Array<{
      type: string;
      url: string;
      _id: string;
    }>;
    carDescription: string | null;
    preferredPickup: string;
    preferredTime: string;
    contactTime: string;
    buyingNewCar: string;
    sellTimeframe: string;
    promotional: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}