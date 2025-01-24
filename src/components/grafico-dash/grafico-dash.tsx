"use client";
import BoxInside from "@/ui/BoxInside";
import BarChart from "./bar-chart";

export default function GraficoDash() {
  return (
    <BoxInside title=" Graficos">
      <div className="md:mb-20">
        <BarChart />
      </div>
    </BoxInside>
  );
}
