import axios from '@/common/utils/axios'
import { AxiosResponse } from 'axios'
import endpoints from '../endpoints'
import { CommonResponse } from '../response'
import { CreatePackageRequest, CreatePackageResponse } from './interfaces'



export const createPackage = async (request: CreatePackageRequest) => {
    const response: AxiosResponse<CommonResponse<CreatePackageResponse>> =
        await axios.post(endpoints.packages.create, { ...request });
    return response;
};

