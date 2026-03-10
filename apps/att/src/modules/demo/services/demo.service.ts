import { api } from '@us-telecoms/shared';
import type { ApiResponse } from '@us-telecoms/shared';

export async function fetchDemoData(): Promise<ApiResponse<unknown>> {
  const { data } = await api.get('/demo');
  return data;
}
