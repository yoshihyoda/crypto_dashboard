async function getLatest() {
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-CMC_PRO_API_KEY": `${process.env.CRYPTO_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const res = await fetch(url, options);
  const response_json = await res.json();
  const data = response_json.data;

  return data;
}
export default getLatest;
