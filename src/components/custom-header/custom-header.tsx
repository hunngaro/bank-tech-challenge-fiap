"use client";
import { useAppSelector } from "@/lib/hooks";
import Header from "../header/header";
import { LoggedHeader } from "../logged-header/logged-header";

export default function CustomHeader() {
  const user = useAppSelector((state) => state.auth.user);
  return user?.id ? <LoggedHeader /> : <Header />;
}
