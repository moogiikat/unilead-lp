//
import "tailwindcss/tailwind.css";
import type { Metadata } from "next/types";
import { Inter } from "@next/font/google";
import { RootStyleRegistry } from "./emotion";
import { FacebookMessenger, Ga } from "lib/components";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Unilead",
  description: "Unilead app",
};

const RootLayout: React.FCC = ({ children }) => {
  return (
    <html className={inter.className} lang="ja">
      <Ga />
      <head>
        <title>Unilead</title>
      </head>
      <body className="bg-white">
        <RootStyleRegistry>{children}</RootStyleRegistry>
        <FacebookMessenger />
      </body>
    </html>
  );
};
export default RootLayout;
