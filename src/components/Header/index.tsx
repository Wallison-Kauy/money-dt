"use client";
import Image from "next/image";
import { TransactionModal } from "../ModalTransaction";

const Header = () => {
  return (
    <div className="h-[212px]  bg-backgroud2">
      <div className="text-grayRo container mx-auto flex w-full max-w-[1220px] flex-row justify-between	pt-10">
        <div className="flex flex-row items-center gap-4 text-white">
          <Image src="/Ignite.svg" alt="Ignite" width={40} height={38} />
          <h1>DT Money</h1>
        </div>
        <TransactionModal />
      </div>
    </div>
  );
};

export default Header;
