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

export default async function Home() {
  const latest_data: CryptoItem[] = await getLatest();
  const crypto_general_news: CryptoGeneralNews[] = await getCryptoGeneralNews();
  const crypto_ethbtcxpr_news: CryptoEthBtcNews[] = await getCryptoEthBtcNews();

  return (
    <main className="mx-auto mt-2 flex min-h-screen flex-col items-center justify-between md:pt-4 xl:w-4/5">
      <div className="flex flex-col items-center justify-between px-4 pt-4 md:flex-row md:space-x-12 md:pt-0">
        <div>
          <h1 className="ml-4 text-xl font-bold md:text-3xl">
            Current Trend 🚀
          </h1>
          <div className="carousel carousel-center m-2 mb-8 max-w-2xl space-x-4 rounded-box">
            {crypto_general_news.map((news) => (
              <div className="carousel-item relative">
                <Image
                  src={news.image_url}
                  className="rounded-box"
                  style={{ filter: "brightness(0.3)" }}
                  height={240}
                  width={360}
                  alt="current trend"
                  objectFit="contain"
                />
                <p className="text-md absolute left-5 top-3 w-1/2 bg-opacity-50 p-2 text-left font-extrabold text-white">
                  {news.title.length > 70
                    ? `${news.title.substring(0, 70)}...`
                    : news.title}
                </p>
                <p className="absolute bottom-2 left-5 w-1/2 bg-opacity-50 p-2 text-left text-sm text-gray-400">
                  {news.text.length > 50
                    ? `${news.text.substring(0, 50)}...`
                    : news.text}
                </p>
                <Button className="absolute bottom-5 right-5 bg-gray-300 px-4 text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500">
                  <Link className="text-black" href={news.news_url}>
                    Read more
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="ml-4 text-xl font-bold md:text-3xl">
            BTC, ETH, SOL News
          </h1>
          <div className="carousel carousel-center m-2 mb-8 max-w-2xl space-x-4 rounded-box">
            {crypto_ethbtcxpr_news.map((news) => (
              <div className="carousel-item relative">
                <Image
                  src={news.image_url}
                  className="rounded-box"
                  style={{ filter: "brightness(0.3)" }}
                  height={240}
                  width={360}
                  alt="BTC, ETH, SOL related image"
                  objectFit="contain"
                />
                <p className="text-md absolute left-5 top-3 w-1/2 bg-opacity-50 p-2 text-left font-extrabold text-white">
                  {news.title.length > 70
                    ? `${news.title.substring(0, 70)}...`
                    : news.title}
                </p>
                <p className="absolute bottom-2 left-5 w-1/2 bg-opacity-50 p-2 text-left text-sm text-gray-400">
                  {news.text.length > 50
                    ? `${news.text.substring(0, 50)}...`
                    : news.text}
                </p>
                <Button className="absolute bottom-5 right-5 bg-gray-300 px-4 text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500">
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
