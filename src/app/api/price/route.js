export async function GET() {
    const response = await fetch("https://dev.calendar.eglamed.com.ua/api/price", {
        // const response = await fetch("http://localhost:4000/api/price", {
        // headers: {
        // Authorization: `Bearer ${process.env.SERVICES_API_KEY}`,
        // },
    });

    const data = await response.json();
    return Response.json(data);
}
