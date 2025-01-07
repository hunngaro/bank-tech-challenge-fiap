import { authReducer } from "@/features/auth/auth-slice";
import { depositoReducer } from "@/features/deposito/deposito-slice";
import { meusCartoesReducer } from "@/features/meus-cartoes/meus-cartoes-slice";
import { saldoReducer } from "@/features/saldo/saldo-slice";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    deposito: depositoReducer,
    saldo: saldoReducer,
    meusCartoes: meusCartoesReducer,
  },
});

export const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
