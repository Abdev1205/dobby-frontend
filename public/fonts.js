import { Poppins, Rubik, Nunito_Sans, Nunito } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito-sans",
})