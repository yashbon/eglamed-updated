/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''), // Прибираємо переноси рядків для коректної роботи
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
