export interface GetMembersRequest {
  skip: number;
  take: number;
  sort_enum: string;
  sort_by: string;
  status?: string;
  field?: string;
  type?: string;
  value?: string;
}
