import { AppStore, makeStore } from "@/lib/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { fetchDepositos } from "@/features/deposito/deposito-thunks";
import { fetchSaldos } from "@/features/saldo/saldo-thunks";
import { fetchMeusCartoes } from "@/features/meus-cartoes/meus-cartoes-thunks";

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
      storeRef.current.dispatch(fetchDepositos(user.id));
      storeRef.current.dispatch(fetchSaldos(user.id));
      storeRef.current.dispatch(fetchMeusCartoes(user.id));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
