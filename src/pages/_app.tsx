import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { ReactQueryDevtools } from "react-query/devtools";
import showToastContext from "../components/contexts/show-toast-context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <showToastContext.Provider
        value={{
          successToast: (text) => toast.success(text),
          errorToast: (text) => toast.error(text),
          infoToast: (text) => toast.error(text),
        }}
      >
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </showToastContext.Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
