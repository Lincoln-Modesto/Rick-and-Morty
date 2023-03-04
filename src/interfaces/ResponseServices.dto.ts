export interface ResponseDataDTO {
  data: any;
  errors?: {
    status?: number;
    statusText?: string;
  } | null;
}
