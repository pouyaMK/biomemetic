
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

export const yekanBakh = localFont({
  src: [
    {
      path: "../fonts/YekanBakh-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});


