export interface ApiResponse {
  status: string | null;
  message: string;
  errors?: Record<string, string>;
}
