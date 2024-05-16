import { Lato } from "next/font/google";
import "./globals.css";

const inter = Lato({ subsets: ["latin"], weight: '400', });

export const metadata = {
  title: "Jherico Cocosa",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
