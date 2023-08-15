import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableTransactions = () => {
  return (
    <Table className="text-white">
      <TableBody>
        <TableRow className=" bg-tableRowColor  text-base text-textCard">
          <TableCell className="font-medium">Desenvolvimento Web</TableCell>
          <TableCell className="text-right">R$ 1200</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">13/06/2023</TableCell>
        </TableRow>

      

        <TableRow className=" bg-tableRowColor  text-base text-textCard">
          <TableCell className="font-medium">Desenvolvimento Web</TableCell>
          <TableCell className="text-right">R$ 1200</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">13/06/2023</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
