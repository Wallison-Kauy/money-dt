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
import { TransactionProps, useTransactionStore } from "@/store/transactions";
import { SearchTransactions } from "../SearchTrasactions";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "@/utils/debouce";

interface TableTransactionsProps {
  transactions: TransactionProps[] | undefined;
}

export const TableTransactions = ({ transactions }: TableTransactionsProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [displayedTransactions, setDisplayedTransactions] =
    useState(transactions);

  const debouncedFilterTransactions = useCallback(
    debounce((search: string) => {
      if (!search || !transactions) {
        setDisplayedTransactions(transactions || []);
        return;
      }

      const filtered = transactions.filter((transaction) => {
        return (
          transaction.title.toLowerCase().includes(search.toLowerCase()) ||
          transaction.category.toLowerCase().includes(search.toLowerCase())
        );
      });

      setDisplayedTransactions(filtered);
    }, 300),
    [transactions],
  );

  useEffect(() => {
    debouncedFilterTransactions(searchValue);
  }, [searchValue, debouncedFilterTransactions]);

  return (
    <>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="flex w-full bg-backgroud2 p-4 text-lg text-searchText"
          placeholder="Busque uma transação"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <Table className="text-white">
        <TableBody className="flex  flex-col gap-4">
          {displayedTransactions?.map((transaction) => (
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
              <TableCell className="w-[150px]">
                {transaction.category}
              </TableCell>
              <TableCell className="text-right w-[150px] items-center flex">
                {new Date(transaction?.createdAt).toLocaleDateString("pt-BR")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
