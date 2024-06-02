import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "NextJS Tailwind Sandbox",
  description: "This a project developed by MAB. Thanks DevEmpower Youtube Channel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
