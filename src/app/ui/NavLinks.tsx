"use client";
import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <Link href="/dashboard" text="Início" />
        <Link href="/transferencias" text="Transferências" />
        <Link href="/investimentos" text="Investimentos" />
        <Link href="/servicos" text="Outros serviços" hasBorder={false} />
      </ul>
    </nav>
  );
}

type Props = LinkProps & {
  text: string;
  hasBorder?: boolean;
};

function Link({ text, href, hasBorder = true, ...rest }: Props) {
  const pathname = usePathname();

  return (
    <NextLink
      className={`text-center ${hasBorder && "border-b"} pb-4 ${
        pathname === href
          ? "active: text-[#47A138] font-bold border-[#47A138]"
          : "border-black"
      }`}
      href={href}
      {...rest}
    >
      {text}
    </NextLink>
  );
}
