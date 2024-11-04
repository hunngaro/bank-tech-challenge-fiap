'use client'
import { ReactNode } from "react";
import { NavLinks } from "@/app/ui/NavLinks";

interface Props {
  children: ReactNode;
}


export default function ProfileLayout({ children }: Props) {  
  return (
    <div className="flex flex-col flex-1 bg-my-light-green">
      <div className="flex px-6 md:px-[60px] lg:px-0">
        <div className="container mx-auto lg:grid md:grid-cols-[180px_minmax(690px,_1fr)] lg:flex-row flex-grow gap-6 py-6 lg:px-0">
          <aside className="lg:bg-[#F5F5F5] text-black rounded-lg lg:px-6 lg:py-8 md:pt-2 md:pb-8 lg:block md:block sm:hidden hidden">
            <NavLinks />
          </aside>

          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
