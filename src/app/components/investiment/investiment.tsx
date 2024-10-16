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
      labels: ['Fixa', 'Variável'],
      datasets: [
        {
          label: '% do Total',
          data: [fixa, variavel],
          backgroundColor: ['#4CAF50', '#FF9800'], // Cores personalizadas
          hoverOffset: 4,
          borderWidth: 0,
        },
      ],
    };
    
    const options = {
      cutout: '50%', // Faz o círculo no meio vazio
      responsive: true,
      maintainAspectRatio: false,
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
                    <div className="bg-my-blue text-white py-4 rounded-lg text-center w-full">
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
              </div>
            </div>
        </BoxInside>
    )
}
