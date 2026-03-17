export async function getPrice() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/price`, {
  const res = await fetch("https://dev.calendar.eglamed.com.ua/api/price", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch price");
  }

  return res.json();
}