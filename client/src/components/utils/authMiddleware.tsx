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
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
};
