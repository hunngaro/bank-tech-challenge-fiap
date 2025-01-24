import { createAsyncThunk } from "@reduxjs/toolkit";
import { depositos } from "./deposito-slice";
import { User } from "../auth/auth-slice";

export interface TransactionData {
  typeTransaction: string;
  valueTransaction: number;
  date: string;
  documentsUrl?: File[];
}

export interface TransactionDataUpdate {
  label?: string;
  valor?: number;
  data?: string;
  documentsUrl?: string[];
}

export const addNewTransaction = createAsyncThunk(
  "deposito/addNewTransaction",
  async (payload: TransactionData, { dispatch, getState, rejectWithValue }) => {
    try {
      const { typeTransaction, valueTransaction, date, documentsUrl } = payload;
      const state = getState() as { auth: { user: User } };
      const user = state.auth.user;

      const data: depositos = {
        id: String(Math.random()),
        idUser: user!.id,
        label: typeTransaction,
        valor: valueTransaction,
        data: date,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/depositos`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      if (documentsUrl.length > 0) {
        const transaction = await response.json();
        await dispatch(
          addTransactionDocuments({
            transaction: {
              ...transaction,
              documentsUrl,
            },
          })
        ).unwrap();
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTransactionDocuments = createAsyncThunk(
  "deposito/addTransactionDocuments",
  async (
    payload: { transaction: depositos },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { transaction } = payload;
      const formData = new FormData();

      for (const document of transaction.documentsUrl) {
        formData.append("documents", document);
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transaction/documents/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      const documents = await response.json();
      await dispatch(
        updateTransaction({
          transactionId: transaction.id,
          transactionData: {
            typeTransaction: transaction.label,
            date: transaction.data,
            valueTransaction: transaction.valor,
            documentsUrl: documents,
          },
        })
      ).unwrap();
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
      const data = {
        id: transactionId,
        idUser: user!.id,
        label: transactionData.typeTransaction,
        valor: transactionData.valueTransaction,
        data: transactionData.date,
        documentsUrl: transactionData.documentsUrl,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/depositos/${transactionId}`,
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
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/depositos/${transactionId}`,
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
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/depositos?idUser=${userId}`
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
