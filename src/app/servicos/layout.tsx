import { ReactNode } from "react";
import { NavLinks } from "@/app/ui/NavLinks";

interface Props {
  children: ReactNode;
}

export default function ServicosLayout({ children }: Props) {
  return (
    <div className="flex flex-col flex-1">
      <div className="container mx-auto flex md:flex-col lg:flex-row flex-grow gap-0 lg:gap-6">
        <aside className="lg:w-[180px] lg:bg-[#F5F5F5] text-black rounded-lg lg:p-7 md:py-2 lg:block md:block sm:hidden hidden md:mt-6">
          <NavLinks />
        </aside>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
