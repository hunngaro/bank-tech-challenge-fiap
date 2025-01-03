"use client";
import Header from "../header/header";
import { LoggedHeader } from "../logged-header/logged-header";
import { useAppSelector } from "@/app/hooks";


export default function CustomHeader() {
  const user = useAppSelector((state) => state.auth.user)
  return user?.id ? <LoggedHeader /> : <Header />
}
