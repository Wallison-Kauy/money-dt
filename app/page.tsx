"use client";
import Header from "@/components/Header";
import Sumarry from "@/components/Summary/intex";
import { SearchTransactions } from "@/components/SearchTrasactions";
import { TableTransactions } from "@/components/TableTransactions";
import { Wrapper } from "@/components/Wrapper";
import useStore from "@/store/transactionsStore";
import { useTransactionStore } from "@/store/transactions";
import { Suspense } from "react";

export default function Home() {
  const transactionsPersistence = useStore(
    useTransactionStore,
    (state) => state.transactions,
  );

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Wrapper>
          <Sumarry transactions={transactionsPersistence} />
          <TableTransactions transactions={transactionsPersistence} />
        </Wrapper>
      </Suspense>
    </>
  );
}
