import { ReactNode } from "react";
import { NavLinks } from "@/app/ui/NavLinks";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex md:flex-col lg:flex-row flex-grow">
        <aside className="lg:w-[180px] lg:bg-[#F5F5F5] text-black rounded-lg p-8">
          <NavLinks />
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}
