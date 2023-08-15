import Header from "./components/Header";
import Sumarry from "./components/Summary/intex";
import { SearchTransactions } from "./components/SearchTrasactions";
import { TableTransactions } from "./components/TableTransactions";
import { Wrapper } from "./components/Wrapper";


export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sumarry />
        <SearchTransactions />
        <TableTransactions />
      </Wrapper>
    </>
  );
}
