import Image from "next/image";
import ilustrac from "@/app/public/assets/ilustracao-banner.svg"
import present from "@/app/public/assets/presente.svg"
import saque from "@/app/public/assets/saque.svg"
import pontos from "@/app/public/assets/pontos.svg"
import dispositivos from "@/app/public/assets/dispositivos.svg"
export default function Home() {
  return (
   
    
  <div className="grid grid-rows-12 grid-cols-12 h-screen w-screen bg-gradient-to-t from-white to-cyan-900 ">
    <div className="grid lg:grid-rows-12 lg:grid-cols-12 lg:col-start-3 lg:col-span-8
    sm:grid-cols-8 grid-rows-4 grid-cols-4  col-start-2
    col-span-10  row-start-2 row-span-4 w-full ">
    <p className="text-black lg:row-start-6 lg:col-span-4 
    col:6 col-span-12 font-semibold text-center text-lg ">Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</p>
    <Image
      src={ilustrac}
      width={5000}
      height={5000}
      alt="Picture of the author"
      className="lg:col-start-7 lg:col-span-5
      col-start-2 row-start-3 row-span-2 col-span-2  text-center
      sm:col-span-4 sm:col-start-3 
      "/>
    </div>
   
    <div className=" grid grid-rows-8 grid-cols-12 row-start-7 row-span-3 col-start-3 col-span-8 bg-white"><h2 className=" text-black font-bold col-span-12 text-center">Vantagens do nosso banco:</h2>
    <Image
 src={present}
 width={3000}
 height={3000}
 alt="Image of a Present"
 />
  <Image
 src={saque}
 width={3000}
 height={3000}
 alt="Image of a Present"/>
  <Image
 src={pontos}
 width={3000}
 height={3000}
 alt="Image of a Present"/>
  <Image
 src={dispositivos}
 width={3000}
 height={3000}
 alt="Image of a Present"/>

  </div>
</div>
  );
}
