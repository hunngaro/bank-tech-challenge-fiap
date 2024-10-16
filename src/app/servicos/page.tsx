import Saldo from "../components/saldo/saldo";
import Servicos from "../components/servicos/servicos";

export default function InvestimentPage() {
    return (
        <div className="flex flex-col gap-6">
            <Saldo/>
            <Servicos />
        </div>
    )
}