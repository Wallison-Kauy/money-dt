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
import { Label } from "@/components/ui/label";
import useStore from "@/store/transactionsStore";

interface TransactionModalEditProps{
  id:string;

}

export const TransactionModalEdit = ({id}:TransactionModalEditProps) => {
  const transactionsPersistence = useStore(
    useTransactionStore,
    (state) => state.transactions,
  );
  const transactionFiltred = transactionsPersistence?.find((transaction) => transaction.id === id);

  const { updateTransaction } = useTransactionStore();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, control, watch, reset } = useForm();
  const initialTransactionType = transactionFiltred ? transactionFiltred.type : "income";
  const [transactionType, setTransactionType] = useState<"income" | "outcome">(initialTransactionType);
  const { toast } = useToast();

  console.log({transactionType,initialTransactionType})

  const onSubmit = (data: any) => {
    console.log({data, transactionType,initialTransactionType,transactionFiltred});

    const editTransaction: TransactionProps = {
      id: Date.now().toString(),
      title: data.title,
      amount: parseFloat(data.amount),
      category: data.category,
      createdAt: transactionFiltred? transactionFiltred.createdAt : new Date(),
      type: transactionType,
    };

     toast({
       description: "Transação alterada",
      duration: 3000,
    });

    updateTransaction(id,editTransaction);
    setTransactionType("income");
    setOpen(false);
  };

  return (
    <Dialog >
      <DialogTrigger>
        Editar
      </DialogTrigger>
      <DialogContent className="border-none bg-backgroundIngnite p-12">
        <DialogHeader>
          <DialogTitle className="text-white">Editar transação</DialogTitle>
        </DialogHeader>
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <Label htmlFor="option-one" className="text-white">
              Descrição
            </Label>
          </div>

          <input
            type="text"
            defaultValue={transactionFiltred?.title}
            required
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Insira uma descrição para sua transação"
            {...register("title")}
          />
          <Label htmlFor="option-one" className="text-white">
            Preço
          </Label>
          <input
            type="number"
            defaultValue={transactionFiltred?.amount}
            required
            {...register("amount")}
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Insira um preço para sua transação"
          />
          <Label htmlFor="option-one" className="text-white">
            Categoria
          </Label>
          <input
          defaultValue={transactionFiltred?.category}
            type="text"
            required
            {...register("category")}
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Categoria"
          />

          <RadioGroup defaultValue={initialTransactionType} className="flex flex-row">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="income"
                onClick={() => {
                  setTransactionType("income");
                }}
                id="income"
                className="flex flex-row w-[212px] bg-tableRowColor items-center justify-center gap-3 p-3 text-white rounded-md border-none data-[state=checked]:bg-greenDT-dark data-[state=checked]:text-write "
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
                className="flex flex-row w-[212px] bg-tableRowColor items-center justify-center gap-3 p-3 text-white rounded-md border-none data-[state=checked]:bg-redDT-dark data-[state=checked]:stroke-white"
              >
                <Image
                  src="./despesas.svg"
                  width={32}
                  height={32}
                  alt="entrada"
                  className="data-[state=checked]:bg-white"
                />
                Saída
              </RadioGroupItem>
            </div>
          </RadioGroup>
          <DialogFooter className="items-center sm:justify-center mt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-greenDT-default px-5 py-4 font-bold text-white hover:bg-greenDT-light "
            >
              Salvar alteração
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
