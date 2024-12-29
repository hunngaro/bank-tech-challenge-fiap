"use client";

import { AuthContext } from "@/contexts/authentication-context";
import { useContext } from "react";
import Header from "../header/header";
import { LoggedHeader } from "../logged-header/logged-header";


export default function CustomHeader() {
  const { user } = useContext(AuthContext)
  return user?.id ? <LoggedHeader /> : <Header />
}
