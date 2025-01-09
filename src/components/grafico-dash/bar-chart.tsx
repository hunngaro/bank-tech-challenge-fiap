  
import React, { useContext, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
} from 'chart.js';
import { useAppSelector } from '@/lib/hooks';
  
// Registrando os módulos necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const MyChart: React.FC = () => {
  const depositos = useAppSelector((state) => state.deposito.depositos);

  // Define as cores com base no tipo de transação
  const colorGreen = '#2ECC71'
  const colorRed = '#E74C3C'

  // Estado para armazenar as datas filtradas
  const today = new Date();
  const [endDate, setEndDate] = useState<string>(today.toISOString().split("T")[0]);
  const [startDate, setStartDate] = useState<string>(
    new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split("T")[0]
  );

  // Filtrar dados com base no intervalo de datas
  const filteredData = depositos.filter(
    (item) => item.data >= startDate && item.data <= endDate
  );
  
 // Pega a data - labels e values
 const labels = filteredData.map((item) => item.label);
 const values = filteredData.map((item) => item.valor / 100); // Dividindo por 100, deixar em casa decimal
  const chartData = {
    labels,
    datasets: [
      {
        label: '',
        data: values,
        borderColor: 'black',
        backgroundColor: 'black',
        type: 'line',
      },
      {
        label: '',
        data: values,
        backgroundColor: filteredData.map(item =>['deposito', 'salario'].includes(item.label.toLowerCase()) ? colorGreen : colorRed),
        borderWidth: 1,
        type: 'bar',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        //labels personalizadas para as cores
        labels: {
          generateLabels: () => {
            const categories = [
              { text: 'Entradas', color: colorGreen},
              { text: 'Saidas', color: colorRed },
            ];
            return categories.map((category) => ({
              text: category.text,
              fillStyle: category.color, 
              strokeStyle: category.color, 
              lineWidth: 2, 
            }));
          },
          font: {
            size: 14,
            family: 'Arial, sans-serif',
            weight: '400',
          },
          padding: 20,
        },
        onClick: () => {
          // Desabilita o comportamento de clique
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.raw;
            return `R$ ${value.toFixed(2).replace('.', ',')}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: 'auto',
        // max: 4
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `R$ ${value.toFixed(1).replace('.', ',')}`, // Formata como moeda
        },
      },
    },
  };

  return (
    <div className='flex flex-col items-end gap-10'>
      <div className='flex items-center gap-5'>
        <div>
          <label htmlFor="value">Data Inicial:</label>
          <br />
          <input
            id="date"
            type="date"
            name="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="py-3 w-full max-w-64 mt-3 border-[1px] border-my-blue focus:border-my-green rounded-lg text-black text-center outline-none flex justify-center"
          />
        </div>
        <div>
          <label htmlFor="value">Data Final</label>
          <br />
          <input
            id="date"
            type="date"
            name="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="py-3 w-full max-w-64 mt-3 border-[1px] border-my-blue focus:border-my-green rounded-lg text-black text-center outline-none flex justify-center"
            />
        </div>
    </div>
    <Bar data={chartData} options={options} />
  </div>
  )
};

export default MyChart;