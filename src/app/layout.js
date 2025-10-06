import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Amatic_SC } from "next/font/google";
import { Noto_Serif_HK } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400" , "800"],   // add whatever you need
  display: "swap",
  variable: "--font-robotoCondensed",       // exposes a CSS variable
});

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],   // add whatever you need
  display: "swap",
  variable: "--font-amaticSC",       // exposes a CSS variable
});

const notoSerifHK = Noto_Serif_HK({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],   // add whatever you need
  display: "swap",
  variable: "--font-notoSerifHK",       // exposes a CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} ${amaticSC.variable} ${notoSerifHK.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
