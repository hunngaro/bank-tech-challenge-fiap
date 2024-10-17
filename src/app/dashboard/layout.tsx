import { ReactNode } from "react";
import { NavLinks } from "@/app/ui/NavLinks";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col flex-1 bg-my-light-green">
    <div className="container mx-auto flex md:flex-col lg:flex-row flex-grow gap-6 pt-6">
      <aside className="lg:w-[180px] lg:bg-[#F5F5F5] text-black rounded-lg lg:p-8 md:py-2 lg:block md:block sm:hidden hidden">
        <NavLinks />
      </aside>
      
      <main className="w-full">{children}</main>
    </div>
  </div>
  );
}
