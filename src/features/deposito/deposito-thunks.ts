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
  async (payload: TransactionData, { getState, rejectWithValue }) => {
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
      const response = await fetch("http://localhost:3001/depositos", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "deposito/updateTransaction",
  async (
    payload: { transactionId: string; transactionData: TransactionData },
    { getState, rejectWithValue }
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
      const response = await fetch(
        `http://localhost:3001/depositos/${transactionId}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      return {
        transactionId,
        data,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "deposito/removeTransaction",
  async (transactionId: string, { getState, rejectWithValue }) => {
    const state = getState() as { deposito: { depositos: depositos[] } };
    const depositos = state.deposito.depositos;

    try {
      const response = await fetch(
        `http://localhost:3001/depositos/${transactionId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      const newTransactions = depositos.filter(
        (deposito) => deposito.id !== transactionId
      );

      return newTransactions;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDepositos = createAsyncThunk(
  "deposito/fetchDepositos",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/depositos?idUser=${userId}`
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      return (await response.json()) as depositos[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
