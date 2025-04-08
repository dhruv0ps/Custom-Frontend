export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile : string;
  generational_group : string;
  suburb : string;
  state : string;
  post_code : number;
  street_address : string;
}

export interface PromotionDraw {
  _id: string;
  bucketName: string;
  description: string;
  image: string;
  prizeDescription: string;
  scheduledDate: string;
  status: "Upcoming" | "Active" | "Completed";
  drawID: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Winner {
  _id: string;
  winnerID: string;
  drawID: PromotionDraw;
  memberID: User;
  selectionMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormInputs {
  memberID: string;
  name: string;
  billType: string;
  dueDate: string;
  issueDate: string;
  billAmount: number;
  verificationStatus: string;
  rejectionReason?: string;
  file: FileList;
}

export interface billUpload {
  memberID: string;
  name: string;
  billType: string;
  dueDate: string;
  issueDate: string;
  billAmount: number;
  verificationStatus: string;
  rejectionReason?: string;
  file: FileList;
}

export interface BillFormData {
  memberID: string;
  name: string;
  billType: string;
  uploadData: string;
  verificationStatus: string;
  rejectionReason: string;
  dueDate: Date | null;
  issueDate: Date | null;
  billAmount: number;
}
