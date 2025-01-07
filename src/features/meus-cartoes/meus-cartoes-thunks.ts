import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartoes } from "./meus-cartoes-slice";

export const fetchMeusCartoes = createAsyncThunk(
  "meusCartoes/fetchMeusCartoes",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/cartoes?idUser=${userId}`
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      return (await response.json()) as cartoes[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
