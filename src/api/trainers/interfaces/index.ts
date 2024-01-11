export interface CreateTrainerRequest {
  name: string;
  avatar: any;
  cetificate: any;
  birth_date: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  status: number;
  note: string;
  facebook: string;
}

export interface CreateTrainerResponse {
  name: string;
  avatar: any;
  cetificate: any;
  birth_date: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  status: number;
  note: string;
  facebook: string;
}

export interface GetTrainersRequest {
  skip: number;
  take: number;
  sort_enum: string;
  sort_by: string;
  status?: string;
  field?: string;
  type?: string;
  value?: string;
}
