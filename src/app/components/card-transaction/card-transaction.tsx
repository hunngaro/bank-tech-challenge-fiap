import { DepositoContext } from "@/app/contexts/DepositoContext";
import { useContext } from "react";

export default function CardTransaction() {
  const { depositos } = useContext(DepositoContext);

  return (
    <table className="z-10 relative w-full">
      <tbody>
        {depositos.length
          ? depositos.map((res) => (
              <tr key={res.id}>
                <td className="flex justify-between w-full">
                  <span>Tipo: {res?.label}</span>
                  <span>Valor: {res?.valor}</span>
                  <span> Data: {res?.data}</span>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
