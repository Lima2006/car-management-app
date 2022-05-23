import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
