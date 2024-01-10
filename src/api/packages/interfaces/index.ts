export interface CreatePackageRequest {
  name?: string;
  price?: number;
  type?: number;
  usage_type?: number;
  usage_limit?: number;
  free_service?: number[];
  status?: number;
  note?: string;
  commission_for_sellers?: number;
  referral_commission?: number;
  employee_referral_commission?: number;
  commission_status?: number;
}

export interface CreatePackageResponse {
  name?: string;
  price?: number;
  type?: number;
  usage_type?: number;
  usage_limit?: number;
  free_service?: number[];
  status?: number;
  note?: string;
  commission_for_sellers?: number;
  referral_commission?: number;
  employee_referral_commission?: number;
  commission_status?: number;
}

export interface GetPackagesRequest {
  skip: number;
  take: number;
  sort_enum: string;
  sort_by: string;
  status?: string;
  field?: string;
  type?: string;
  value?: string;
}

export interface EditPackageRequest {
  name?: string;
  price?: number;
  type?: number;
  usage_type?: number;
  usage_limit?: number;
  free_service?: number[];
  status?: number;
  note?: string;
  commission_for_sellers?: number;
  referral_commission?: number;
  employee_referral_commission?: number;
  commission_status?: number;
}
