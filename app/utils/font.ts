import { Michroma, Inter } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

export const michroma: NextFont = Michroma({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const inter: NextFont = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});
