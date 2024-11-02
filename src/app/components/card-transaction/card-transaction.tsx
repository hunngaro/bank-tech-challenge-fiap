import { DepositoContext } from "@/app/contexts/deposito-context";
import { formatDate, formatPrice } from "@/app/utils/format";
import { useContext } from "react";

export default function CardTransaction() {
  const { depositos } = useContext(DepositoContext);

  return (
    <table className="z-10 relative w-full border-separate border-spacing-y-2">
      <tbody>
        {depositos.length
          ? depositos.map((res) => (
            <tr key={res.id} className="">
              <td className="flex justify-between w-full bg-white rounded-lg p-4">
                <span className="capitalize">
                  <strong>Tipo: </strong>
                  {res?.label}
                </span>
                <span className="capitalize">
                  <strong>Valor: </strong>
                  {formatPrice(res?.valor)}
                </span>
                <span className="capitalize">
                  <strong>Data: </strong>
                  {formatDate(res?.data)}
                </span>
              </td>
            </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
