import { ReactNode, useEffect, useRef, useState } from "react";
import { NavLinks } from "@/ui/NavLinks";
import { Extract } from "@/components/extract/extract";

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  const mainRef = useRef<HTMLDivElement>(null); // referência para o <main>
  const [mainHeight, setMainHeight] = useState(0);

  // Atualiza altura quando `children` mudar
  useEffect(() => {
    if (mainRef.current) {
      setMainHeight(mainRef.current.offsetHeight);
    }
  }, [children]);

  // Observa mudanças no tamanho do <main>
  useEffect(() => {
    //atualizar a altura
    const updateHeight = () => {
      if (mainRef.current) {
        setMainHeight(mainRef.current.offsetHeight);
      }
    };
    //chama sempre que mudar o tamanho
    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    if (mainRef.current) {
      observer.observe(mainRef.current);
    }
    // Para de observar o elemento quando o componente desmonta
    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-my-light-green">
      <div className="flex px-6 md:px-[60px] lg:px-0">
        <div className="container mx-auto lg:grid md:grid-cols-[180px_minmax(690px,_1fr)_282px] lg:flex-row flex-grow auto-rows-auto gap-6 py-6 lg:px-0">
          <aside className="lg:bg-[#F5F5F5] text-black rounded-lg lg:px-6 lg:py-8 md:pt-2 md:pb-8 lg:block md:block sm:hidden hidden">
            <NavLinks />
          </aside>

          <main ref={mainRef} className="w-full max-h-fit">
            {children}
          </main>

          <aside
            className="bg-[#F5F5F5] overflow-auto rounded-lg py-8 px-6 mt-8 lg:mt-0"
            style={{ maxHeight: mainHeight }}
          >
            <Extract />
          </aside>
        </div>
      </div>
    </div>
  );
}
