interface BaseVehicleInfo {
    registration?: string;
    vin?: string;
    chassis?: string;
    state?: string;
    make?: string;
    model?: string;
    variant?: string;
    colour?: string;
    year?: string;
    body_type?: string;
    fuel_type?: string;
    drive_type?: string;
    vehicle_type?: string;
    transmission?: string;
    engine_number?: string;
    odometer?: string;
    compliance_plate?: string;
}

interface BaseCondition {
    owner_manual?: string;
    service_history?: string;
    service_history_details?: string;
    no_of_keys?: string;
    tyres_replacement?: string;
    written_off?: string;
    stolen?: string;
    finance?: string;
    finance_institution?: string;
    exterior_condition?: number | string;
    interior_condition?: number | string;
    description?: string;
}

interface BaseCustomerDetails {
    car_kept?: string;
    preferred_pickup?: string;
    preferred_time?: string;
    contact_time?: string;
    buying_new_car?: string;
}

interface StolenIncident {
    incidentType: string;
    jurisdiction: string;
    reportedDate: string;
    summary: string;
}

interface WrittenOffIncident {
    incidentType: string;
    typeCode: string;
    jurisdiction: string;
    incidentCode: string;
    recordDate: string;
    damageCodes: string;
}

export interface SellFormData extends BaseVehicleInfo, BaseCondition, BaseCustomerDetails {
    rego: string;
    is_registered: string;
    is_engine_number: string;
    is_compliance_plate : string;
    is_vin: string;
    is_chasis : string ;
    written_off_info: { incidents: WrittenOffIncident[] };
    stolen_info: { incidents: StolenIncident[] };
    images: SellLeadImageCreateRequestData[];
}

export interface SellLead extends BaseVehicleInfo, BaseCondition, BaseCustomerDetails {
    id: string;
    customer: string;
    verified: boolean;
    created: string;
    modified: string;
    vehicle_type: string;
    written_off_info?: any;
    stolen_info?: any;
    status: string;
}

export interface SellLeadImage {
    id: number;
    lead: string;
    type: string;
    angle?: string;
    image: string;
    created: string;
    modified: string;
}

export interface SellLeadImageCreateRequestData {
    type: string;
    angle?: string | null;
    base64: string;
}

export interface SellLeadCreateRequestData extends BaseVehicleInfo, BaseCondition, BaseCustomerDetails {
    customer: string;
    rego?: string;
    is_vin: string;
    images: SellLeadImageCreateRequestData[];
}

export interface RegoReportData extends Omit<SellLeadCreateRequestData, 'customer' | 'images' | 'rego'> {
    rego : string;
    is_registered: string;
    is_engine_number: string;
    is_compliance_plate : string;
    is_vin: string;
    is_chasis : string ;
    verified: boolean;
    stolen_info: { incidents: StolenIncident[] };
    written_off_info: { incidents: WrittenOffIncident[] };
}
