export async function GET() {
    const response = await fetch("https://calendar.eglamed.com.ua/api/services", {
        headers: {
            Authorization: `Bearer ${process.env.SERVICES_API_KEY}`,
        },
    });

    const data = await response.json();
    return Response.json(data);
}
