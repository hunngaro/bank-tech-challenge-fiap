import { setUser, User } from "@/features/auth/auth-slice";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/lib/hooks";
import { fetchDepositos } from "@/features/deposito/deposito-thunks";
import { fetchSaldos } from "@/features/saldo/saldo-thunks";
import { fetchMeusCartoes } from "@/features/meus-cartoes/meus-cartoes-thunks";
import toast from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export function AuthWrapper({ children }: Props) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    async function loadData() {
      const storageUser = Cookies.get("user");
      if (storageUser) {
        const user: User = JSON.parse(storageUser);
        dispatch(setUser({ user }));
        await Promise.all([
          dispatch(fetchDepositos(user.id))
            .unwrap()
            .catch((error) => toast.error(error)),
          dispatch(fetchSaldos(user.id))
            .unwrap()
            .catch((error) => toast.error(error)),
          dispatch(fetchMeusCartoes(user.id))
            .unwrap()
            .catch((error) => toast.error(error)),
        ]);
      }
    }

    loadData();
  }, [pathname, dispatch]);

  return children;
}
