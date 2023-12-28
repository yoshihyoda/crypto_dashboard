import { CryptoItem } from "@/types/CryptoItem";
import getLatest from "../utils/getLatest";
// import CryptoCard from "./components/CryptoCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Home() {
  const data: CryptoItem[] = await getLatest();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-4/5 mx-auto p-24">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Date Added</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>
                {new Date(item.date_added).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </TableCell>
              <TableCell className="text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(item.quote.USD.market_cap)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

{
  /* <div>
  {data.map((crypto: CryptoItem) => (
    <CryptoCard
      name={crypto.name}
      symbol={crypto.symbol}
      market_cap={crypto.quote.USD.market_cap}
    />
  ))}
</div>; */
}
