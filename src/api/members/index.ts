import { AxiosResponse } from 'axios'
import { SearchResponse } from '../response'
import axios from '@/common/utils/axios'
import endpoints from '../endpoints'
import { GetMembersRequest } from './interfaces/list'
import { CommonResponse } from '../response'
import { CreateMemberRequest, CreateMemberResponse } from './interfaces/create'

export const getMembers = async (request: GetMembersRequest): Promise<any> => {
    const params = new URLSearchParams()
    params.append('skip', request.skip)
    params.append('take', request.take)
    params.append('sort_enum', request.sort_enum)
    params.append('sort_by', request.sort_by)

    const response: AxiosResponse<SearchResponse<any>> = await axios.get(
        endpoints.members.list,
        { params: params },
    )

    return response.data
};

export const createMember = async (formData: FormData): Promise<any> => {
    const response: AxiosResponse<CommonResponse<CreateMemberResponse>> =
        await axios.post(endpoints.members.create, formData)

    return response.data
};

export const getDetailMember = async (id: string): Promise<any> => {
    const response: AxiosResponse<CommonResponse<any>> = await axios.get(
        endpoints.members.detail(id),
    )

    return response.data
};

export const editMember = async (
    id: string,
    formData: FormData,
): Promise<any> => {
    const response: AxiosResponse<CommonResponse<any>> = await axios.put(
        endpoints.members.update(id),
        formData,
    )

    return response.data
};

export const deleteMember = async (id: string): Promise<any> => {
    const response: AxiosResponse<CommonResponse<any>> = await axios.delete(
        endpoints.members.delete(id),
    )

    return response.data
}