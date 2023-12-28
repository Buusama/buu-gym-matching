export interface CreatePackageRequest {
    name: string;
    price: number;
    type: number;
    usage_type: number;
    usage_limit: number;
    free_service: string;
    status: number;
    note: string;
    commission_for_sellers: number;
    referral_commission: number;
    employee_referral_commission: number;
    commission_status: number;
}

export interface CreatePackageResponse {
    name: string;
    price: number;
    type: number;
    usage_type: number;
    usage_limit: number;
    free_service: string;
    status: number;
    note: string;
    commission_for_sellers: number;
    referral_commission: number;
    employee_referral_commission: number;
    commission_status: number;
}
