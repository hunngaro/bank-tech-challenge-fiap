import { AppStore, makeStore } from "@/lib/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { fetchDepositos } from "@/features/deposito/deposito-thunks";
import { fetchSaldos } from "@/features/saldo/saldo-thunks";
import { fetchMeusCartoes } from "@/features/meus-cartoes/meus-cartoes-thunks";
import toast from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    const state = storeRef.current.getState();
    if (state.auth.user) {
      const { user } = state.auth;
      storeRef.current
        .dispatch(fetchDepositos(user.id))
        .unwrap()
        .catch((error) => toast.error(error));
      storeRef.current
        .dispatch(fetchSaldos(user.id))
        .unwrap()
        .catch((error) => toast.error(error));
      storeRef.current
        .dispatch(fetchMeusCartoes(user.id))
        .unwrap()
        .catch((error) => toast.error(error));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
