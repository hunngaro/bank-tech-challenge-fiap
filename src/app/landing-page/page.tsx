import Image from "next/image";
import ilustrac from "@/app/assets/ilustracao-banner.svg"
import present from "@/app/assets/presente.svg"
import saque from "@/app/assets/saque.svg"
import pontos from "@/app/assets/pontos.svg"
import dispositivos from "@/app/assets/dispositivos.svg"
export default function Home() {
  return (


    <div className="bg-gradient-to-t from-white to-cyan-900 ">
      <div className=" flex  justify-center items-center">
        <h1 className="text-black w-1/3 font-semibold p-6 text-[28px]">Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</h1>
        <Image
          src={ilustrac}

          alt="Picture of the author"
          className="lg:w-2/3 lg:max-w-2xl " />
      </div>
      <div className="grid grid-rows-1 grid-cols-12 mb-10">

        <h2 className=" text-black font-bold col-span-12 text-center">Vantagens do nosso banco:</h2>
      </div>

      <div className="md:grid grid-rows-1 grid-cols-4 place-items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src={present}
            alt="Image of a Present"
          />
          <h3 className="text-my-green font-bold text-xl">Conta e Cartão Gratuito</h3>
          <p className="text-my-gray">Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</p>

        </div>
        <div>
          <Image
            src={saque}
            alt="Image of a saque" />
          <h3>Saque</h3>
        </div>
        <div>
          <Image
            src={pontos}
            alt="Image of a star" />
           <h3>Pontos</h3> 
        </div>
        <div>
          <Image
            src={dispositivos}
            alt="Image of an eletronic" />
            <h3>Dispositivos</h3>
        </div>


      </div>
    </div>
  );
}
