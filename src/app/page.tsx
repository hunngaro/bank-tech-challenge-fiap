import Image from "next/image";
import ilustrac from "@/app/assets/ilustracao-banner.svg";
import present from "@/app/assets/presente.svg";
import saque from "@/app/assets/saque.svg";
import pontos from "@/app/assets/pontos.svg";
import dispositivos from "@/app/assets/dispositivos.svg";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-white to-cyan-900 px-6 md:px-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row md:justify-center lg:justify-between items-center gap-4 md:gap-16 mt-10 md:mt-6">
          <h1 className="text-black text-center md:text-center lg:text-left font-bold md:font-semibold text-[25px] md:text-[28px] leading-[30px] md:leading-8 md:px-[77px] lg:px-0">
            Experimente mais liberdade no controle da sua vida financeira. Crie
            sua conta com a gente!
          </h1>
          <Image
            src={ilustrac}
            alt="graphics and a person"
            className="lg:w-2/3 lg:max-w-2xl "
          />
          <div className="md:hidden w-full grid grid-rows-1 grid-cols-2 gap-6 mt-4">
            <button className="h-12 rounded-lg bg-black font-semibold text-white md:w-36">
              Abrir conta
            </button>
            <button className="h-12 border-2 border-black font-semibold rounded-lg text-black md:w-36">
              Já tenho conta
            </button>
          </div>
        </div>
        <section>
          <div className="grid grid-rows-1 grid-cols-12 mt-8 mb-10 md:my-10">
            <h2 className="text-black font-bold col-span-12 text-xl md:text-[25px] text-center">
              Vantagens do nosso banco:
            </h2>
          </div>
          <div className="flex justify-center items-center ">
            <div className="md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 place-items-center gap-6">
              <div className="flex flex-col justify-center items-center mb-10 gap-4 xl:m-0">
                <Image src={present} alt="An image of a Present" />
                <h3 className="text-my-green font-bold text-xl text-center">
                  Conta e Cartão Gratuito
                </h3>
                <p className="text-my-gray text-center xl:h-24 leading-5">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 mb-10 xl:m-0">
                <Image src={saque} alt="An image of a withdrawal" />
                <h3 className="text-my-green font-bold text-xl text-center">
                  Saques sem custo
                </h3>
                <p className="text-my-gray text-center xl:h-24 leading-5">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 mb-10 xl:m-0">
                <Image src={pontos} alt="An image of a star" />
                <h3 className="text-my-green font-bold text-xl text-center">
                  Programa de pontos
                </h3>
                <p className="text-my-gray text-center xl:h-24 leading-5">
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 mb-10 xl:m-0">
                <Image
                  src={dispositivos}
                  alt="An image of an eletronic device"
                />
                <h3 className="text-my-green font-bold text-xl text-center">
                  Seguro Dispositivos
                </h3>
                <p className="text-my-gray text-center xl:h-24">
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
