import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Se não houver token, redirecione para a página de login
      const timerId = setTimeout(() => {
        router.replace("./login");
      }, 2000);

      // Limpe o timer ao desmontar o componente
      return () => clearTimeout(timerId);
    }
  }, [router]);

  return (
    <>
      {localStorage.getItem("token") ? (
        children
      ) : (
        <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
          <h1 className="text-3xl "> Faça login para acessar esta página.</h1>
        </div>
      )}
    </>
  );
};
