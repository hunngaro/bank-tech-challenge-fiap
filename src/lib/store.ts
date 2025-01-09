import { authReducer } from "@/features/auth/auth-slice";
import { depositoReducer } from "@/features/deposito/deposito-slice";
import { meusCartoesReducer } from "@/features/meus-cartoes/meus-cartoes-slice";
import { saldoReducer } from "@/features/saldo/saldo-slice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      deposito: depositoReducer,
      saldo: saldoReducer,
      meusCartoes: meusCartoesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
