"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTransactionStore } from "@/store/transactions";

export const TableTransactions = () => {
  const {
    state: { transactions },
  } = useTransactionStore();

  const sortedTransactions = transactions.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );

  return (
    <Table className="text-white">
      <TableBody className="flex  flex-col gap-4">
        {sortedTransactions.map((transaction) => (
          <TableRow
            className="flex bg-tableRowColor text-base text-textCard justify-between"
            key={transaction.id}
          >
            <TableCell className="font-medium w-[150px]">
              {transaction.title}
            </TableCell>
            <TableCell
              className={`text-right w-[250px] justify-center flex ${
                transaction.type == "income"
                  ? "text-greenDT-light"
                  : "text-red-400"
              }`}
            >
              R$ {transaction.amount}
            </TableCell>
            <TableCell className="w-[150px]">{transaction.category}</TableCell>
            <TableCell className="text-right w-[150px] items-center flex">
              {transaction.createdAt.toLocaleDateString("pt-BR")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
