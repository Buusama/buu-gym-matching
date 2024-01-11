import axios from '@/common/utils/axios'
import { AxiosResponse } from 'axios'
import endpoints from '../endpoints'
import {
  CreatePackageRequest,
  CreatePackageResponse,
  EditPackageRequest,
  GetPackagesRequest,
} from './interfaces'
import { CommonResponse, SearchResponse } from '../response';

export const createPackage = async (
  request: CreatePackageRequest,
): Promise<CreatePackageResponse> => {
  const response: AxiosResponse<CreatePackageResponse> = await axios.post(
    endpoints.packages.create,
    request,
  )
  return response.data
};

export const getPackages = async (
  request: GetPackagesRequest,
): Promise<any> => {
  const params = new URLSearchParams()
  params.append('skip', request.skip.toString())
  params.append('take', request.take.toString())
  params.append('sort_enum', request.sort_enum)
  params.append('sort_by', request.sort_by)
  if (request.status) params.append('status', request.status)
  if (request.field && request.type && request.value) {
    params.append('field', request.field)
    params.append('type', request.type)
    params.append('value', request.value)
  }

  const response: AxiosResponse<SearchResponse<any>> = await axios.get(
    endpoints.packages.list,
    { params: params },
  )

  return response.data
};

export const deletePackage = async (id: string): Promise<any> => {
  const response: AxiosResponse<CommonResponse<any>> = await axios.delete(
    endpoints.packages.delete(id),
  )

  return response.data
}

export const getDetailPackage = async (id: string): Promise<any> => {
  const response: AxiosResponse<CommonResponse<any>> = await axios.get(
    endpoints.packages.detail(id),
  )

  return response.data
}

export const editPackage = async (
  id: string,
  request: EditPackageRequest,
): Promise<any> => {
  const response: AxiosResponse<CommonResponse<any>> = await axios.put(
    endpoints.packages.update(id),
    { ...request },
  )

  return response.data
}
