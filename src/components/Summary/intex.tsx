import Card from "../Card";
import { TransactionProps, useTransactionStore } from "@/store/transactions";

interface SummaryProps {
  transactions: TransactionProps[] | undefined;
}

const Sumarry = ({ transactions }: SummaryProps) => {
  const totalIncome = transactions?.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const totalOutcome = transactions?.reduce((acc, transaction) => {
    if (transaction.type === "outcome") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  let totalIncomePersistence = totalIncome ? totalIncome : 0;
  let totalOutcomePersistence = totalOutcome ? totalOutcome : 0;

  return (
    <div className="-mt-[80px] flex w-full flex-row gap-8">
      <Card
        title="Entradas"
        price={totalIncomePersistence}
        logo="/entradas.svg"
      />
      <Card
        title="Saídas"
        price={totalOutcomePersistence}
        logo="/despesas.svg"
      />
      <Card
        title="Total"
        price={totalIncomePersistence - totalOutcomePersistence}
        logo="/total.svg"
        className={` ${
          totalIncomePersistence - totalOutcomePersistence < 0
            ? "bg-red-900"
            : "bg-greenDT-default"
        } font-bold`}
      />
    </div>
  );
};

export default Sumarry;
