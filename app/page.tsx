import { CryptoItem } from "@/types/CryptoItem";
import { CryptoGeneralNews } from "@/types/CryptoGeneralNews";
import { CryptoEthBtcNews } from "@/types/CryptoEthBtcNews";
import getLatest from "@/utils/getLatest";
import getCryptoGeneralNews from "@/utils/getCryptoGeneralNews";
import getCryptoEthBtcNews from "@/utils/getCryptoEthBtcNews";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const latest_data: CryptoItem[] = await getLatest();
  const crypto_general_news: CryptoGeneralNews[] = await getCryptoGeneralNews();
  const crypto_ethbtcxpr_news: CryptoEthBtcNews[] = await getCryptoEthBtcNews();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-4/5 mx-auto p-24">
      <div className="flex flex-row justify-between items-center space-x-12">
        <div>
          <h1 className="text-4xl font-bold">Current Trend 🚀</h1>
          <div className="carousel carousel-center max-w-2xl p-4 space-x-4 mb-12 rounded-box">
            {crypto_general_news.map((news) => (
              <div className="carousel-item relative">
                <Image
                  src={news.image_url}
                  className="rounded-box"
                  style={{ filter: "brightness(0.3)" }}
                  height={240}
                  width={350}
                  alt="image"
                  objectFit="cover"
                />
                <p className="absolute top-3 left-5 bg-opacity-50 p-2 text-md font-extrabold text-white w-1/2 text-left">
                  {news.title.length > 70
                    ? `${news.title.substring(0, 70)}...`
                    : news.title}
                </p>
                <p className="absolute bottom-2 left-5 bg-opacity-50 p-2 text-sm text-gray-400 w-1/2 text-left">
                  {news.text.length > 50
                    ? `${news.text.substring(0, 50)}...`
                    : news.text}
                </p>
                <Button className="absolute bottom-5 right-5 px-4 bg-white text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300">
                  <Link className="text-black" href={news.news_url}>
                    Read more
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">BTC, ETH, SOL News</h1>
          <div className="carousel carousel-center max-w-2xl p-4 space-x-4 mb-12 rounded-box">
            {crypto_ethbtcxpr_news.map((news) => (
              <div className="carousel-item relative">
                <Image
                  src={news.image_url}
                  className="rounded-box"
                  style={{ filter: "brightness(0.3)" }}
                  height={240}
                  width={350}
                  alt="image"
                  objectFit="cover"
                />
                <p className="absolute top-3 left-5 bg-opacity-50 p-2 text-md font-extrabold text-white w-1/2 text-left">
                  {news.title.length > 70
                    ? `${news.title.substring(0, 70)}...`
                    : news.title}
                </p>
                <p className="absolute bottom-2 left-5 bg-opacity-50 p-2 text-sm text-gray-400 w-1/2 text-left">
                  {news.text.length > 50
                    ? `${news.text.substring(0, 50)}...`
                    : news.text}
                </p>
                <Button className="absolute bottom-5 right-5 px-4 bg-white text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300">
                  <Link className="text-black" href={news.news_url}>
                    Read more
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1h %</TableHead>
            <TableHead>24h %</TableHead>
            <TableHead>7d %</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latest_data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-bold">{item.name}</TableCell>
              <TableCell>{item.symbol}</TableCell>
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
