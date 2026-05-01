import { Arsenal } from "next/font/google";
import meta from "@/data/meta";
import "./globals.css";
import { Providers } from "./providers";

import Script from "next/script";
import schemaData from "@/data/schemaData";

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
    openGraph: {
        title,
        description,
        url,
        images,
        type,
        icons,
    },
    twitter: {
        title,
        description,
        card,
        images,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0VE2L3CVCD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0VE2L3CVCD');
          `}
        </Script>
            <body className={arsenal.className} suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
                <Script
                    id="jsonld-eglamed"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </body>
        </html>
    );
}
