import { Variant } from "./car";

export interface BuyLead {
  _id: string;
  customer: string;
  createdAt?: string;
  updatedAt?: string;
  status: string;
  make?: string;
  model?: string;
  variant?: string | string[];
  needs_finance: boolean;
  needs_insurance: boolean;
  type_of_purchase?: string;
  business_name?: string;
  gst?: string;
  abn?: string;
  road_transport_authority?: string;
  buying_preference?: string;
  payment_method?: string;
}

export interface BuyLeadDetails {
  _id: string;
  customer: User;
  createdAt?: string;
  updatedAt?: string;
  status: string;
  make?: string;
  model?: string;
  variant?: Variants[];
  needs_finance: boolean;
  needs_insurance: boolean;
  type_of_purchase?: string;
  business_name?: string;
  gst?: string;
  abn?: string;
  road_transport_authority?: string;
  buying_preference?: string;
  payment_method?: string;
}

interface User {
  _id: string;
  first_name: string
  last_name: string;
  email : string;
}

export interface Variants {
  image: string;
  bodyType: string;
  fuelType: string;
  variant: Variant;
}
