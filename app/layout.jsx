import "./globals.css";
import { Quicksand, Nunito } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Ideal Academy - Nurturing Young Minds",
  description:
    "Welcome to Ideal Academy, where we nurture young minds and build strong foundations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${nunito.variable}`}>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
