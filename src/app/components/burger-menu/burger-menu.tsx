import { NavLinks } from "@/app/ui/NavLinks";
import close from "@/app/assets/close.svg";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function BurgerMenu({ className, ...rest }: Props) {
  return (
    <div className={`sm:hidden ${className}`} {...rest}>
      <button type="button" className="absolute right-2 top-2">
        <Image src={close} alt="" />
      </button>
      <NavLinks className="grid mt-4" />
    </div>
  );
}
