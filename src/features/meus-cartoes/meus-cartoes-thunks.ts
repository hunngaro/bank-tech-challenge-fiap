import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartoes } from "./meus-cartoes-slice";

export const fetchMeusCartoes = createAsyncThunk(
  'meusCartoes/fetchMeusCartoes',
  async (userId: number) => {
    const response = await fetch(
      `http://localhost:3001/cartoes?idUser=${userId}`
    );
    return (await response.json()) as cartoes[];
  }
)