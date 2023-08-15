import exp from "constants";
import Card from "../Card";

const Sumarry = () => {
  return (
    <div className="-mt-[80px] flex w-full flex-row gap-8">
      <Card title="Entradas" price={1231231} logo="/entradas.svg" />
      <Card title="Saídas" price={1231231} logo="/despesas.svg" />
      <Card title="Total" price={1231231} logo="/total.svg" />
    </div>
  );
};

export default Sumarry;
