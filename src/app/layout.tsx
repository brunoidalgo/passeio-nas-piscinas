import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "passeio de jangada Patacho",
    "piscinas naturais do Patacho",
    "Praia do Patacho",
    "Rota Ecológica dos Milagres",
    "São Miguel dos Milagres passeios",
    "Porto de Pedras Alagoas",
    "piscinas naturais Alagoas",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
  // Cole aqui o código de verificação do Google Search Console, se for usar a meta tag
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0b4a44",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${kaushan.variable} antialiased`}>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className="font-sans">{children}</body>
    </html>
  );
}
