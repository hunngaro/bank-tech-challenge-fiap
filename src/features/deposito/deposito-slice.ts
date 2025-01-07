import { createSlice } from "@reduxjs/toolkit";
import {
  addNewTransaction,
  fetchDepositos,
  removeTransaction,
  updateTransaction,
} from "./deposito-thunks";

export interface depositos {
  id: string;
  label: string;
  idUser: number;
  valor: number;
  data: string;
}

interface DepositoState {
  depositos: depositos[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: DepositoState = {
  depositos: [],
  status: "idle",
  error: null,
};

export const depositoSlice = createSlice({
  name: "deposito",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewTransaction.fulfilled, (state, action) => {
        state.status = "idle";
        state.depositos.push(action.payload);
      })
      .addCase(addNewTransaction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ocorreu um erro";
      })
      .addCase(updateTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.status = "idle";
        const depositos = state.depositos.map((deposito) =>
          deposito.id === action.payload.transactionId
            ? action.payload.data
            : deposito
        );
        state.depositos = depositos;
      })
      .addCase(updateTransaction.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.status = "idle";
        state.depositos = action.payload;
      })
      .addCase(removeTransaction.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchDepositos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDepositos.fulfilled, (state, action) => {
        state.status = "idle";
        state.depositos = action.payload;
      })
      .addCase(fetchDepositos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const depositoReducer = depositoSlice.reducer;
