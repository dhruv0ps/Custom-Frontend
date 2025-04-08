import { BaseModel } from "./car";

export interface User {
    first_name: string;
    last_name: string;
    name: string;
    userType: string; 
    dob : string;
    email: string;
    id: string;
    avatar? : string;
    mobile?: string; 
    generational_group?: string;
    suburb?: string; 
    state?: string; 
    post_code?: string; 
    street_address? : string;
    customerId?: string; 
    isNewUser: boolean;
    isMember: boolean;
}

export interface UserRegisterRequestData {
    email: string;
    user_type: string;
    first_name: string;
    last_name: string;
    password: string;
    dob : string;
}

export interface UserProfile {
    _id?: string;
    mobile: string;
    generational_group: string;
    suburb: string;
    state: string;
    post_code: number;
    street_address? : string;
    user: string;
}

export interface UserVehicle {
    _id : string,
    user: string,
    VehiclePlate: string,
    make: BaseModel,
    bodyType: BaseModel,
    membership_id : string,
    membership_status : string,
    model: string,
    variant : string,
    yearOfManufacture: string,
    km: number,
    color: string,
    transmission:string,
    carImage : string,
    validity : string,
} 