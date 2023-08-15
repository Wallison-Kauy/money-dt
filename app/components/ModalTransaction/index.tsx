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

export const TransactionModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-lg bg-greenMid px-5 py-4 text-xl font-bold text-white hover:bg-greenMidHover">
        Nova transação
      </DialogTrigger>
      <DialogContent className="border-none bg-backgroundIngnite p-12">
        <DialogHeader>
          <DialogTitle className="text-white">Nova transação</DialogTitle>
        </DialogHeader>
        <form className="mt-6 flex flex-col gap-4 ">
          <input
            type="text"
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Descrição"
          />
          <input
            type="text"
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Preço"
          />
          <input
            type="text"
            className="flex w-full rounded-lg bg-backgroud2 p-4 text-lg text-searchText"
            placeholder="Categoria"
          />

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
            </div>
          </RadioGroup>
        </form>
        <DialogFooter className="items-center sm:justify-center">
          <button className="w-full rounded-lg bg-greenMid px-5 py-4 font-bold text-white hover:bg-greenMidHover">
            {" "}
            Cadastrar{" "}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
