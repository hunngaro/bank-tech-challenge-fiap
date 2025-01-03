import { createSlice } from "@reduxjs/toolkit";
import { fetchMeusCartoes } from "./meus-cartoes-thunks";

export interface cartoes {
  id: number;
  idUser: number;
  nameCartao: string,
  number: string,
  type: "fisico" | "digital",
  function: "credito" | "debito" | "credito-debito",
  status: boolean;
}

interface MeusCartoesState {
  cartoes: cartoes[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: MeusCartoesState = {
  cartoes: [],
  status: "idle",
  error: null,
};

export const meusCartoesSlice = createSlice({
  name: 'meus-cartoes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeusCartoes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeusCartoes.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartoes = action.payload;
      })
      .addCase(fetchMeusCartoes.rejected, (state) => {
        state.status = "failed";
      });
  }
})

export const meusCartoesReducer = meusCartoesSlice.reducer