'use client'
import { useState } from 'react';
import BoxInside from "@/app/ui/BoxInside"


type FormData = {
  typeTransaction: string;
  value: string;
};

  
export default function NovaTransacao() {
  const [formData, setFormData] = useState<FormData>({
    typeTransaction: '',
    value: 'R$ 0,00'
  });

  //remove texto e formata para reias o valor digitado
  const formatToReais = (value: string): string => {
    const cleanValue = value.replace(/\D/g, '');        
    
    const formattedValue = (+cleanValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formattedValue;
  };
    
  //lida com a mudança do input
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name } = event.target;
    let { value } = event.target;
    if (event.target.name === 'value') {
      value = formatToReais(event.target.value)
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  //enviar o form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();     
  };
  return (
    <BoxInside>
      <h2 className="text-2xl font-bold pb-8 relative z-10">Nova transação</h2>
      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4 ">
        <div className="w-full max-w-80 relative">
          <select
          id="typeTransaction"
          name="typeTransaction"
          value={formData.typeTransaction}
          onChange={handleChange}
          className="selectNewTransaction w-full h-12 pl-4 border-2 border-my-blue rounded-lg text-black appearance-none"
          >
            <option value="">Selecione o tipo de transação</option>
            <option value="credito">Credito</option>
            <option value="debito">Debito</option>
            <option value="deposito">Depósito</option>
          </select>
          <svg className="absolute right-5 top-1/2 -translate-y-1/2 " width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.3125 0.598145H13.6875L7 7.28564L0.3125 0.598145Z" fill="#004D61"/>
          </svg>
        </div>

        <div className="mt-7">
          <label htmlFor="value">Valor:</label>
          <br />
          <input
          id="value"
          type="text"
          name="value"
          value={formData.value}
          onChange={handleChange}
          className="py-3 w-full max-w-64 mt-3 border-2 border-my-blue rounded-lg text-black text-center"
          />
        </div>
        <button type="submit" className="bg-my-blue text-white py-3 rounded-lg max-w-64">Concluir transação</button>
      </form>
      <style jsx>{`
        /* icone do select  */
        .selectNewTransaction::after {
          content: "";
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 8px;
          z-index: 1000;
          background: url('data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%228%22%20viewBox%3D%220%200%2014%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0.3125%200.598145H13.6875L7%207.28564L0.3125%200.598145Z%22%20fill%3D%22%23004D61%22%2F%3E%3C%2Fsvg%3E') no-repeat center;
        }
    `}</style>
    </BoxInside>
  )
}
