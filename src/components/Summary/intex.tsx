"use client";
import Card from "../Card";
import { useTransactionStore } from "@/store/transactions";

const Sumarry = () => {
  const {
    state: { transactions },
  } = useTransactionStore();

  const totalIncome = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const totalOutcome = transactions.reduce((acc, transaction) => {
    if (transaction.type === "outcome") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  return (
    <div className="-mt-[80px] flex w-full flex-row gap-8">
      <Card title="Entradas" price={totalIncome} logo="/entradas.svg" />
      <Card title="Saídas" price={totalOutcome} logo="/despesas.svg" />
      <Card
        title="Total"
        price={totalIncome - totalOutcome}
        logo="/total.svg"
        className={
          totalIncome - totalOutcome < 0 ? "bg-red-900" : "bg-greenDT-default"
        }
      />
    </div>
  );
};

export default Sumarry;
