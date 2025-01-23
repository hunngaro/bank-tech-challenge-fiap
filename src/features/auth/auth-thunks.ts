import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./auth-slice";
import Cookies from "js-cookie";

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const { email, password } = payload;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/users?email=${email}&password=${password}`
      );

      // Verificando se a resposta foi bem-sucedida
      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      const data: User[] = await response.json();

      if (data.length === 0) {
        return rejectWithValue("E-mail ou senha incorretos");
      }

      const user = data[0];

      Cookies.set(
        "user",
        JSON.stringify({ id: user.id, name: user.name, email: user.email })
      );

      return user;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async (payload: SignUpData, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_JSON_SERVER_URL}/users`,
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        return rejectWithValue("Erro na resposta do servidor");
      }

      await dispatch(
        login({ email: payload.email, password: payload.password })
      );
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
