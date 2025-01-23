import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartoes } from "./meus-cartoes-slice";

export const fetchMeusCartoes = createAsyncThunk(
  "meusCartoes/fetchMeusCartoes",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/cartoes?idUser=${userId}`
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
