import Image from "next/image";
import ilustrac from "@/app/assets/ilustracao-banner.svg"
import present from "@/app/assets/presente.svg"
import saque from "@/app/assets/saque.svg"
import pontos from "@/app/assets/pontos.svg"
import dispositivos from "@/app/assets/dispositivos.svg"
import Cadastro from "../components/formulario-cadastro/formulario-cadastro";
export default function Home() {
  return (


    <div className="bg-gradient-to-t from-white to-cyan-900 md:h-full">

      <div className=" flex flex-col xl:flex-row justify-center items-center">
        <h1 className="text-black xl:w-1/3 font-semibold p-6 md:text-[28px] text-center">Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</h1>
        <Image
          src={ilustrac}

          alt="graphics and a 
          "
          className="lg:w-2/3 lg:max-w-2xl max-w-80" />

        <div className="md:hidden grid grid-rows-1 grid-cols-2 mt-4">
          <button className="p-2  rounded-md bg-black text-white w-36 mr-4">Abrir conta</button>

          <button className="p-2 border-2  border-black rounded-md text-black w-36 ml-4">Já tenho conta</button>

        </div>
      </div>

      <div className="  xl:ml-80 xl:mr-80  m-10">
        <div className="grid grid-rows-1 grid-cols-12 m-10">
          <h2 className=" text-black font-bold col-span-12 text-lg md:text-2xl text-center ">Vantagens do nosso banco:</h2>
        </div>
        <div className="flex justify-center items-center ">
          <div className="md:grid md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 place-items-center">
            <div className="flex flex-col justify-center items-center mb-10 gap-4 xl:m-0">
              <Image
                src={present}
                alt="An image of a Present"
              />
              <h3 className="text-my-green font-bold text-xl text-center">Conta e Cartão Gratuito</h3>
              <p className="text-my-gray text-center xl:h-24">Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</p>

            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-10 xl:m-0" >
              <Image
                src={saque}
                alt="An image of a withdrawal" />
              <h3 className="text-my-green font-bold text-xl">Saques sem custo</h3>
              <p className="text-my-gray text-center xl:h-24 ">Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-10 xl:m-0" >
              <Image
                src={pontos}
                alt="An image of a star" />
              <h3 className="text-my-green font-bold text-xl">Programa de pontos</h3>
              <p className="text-my-gray text-center xl:h-24">Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-10 xl:m-0" >
              <Image
                src={dispositivos}
                alt="An image of an eletronic device" />
              <h3 className="text-my-green font-bold text-xl">Seguro Dispositivos</h3>
              <p className="text-my-gray text-center xl:h-24">Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}