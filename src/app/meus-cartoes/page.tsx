import Cards from "../components/cards/cards";
import Saldo from "../components/saldo/saldo";

export default function InvestimentPage() {
  return (
    <div className="flex flex-col gap-8">
      <Saldo />
      <Cards />
    </div>
  );
}
