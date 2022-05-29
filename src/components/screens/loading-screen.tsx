import Column from "../atoms/column";

const LoadingScreen: React.FC = () => {
  return (
    <Column className="absolute inset-0 justify-center items-center w-full h-full space-y-16">
      <h1 className="text-[36pt] text-gray-600">Carregando</h1>
      <div className="w-[15vh] h-[15vh] bg-gray-300 rounded-full overflow-hidden flex justify-center items-center relative">
        <div className="w-[15vh] h-[15vh] bg-gradient-to-t from-gray-300 via-white to-gray-300 bg-white absolute animate-spin" />
        <div className="w-[10vh] h-[10vh] bg-white rounded-full absolute" />
      </div>
    </Column>
  );
};

export default LoadingScreen;
