import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Fatehsinh Mohansinh Chauhan",
    "Fatehsinh Chauhan Silvassa",
    "Lions Club of Silvassa",
    "Devkiba College",
    "Haveli Law Institute",
    "Dadra and Nagar Haveli",
    "Haveli Group"
  ],
  authors: [{ name: "Office of Shri Fatehsinh Mohansinh Chauhan" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Noto+Serif+Gujarati:wght@400;500;600;700&family=Noto+Sans+Gujarati:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-ink antialiased flex flex-col min-h-screen font-sans">
        <LanguageProvider>
          <SmoothScrollProvider>
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
