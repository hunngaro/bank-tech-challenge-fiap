import NovaTransacao from "../components/nova-transacao/nova-transacao";
import Saldo from "../components/saldo/saldo";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <NovaTransacao />
    </div>
  );
}
