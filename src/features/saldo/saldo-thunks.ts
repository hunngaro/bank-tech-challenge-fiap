import { createAsyncThunk } from "@reduxjs/toolkit";
import { saldos } from "./saldo-slice";

interface SaldoData {
  idUser: string;
  contaCorrente: number;
  contaInvestimentos: Array<[]>;
}

export const addSaldo = createAsyncThunk(
  "saldo/addSaldo",
  async (data: SaldoData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/saldos", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      const saldoAdded = await response.json();

      return saldoAdded;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchSaldos = createAsyncThunk(
  "saldo/fetchSaldos",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/saldos?idUser=${userId}`
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      return (await response.json()) as saldos[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
