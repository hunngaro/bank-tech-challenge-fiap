import Saldo from "../components/saldo/saldo";
import Servico from "../components/servico/servico";

export default function Servicos() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <Servico />
    </div>
  );
}
