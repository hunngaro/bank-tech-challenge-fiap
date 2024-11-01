"use client";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type NavLinksProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export function NavLinks({ ...rest }: NavLinksProps) {
  return (
    <nav>
      <ul className={`flex md:justify-between lg:flex-col gap-4`} {...rest}>
        <Link href="/dashboard" text="Início" textColor="text-black"  />
        <Link href="/transacoes" text="Transações" textColor="text-black"/>
        <Link href="/investimentos" text="Investimentos" textColor="text-black"/>
        <Link href="/servicos" text="Outros serviços" textColor="text-black" hasBorder={false} />
      </ul>
    </nav>
  );
}

type LinkProps = NextLinkProps & {
  text: string;
  textColor?: string;
  hasBorder?: boolean;
};

export function Link({
  text,
  textColor,
  href,
  hasBorder = true,
  ...rest
}: LinkProps) {
  const pathname = usePathname();

  return (
    <NextLink
      className={`min-w-28 ${textColor} hover:text-[#47A138] hover:border-b-[#47A138] text-center ${
        hasBorder && "sm:border-b md:border-0 lg:border-b"
      } pb-4 ${
        pathname === href
          ? `active: lg:text-[#47A138] md:text-[#47A138] sm:text-[#FF5031] font-bold md:border-b-[1px] lg:border-0 border-[#47A138]`
          : "border-[#004D61]"
      }`}
      href={href}
      {...rest}
    >
      {text}
    </NextLink>
  );
}
