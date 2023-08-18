"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface cardProps {
  title: string;
  price: number;
  logo: string;
  className?: string;
}

const Card = ({ title, price, logo, className, ...rest }: cardProps) => {
  return (
    <div
      {...rest}
      className={cn(
        "flex w-full max-w-[364px] min-w-[280px] flex-col gap-3 rounded-md bg-backgroudCard px-8 py-6",
        className,
      )}
    >
      <div className="flex w-full flex-row items-center justify-between ">
        <span className="text-base text-textCard">{title}</span>
        <Image src={logo} width={32} height={32} alt="entrada" />
      </div>
      <span className="text-4xl font-bold text-priceCard">R$ {price}</span>
    </div>
  );
};

export default Card;
