import Investiment from "../components/investiment/investiment";
import Saldo from "../components/saldo/saldo";

export default function InvestimentPage() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <Investiment />
    </div>
  );
}
