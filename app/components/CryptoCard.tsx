import { CryptoItem } from "@/types/CryptoItem";

type CryptoCardProps = {
  name: CryptoItem["name"];
  symbol: CryptoItem["symbol"];
  market_cap: CryptoItem["quote"]["USD"]["market_cap"];
};

function CryptoCard({ name, symbol, market_cap }: CryptoCardProps) {
  return (
    <div className="flex flex-row justify-center">
      <div>{name}</div>
      <div>{symbol}</div>
      <div>{market_cap}</div>
    </div>
  );
}

export default CryptoCard;
