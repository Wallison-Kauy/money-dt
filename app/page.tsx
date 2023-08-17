"use client";
import Header from "@/components/Header";
import Sumarry from "@/components/Summary/intex";
import { TableTransactions } from "@/components/TableTransactions";
import useStore from "@/store/transactionsStore";
import { useTransactionStore } from "@/store/transactions";

export default function Home() {
  const transactionsPersistence = useStore(
    useTransactionStore,
    (state) => state.transactions,
  );

  return (
    <>
      <Header />
      <div className="text-grayRo container mx-auto  flex w-full max-w-[1220px] flex-col	justify-between gap-12"> 
          <Sumarry transactions={transactionsPersistence} />
          <TableTransactions transactions={transactionsPersistence} />
      </div>
    </>
  );
}
