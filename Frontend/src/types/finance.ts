import { BaseModel, Variant } from "./car";

export interface FinanceEnquiryFormValues {
    fullName: string;
    email: string;
    phoneNumber: string;
    maritalStatus: string;
    numberOfDependents: number;
    residencyStatus: string;
    make: string;
    model: string;
    variant: string;
    yearOfManufacture: number;
    estimatedPrice: string;
    proofOfID: File | null;
    residencyProof: File | null;
  }

  export interface Finance {
    _id: string;
    user: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    maritalStatus: string;
    numberOfDependents: number;
    vehicleMake: BaseModel;
    vehicleModel: string;
    vehicleVariant: Variant;
    yearOfManufacture: number;
    estimatedPrice: string;
    newOrUsed: string;
    purchaseType: string;
    loanPurpose: string;
    loanTerm: number;
    desiredLoanAmount: number;
    annualIncome: number;
    monthlyExpenses: number;
    payslips: Document[];
    bankStatements: Document[];
    proofOfAddress: string; 
    photoID: string; 
    consent: boolean;
    financeOwing: string; 
    financeInstitutionType: string;
    financeInstitutionName: string;
    payoutLetter: string; 
    createdAt: string; 
    updatedAt: string; 
    __v: number;
  }
  
  export interface Document {
    url: string; // URL of the document
    type: string; // Type of document (e.g., "Payslip", "Bank Statement")
    _id: string;
  }
  