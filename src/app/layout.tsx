import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

const siteConfig = {
  title: "Tam Giang Capital | Hệ Sinh Thái Đầu Tư Đa Ngành Bền Vững",
  description: "Tam Giang Capital (TGV) - Tập đoàn đầu tư đa ngành tại Việt Nam. Chuyên sâu về Dịch vụ số, Esports, Đầu tư chiến lược và Nông nghiệp công nghệ cao. Kiến tạo giá trị bền vững cho tương lai.",
  url: "https://tamgiangcapital.com",
  ogImage: "/og-image.png",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | Tam Giang Capital`,
  },
  description: siteConfig.description,
  keywords: ["Tam Giang Capital", "TGV Capital", "Đầu tư đa ngành", "Hệ sinh thái Tam Giang", "Dịch vụ số BHXH", "Dịch vụ công", "Esports Việt Nam", "Nông nghiệp công nghệ cao"],
  authors: [{ name: "Tam Giang Capital Team" }],
  creator: "Tam Giang Capital",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Tam Giang Capital",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
