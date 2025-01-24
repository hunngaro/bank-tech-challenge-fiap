import { createSlice } from "@reduxjs/toolkit";
import { addSaldo, fetchSaldos } from "./saldo-thunks";

interface ContaInvestimentos {
  rendaFixa: number;
  rendaVariavel: number;
}

export interface saldos {
  id: string;
  idUser: string;
  contaCorrente: number;
  contaInvestimentos: ContaInvestimentos[];
}

interface SaldoState {
  saldos: saldos[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: SaldoState = {
  saldos: [],
  status: "idle",
  error: null,
};

export const saldoSlice = createSlice({
  name: "saldo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSaldo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addSaldo.fulfilled, (state, action) => {
        state.status = "idle";
        state.saldos.push(action.payload);
      })
      .addCase(addSaldo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ocorreu um erro";
      })
      .addCase(fetchSaldos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSaldos.fulfilled, (state, action) => {
        state.status = "idle";
        state.saldos = action.payload;
      })
      .addCase(fetchSaldos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const saldoReducer = saldoSlice.reducer
