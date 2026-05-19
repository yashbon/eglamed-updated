export async function getPrice() {
  const PRICE_URL = process.env.NEXT_PUBLIC_SITE_URL
  
 const res = await fetch(PRICE_URL, {
    cache: "no-store"
  });
  console.log(res);
  
  if (!res.ok) {
    throw new Error("Failed to fetch price");
  }

  return res.json();
}