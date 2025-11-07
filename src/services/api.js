import axios from "axios";

export const sendMessageToTelegram = async (message) => {
    const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_CHAT_ID;
    const TELEGRAM_URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await axios.post(TELEGRAM_URI_API, {
        chat_id: TELEGRAM_CHAT_ID,
        parse_mode: "html",
        text: message,
    });

    return response;
};
