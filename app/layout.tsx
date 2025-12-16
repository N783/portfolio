import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moh Nadeem Ahasan | Backend Developer",
  description: "Building scalable backends & AI-driven automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center p-4 antialiased">
        <main className="w-full max-w-4xl">{children}</main>
      </body>
    </html>
  );
}
