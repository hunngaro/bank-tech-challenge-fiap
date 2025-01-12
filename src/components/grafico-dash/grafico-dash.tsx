"use client";
import BoxInside from "@/ui/BoxInside";
import BarChart from "./bar-chart";

export default function GraficoDash() {
  return (
    <BoxInside title=" Graficos">
      <div className="mb-56 md:mb-20">
        <BarChart />
      </div>
    </BoxInside>
  );
}
