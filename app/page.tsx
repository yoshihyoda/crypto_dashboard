import { CryptoItem } from "@/types/CryptoItem";
import { CryptoGeneralNews } from "@/types/CryptoGeneralNews";
import { CryptoEthBtcNews } from "@/types/CryptoEthBtcNews";
import getLatest from "@/utils/getLatest";
import getCryptoGeneralNews from "@/utils/getCryptoGeneralNews";
import getCryptoEthBtcNews from "@/utils/getCryptoEthBtcNews";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CryptoNews from "./components/CryptoNews";

export default async function Home() {
  const latest_data: CryptoItem[] = await getLatest();
  const crypto_general_news: CryptoGeneralNews[] = await getCryptoGeneralNews();
  const crypto_ethbtcxpr_news: CryptoEthBtcNews[] = await getCryptoEthBtcNews();

  return (
    <main className="mx-auto mt-2 flex min-h-screen flex-col items-center justify-between md:pt-4 xl:max-w-7xl">
      <div className="flex flex-col items-center justify-between pt-4 md:flex-row md:space-x-12 md:pt-0">
        <CryptoNews
          title="Current Trend 🚀"
          crypto_news={crypto_general_news}
        />
        <CryptoNews
          title="BTC, ETH, SOL News"
          crypto_news={crypto_ethbtcxpr_news}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden xl:table-cell">Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1h %</TableHead>
            <TableHead className="hidden xl:table-cell">24h %</TableHead>
            <TableHead>7d %</TableHead>
            <TableHead className="hidden text-right xl:table-cell">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latest_data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-bold">{item.name}</TableCell>
              <TableCell className="hidden xl:block">{item.symbol}</TableCell>
              <TableCell>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(item.quote.USD.price)}
              </TableCell>
              <TableCell
                style={{
                  color:
                    item.quote.USD.percent_change_1h < 0
                      ? "red"
                      : item.quote.USD.percent_change_1h > 0
                        ? "#229954"
                        : "gray",
                }}
              >
                {item.quote.USD.percent_change_1h < 0
                  ? "▼"
                  : item.quote.USD.percent_change_1h > 0
                    ? "▲"
                    : ""}
                {Number(item.quote.USD.percent_change_1h).toFixed(4)}%
              </TableCell>
              <TableCell
                className="hidden xl:block"
                style={{
                  color:
                    item.quote.USD.percent_change_24h < 0
                      ? "red"
                      : item.quote.USD.percent_change_24h > 0
                        ? "#229954"
                        : "gray",
                }}
              >
                {item.quote.USD.percent_change_24h < 0
                  ? "▼"
                  : item.quote.USD.percent_change_24h > 0
                    ? "▲"
                    : ""}
                {Number(item.quote.USD.percent_change_24h).toFixed(4)}%
              </TableCell>
              <TableCell
                style={{
                  color:
                    item.quote.USD.percent_change_7d < 0
                      ? "red"
                      : item.quote.USD.percent_change_7d > 0
                        ? "#229954"
                        : "gray",
                }}
              >
                {item.quote.USD.percent_change_7d < 0
                  ? "▼"
                  : item.quote.USD.percent_change_7d > 0
                    ? "▲"
                    : ""}
                {Number(item.quote.USD.percent_change_7d).toFixed(4)}%
              </TableCell>
              <TableCell className="hidden text-right xl:block">
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
