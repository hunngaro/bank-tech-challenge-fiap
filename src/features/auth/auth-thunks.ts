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
  async (payload: { email: string; password: string }) => {
    try {
      const { email, password } = payload;

      const response = await fetch(`http://localhost:3001/users`);

      // Verificando se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro na resposta do servidor");
      }

      const data: User[] = await response.json();

      const userLogged = data.find(
        (res) => res.email === email && res.password === password
      );
      Cookies.set("user", JSON.stringify(userLogged));

      return userLogged;
    } catch (error) {
      throw error;
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async (payload: SignUpData, { dispatch }) => {
    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      await dispatch(
        login({ email: payload.email, password: payload.password })
      );
    } catch (error) {
      throw error;
    }
  }
);
