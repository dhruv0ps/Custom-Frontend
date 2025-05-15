export interface Make {
  name: string;
  // Add other fields if needed (e.g., id, logo, etc.)
}

export interface VehicleDetails {
  make: Make;
  model: string;
  // Add more fields if your data contains them (e.g., year, variant)
}

export interface VirtualTourVideo {
  _id: string;
  videoUrl: string;
  vehicleDetails: VehicleDetails;
  topRank?: number;
  topVirtualTourOfTheMonth?: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
