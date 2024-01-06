import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CryptoGeneralNews } from "@/types/CryptoGeneralNews";
import { CryptoEthBtcNews } from "@/types/CryptoEthBtcNews";

type CryptoNewsProps = {
  title: string;
  crypto_news: CryptoGeneralNews[] | CryptoEthBtcNews[];
};

function CryptoNews({ title, crypto_news }: CryptoNewsProps) {
  return (
    <div>
      <h1 className="ml-4 text-xl font-bold md:text-3xl">{title}</h1>
      <div className="carousel carousel-center m-2 mb-8 max-w-2xl space-x-4">
        {crypto_news.map((news) => (
          <div className="carousel-item relative">
            <Image
              src={news.image_url}
              className="rounded-box"
              style={{ filter: "brightness(0.3)" }}
              alt="current trend"
              width={400}
              height={225}
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
  );
}

export default CryptoNews;
