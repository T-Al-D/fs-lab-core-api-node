export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: { code: string; message: string } | null;
  meta: {
    service: string;
    version: string;
    timestamp: string;
  };
};
