"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TransactionProps, useTransactionStore } from "@/store/transactions";
import Image from "next/image";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

export const TransactionModal = () => {
  const {
    actions: { addTransaction },
  } = useTransactionStore();
  const { register, handleSubmit, control, watch } = useForm();

  const [transactionType, setTransactionType] = useState<"income" | "outcome">(
    "income",
  );
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data, transactionType);

    const newTransaction: TransactionProps = {
      id: Date.now().toString(),
      title: data.title,
      amount: parseFloat(data.amount),
      category: data.category,
      createdAt: new Date(),
      type: transactionType,
    };

    toast({
      description: "Transação adicionada",
      duration: 3000,
    });

    addTransaction(newTransaction);
  };

  return (
    <Dialog>
      <DialogTrigger className="rounded-lg bg-greenDT-default px-5 py-4 text-base font-bold text-white hover:bg-greenDT-light">
        Nova transação
      </DialogTrigger>
      <DialogContent className="border-none bg-backgroundIngnite p-12">
        <DialogHeader>
          <DialogTitle className="text-white">Nova transação</DialogTitle>
        </DialogHeader>
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            required
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Descrição"
            {...register("title")}
          />
          <input
            type="text"
            required
            {...register("amount")}
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Preço"
          />
          <input
            type="text"
            required
            {...register("category")}
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Categoria"
          />

          <RadioGroup defaultValue="income" className="flex flex-row">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="income"
                onClick={() => {
                  setTransactionType("income");
                }}
                id="income"
                className="flex flex-row w-[212px] bg-tableRowColor items-center justify-center gap-3 p-3 text-white rounded-md border-none data-[state=checked]:bg-green-900 data-[state=checked]:text-write "
              >
                <Image
                  src="./entradas.svg"
                  width={32}
                  height={32}
                  className="data-[state=checked]:text-white"
                  alt="entrada"
                />
                Entrada
              </RadioGroupItem>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="outcome"
                id="outcome"
                onClick={() => {
                  setTransactionType("outcome");
                }}
                className="flex flex-row w-[212px] bg-tableRowColor items-center justify-center gap-3 p-3 text-white rounded-md border-none data-[state=checked]:bg-red-900 data-[state=checked]:text-write"
              >
                <Image
                  src="./despesas.svg"
                  width={32}
                  height={32}
                  alt="entrada"
                  className="data-[state=checked]:text-white"
                />
                Saídas
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <DialogFooter className="items-center sm:justify-center">
            <button
              type="submit"
              className="w-full rounded-lg bg-greenDT-default px-5 py-4 font-bold text-white hover:bg-greenDT-light"
            >
              {" "}
              Cadastrar{" "}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
