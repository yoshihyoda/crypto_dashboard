async function getCryptoEthBtcNews() {
  const url = `https://cryptonews-api.com/api/v1?tickers=BTC,ETH,SOL&items=3&page=1&token=${process.env.CRYPTO_NEWS_API_KEY}`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const res = await fetch(url, options);
  const json = await res.json();
  const data = await json.data;
  console.log(data);
  return data;
}

export default getCryptoEthBtcNews;