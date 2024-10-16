import Cards from "../components/cards/cards";
import Saldo from "../components/saldo/saldo";

export default function InvestimentPage() {
    return (
        <div className="flex flex-col gap-6">
            <Saldo/>
            <Cards />
        </div>
    )
}