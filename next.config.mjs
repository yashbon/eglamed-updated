/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    qualities: [25, 50, 75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.googletagmanager.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // 1. Загальні заголовки безпеки для всіх сторінок
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
      {
        // 2. Ефективне кешування для статичних ресурсів (Зображення, Шрифти, Іконки)
        source: '/(.*).(jpg|jpeg|png|webp|svg|woff2|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', 
          },
        ],
      },
    ];
  },
};

const cspHeader = `
    upgrade-insecure-requests;
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.gstatic.com www.googletagmanager.com;
    style-src 'self' 'unsafe-inline' www.gstatic.com;
    frame-src 'self' www.google.com;
    connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com;
    img-src 'self' data: www.googletagmanager.com www.google-analytics.com;
    font-src 'self' fonts.gstatic.com;
`;

export default nextConfig;
