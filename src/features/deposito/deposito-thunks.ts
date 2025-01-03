import { createAsyncThunk } from "@reduxjs/toolkit";
import { depositos } from "./deposito-slice";
import { User } from "../auth/auth-slice";

export interface TransactionData {
  typeTransaction: string;
  valueTransaction: number;
  date: string;
}

export const addNewTransaction = createAsyncThunk(
  "deposito/addNewTransaction",
  async (payload: TransactionData, { getState }) => {
    try {
      const state = getState() as { auth: { user: User } };
      const user = state.auth.user;

      const data: depositos = {
        id: String(Math.random()),
        idUser: user!.id,
        label: payload.typeTransaction,
        valor: payload.valueTransaction,
        data: payload.date,
      };
      await fetch("http://localhost:3001/depositos", {
        method: "POST",
        body: JSON.stringify(data),
      });

      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "deposito/updateTransaction",
  async (
    payload: { transactionId: string; transactionData: TransactionData },
    { getState }
  ) => {
    const { transactionId, transactionData } = payload;
    const state = getState() as { auth: { user: User } };
    const user = state.auth.user;

    try {
      const data: depositos = {
        id: transactionId,
        idUser: user!.id,
        label: transactionData.typeTransaction,
        valor: transactionData.valueTransaction,
        data: transactionData.date,
      };
      await fetch(`http://localhost:3001/depositos/${transactionId}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      return {
        transactionId,
        data,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "deposito/removeTransaction",
  async (transactionId: string, { getState }) => {
    const state = getState() as { deposito: { depositos: depositos[] } };
    const depositos = state.deposito.depositos;

    try {
      await fetch(`http://localhost:3001/depositos/${transactionId}`, {
        method: "DELETE",
      });
      const newTransactions = depositos.filter(
        (deposito) => deposito.id !== transactionId
      );

      return newTransactions
    } catch (error) {
      throw error;
    }
  }
);

export const fetchDepositos = createAsyncThunk(
  "deposito/fetchDepositos",
  async (userId: number) => {
    const response = await fetch(
      `http://localhost:3001/depositos?idUser=${userId}`
    );
    return (await response.json()) as depositos[];
  }
);
