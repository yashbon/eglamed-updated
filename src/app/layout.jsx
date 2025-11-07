import { Arsenal } from "next/font/google";
import meta from "@/data/meta";
import "./globals.css";
import { Providers } from "./providers";
// import { GoogleTagManager } from "@next/third-parties/google";

const arsenal = Arsenal({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

const { title, description, url, images, type, icons, card, keywords } = meta;

export const metadata = {
    title,
    description,
    keywords,
    // openGraph: {
    //   title,
    //   description,
    //   url,
    //   images,
    //   type,
    //   icons,
    // },
    // twitter: {
    //   title,
    //   description,
    //   card,
    //   images,
    // },
};

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <body className={arsenal.className} suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
                {/* <GoogleTagManager gtmId="G-HY7BR4SZYX" /> */}
            </body>
        </html>
    );
}
