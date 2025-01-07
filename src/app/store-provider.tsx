import { AppStore, makeStore } from "@/lib/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import Cookies from "js-cookie";
import { User } from "@/features/auth/auth-slice";
import { fetchDepositos } from "@/features/deposito/deposito-thunks";
import { fetchSaldos } from "@/features/saldo/saldo-thunks";
import { fetchMeusCartoes } from "@/features/meus-cartoes/meus-cartoes-thunks";

interface Props {
  children: ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    const storageUser = Cookies.get("user");
    if (storageUser) {
      const user: User = JSON.parse(storageUser);
      storeRef.current.dispatch(fetchDepositos(user.id));
      storeRef.current.dispatch(fetchSaldos(user.id));
      storeRef.current.dispatch(fetchMeusCartoes(user.id));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
