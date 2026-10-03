import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export const metadata: Metadata = {
  title: "Solara Fields — Live Agrivoltaic Modeling Tool",
  description:
    "Prove the acre, not the pitch. Solara Fields turns your agrivoltaic pitch into a live model. Crop yield, water savings, and energy output—adjustable in front of the person who has to say yes.",
  keywords: [
    "Agrivoltaics",
    "Dual-use solar",
    "Agricultural solar",
    "Solar row spacing",
    "Crop yield modeling",
    "Solara Fields",
  ],
  authors: [{ name: "Solara Fields" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Solara Fields — Prove the acre, not the pitch",
    description:
      "Live agrivoltaic modeling. Calculate crop yield, water savings, and solar energy in real time for stakeholders.",
    siteName: "Solara Fields",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${ibmPlexSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#f6f1e4] text-[#16211c]">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
