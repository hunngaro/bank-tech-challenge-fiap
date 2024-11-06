import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  icon: string | StaticImport;
};

export function ServiceCard({ title, icon, ...rest }: Props) {
  return (
    <button
      type="button"
      className="w-full flex flex-col justify-center items-center gap-7 bg-my-services-card-bg rounded-lg p-5"
      {...rest}
    >
      <Image src={icon} alt={`Botão com um ícone que representa ${title}`} />
      <strong>{title}</strong>
    </button>
  );
}
