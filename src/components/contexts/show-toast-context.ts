import { Context, createContext } from "react";

type ToastType = (text: string) => void | undefined;
type ToastContextType = {
  successToast: ToastType;
  errorToast: ToastType;
  infoToast: ToastType;
};

const showToastContext: Context<ToastContextType> = createContext(undefined);

export default showToastContext;
