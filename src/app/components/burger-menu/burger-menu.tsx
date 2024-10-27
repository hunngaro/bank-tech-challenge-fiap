"use client";
import close from "@/app/assets/close.svg";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function BurgerMenu({
  isOpen,
  onClose,
  className,
  children,
  ...rest
}: Props) {
  return (
    <div
      className={`w-[172px] absolute z-50 bg-[#E4EDE3] p-6 lg:hidden md:hidden ${
        isOpen ? "block" : "hidden"
      } ${className}`}
      {...rest}
    >
      <button
        type="button"
        className="absolute right-2 top-2"
        onClick={onClose}
      >
        <Image src={close} alt="" />
      </button>
      {children}
    </div>
  );
}
