'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from './get-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  console.log('===', import.meta.env);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
