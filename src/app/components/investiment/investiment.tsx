"use client";
import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import BoxInside from "@/app/ui/BoxInside";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Investiment() {
  const [fixa, setFixa] = useState<number>(36000);
  const [variavel, setVariavel] = useState<number>(14000);
  const [amount, setAmount] = useState<number>(fixa+variavel);

  const formatToBRL = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const data = {
    labels: ['Fundos de investimento', 'Tesouro Direto'],
    datasets: [
      {
        label: '% do Total',
        data: [fixa, variavel],
        backgroundColor: ['#2567F9', '#8F3CFF'],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };
  
  const options = {
    cutout: '60%', // Faz o círculo no meio vazio
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: () => {
          return window.innerWidth > 768 ? 'right' : 'bottom'; // 'right' acima de tablets e 'bottom' em telas menores
        },
        labels: {
          color: '#fff',       // Cor do texto da legenda
          usePointStyle: true, // Usa ponto ao invés de quadrado na legenda
          pointStyle: 'circle',// Estilo do ícone na legenda (círculo)
          boxWidth: 20,        // Largura da caixa de cor na legenda
          boxHeight: 8,
          padding: 20,         // Espaçamento entre os itens da legenda
          font: {
            size: 16,          // Tamanho da fonte da legenda
            weight: 'normal',    // Peso da fonte
            family: 'Arial',   // Família da fonte
          },
        }
      }
    }
  };


  return (
    <BoxInside>
      <h2 className="text-2xl font-bold pb-8 relative z-10">Investimentos</h2>
      <div className="md:flex md:flex-row-reverse gap-8 justify-between z-10 relative">
        <div className="w-full">
          <h3 className="text-my-blue text-2xl">Total: {formatToBRL(amount)}</h3>
          <div className="flex flex-col md:flex-row gap-4 mt-8 mb-20">
            <div className="py-3 px-6 flex-1 rounded-lg text-center bg-my-blue text-white">
              <p>Renda Fixa:</p>
              <p className="text-xl mt-2">{formatToBRL(fixa)}</p>
            </div>
            <div className="py-3 px-6 flex-1 rounded-lg text-center bg-my-blue text-white">
              <p>Texto variável:</p>
              <p className="text-xl mt-2">{formatToBRL(variavel)}</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-xl mb-6">Estatísticas</h3>
            <div className="bg-my-blue text-white py-6 rounded-lg text-center w-full flex justify-center">
              <div className="max-w-[500px] w-full">
                <Doughnut data={data} options={options} />
              </div>
            </div>
          </div>
          </div>
        </div>
    </BoxInside>
  )
}
