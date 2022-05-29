import { AxiosError } from "axios";
import Column from "../atoms/column";

interface ErrorScreenProps {
  error: AxiosError;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ error }) => {
  return (
    <Column className="absolute inset-0 justify-center items-center w-full h-full space-y-16 bg-red-300">
      <h1 className="text-[36pt] text-black">{error.message}</h1>
      <Column className="bg-white p-2 rounded-md text-center">
        <span className="font-bold">{error.code}</span>
        {error.code === "ERR_NETWORK" && (
          <p>Houve um problema na conexão com o servidor.</p>
        )}
      </Column>
    </Column>
  );
};

export default ErrorScreen;
