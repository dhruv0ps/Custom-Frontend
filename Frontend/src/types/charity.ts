export interface CharityFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

// export interface charityPayments {
//   payments : payments
// }

export interface charityPayments {
  _id: string;
  user: string;
  charityId: string;
  paymentIntentId: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Charity {
  _id: string;
  title: string;
  description: string;
  image: string;
}
