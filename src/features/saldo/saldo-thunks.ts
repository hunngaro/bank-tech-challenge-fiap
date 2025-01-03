import { createAsyncThunk } from "@reduxjs/toolkit";
import { saldos } from "./saldo-slice";

interface SaldoData {
  idUser: string;
  contaCorrente: number;
  contaInvestimentos: Array<[]>;
}

export const addSaldo = createAsyncThunk(
  "saldo/addSaldo",
  async (data: SaldoData) => {
    try {
      const response = await fetch("http://localhost:3001/saldos", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const saldoAdded = await response.json();

      return saldoAdded;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSaldos = createAsyncThunk(
  "saldo/fetchSaldos",
  async (userId: number) => {
    const response = await fetch(
      `http://localhost:3001/saldos?idUser=${userId}`
    );
    return (await response.json()) as saldos[];
  }
);
