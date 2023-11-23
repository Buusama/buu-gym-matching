export interface CreateMemberRequest {
    name: string,
    avatar: any,
    birth_date: string,
    gender: string,

    phone: string,
    address: string,
    status: number,
}

export interface CreateMemberResponse {
    name: string,
    avatar: any,
    birth_date: string,
    gender: string,
    phone: string,
    address: string,
    status: number,
}