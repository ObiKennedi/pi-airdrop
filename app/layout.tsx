import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pi Network",
  description: "Pi airdrop",
  icons:{
    icon: "/icons/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
