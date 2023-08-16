import { create } from "zustand";

export type TransactionProps = {
  id: string;
  title: string;
  amount: number;
  category: string;
  createdAt: Date;
  type: "income" | "outcome";
};

type ActionsProps = {
  addTransaction: (Transaction: TransactionProps) => void;
  removeTransaction: (id: string) => void;
};

type StoreProps = {
  state: {
    transactions: TransactionProps[];
  };
  actions: ActionsProps;
};

export const useTransactionStore = create<StoreProps>((set) => ({
  state: {
    transactions: [],
  },
  actions: {
    addTransaction: (transaction) =>
      set((state) => ({
        state: { transactions: [...state.state.transactions, transaction] },
        // ...state,
        // transactions: [...state.state.transactions, transaction],
      })),

    removeTransaction: (id) =>
      set((state) => ({
        state: {
          transactions: state.state.transactions.filter(
            (transaction) => transaction.id !== id,
          ),
        },
      })),
  },
}));
