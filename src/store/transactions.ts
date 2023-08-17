import { create, StateCreator } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

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
  transactions: TransactionProps[];
  addTransaction: (Transaction: TransactionProps) => void;
  removeTransaction: (id: string) => void;
  updateTransaction: (id: string, updatedTransaction: Partial<TransactionProps>) => void;
};

type MyPersist = (
  config: StateCreator<StoreProps>,
  options: PersistOptions<StoreProps>,
) => StateCreator<StoreProps>;

export const useTransactionStore = create<StoreProps, []>(
  (persist as MyPersist)(
    (set): StoreProps => ({
      transactions: [],

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [...state.transactions, transaction],
        })),

      removeTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== id,
          ),
        })),

        updateTransaction: (id, updatedTransaction) => {
          set((state) => ({
            transactions: state.transactions.map((transaction) => {
              if (transaction.id === id) {
                return { ...transaction, ...updatedTransaction };
              }
              return transaction;
            }),
          }));
        }
    }),
    {
      name: "transaction",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// export const useTransactionStore = create<StoreProps>((set) => ({
//   state: {
//     transactions: [],
//   },
//   actions: {
//     addTransaction: (transaction) =>
//       set((state) => ({
//         state: { transactions: [...state.state.transactions, transaction] },
//         // ...state,
//         // transactions: [...state.state.transactions, transaction],
//       })),

//     removeTransaction: (id) =>
//       set((state) => ({
//         state: {
//           transactions: state.state.transactions.filter(
//             (transaction) => transaction.id !== id,
//           ),
//         },
//       })),
//   },
// }));
