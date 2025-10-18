import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Quotes",
  description: "made by Sonu kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-screen w-screen bg-secondary"
      >
        {children}
      </body>
    </html>
  );
}
