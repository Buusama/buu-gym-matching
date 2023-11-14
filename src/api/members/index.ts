import { AxiosResponse } from 'axios';
import { SearchResponse } from '../response';
import axios from '@/common/utils/axios';
import endpoints from '../endpoints';
import { GetMembersRequest } from './interfaces/list';
import { CommonResponse } from "../response";


export const getMembers = async (request: GetMembersRequest): Promise<any> => {
    const params = new URLSearchParams()
    params.append('skip', request.skip);
    params.append('take', request.take);
    params.append('sort_enum', request.sort_enum);
    params.append('sort_by', request.sort_by);

    const response: AxiosResponse<SearchResponse<any>> = await axios.get(endpoints.members.list, { params: params });

    return response.data;
}