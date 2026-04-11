export async function GET() {
    const response = await fetch("https://calendar.eglamed.com.ua/api/price", {
        // const response = await fetch("http://localhost:4000/api/price", {
        // headers: {
        // Authorization: `Bearer ${process.env.SERVICES_API_KEY}`,
        // },
    });

    const data = await response.json();
    // console.log("Price data:", data); // Додайте цей рядок для перевірки отриманих даних
    return Response.json(data);
}
