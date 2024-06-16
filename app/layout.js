import "./globals.css";
import MainLayout from "@/components/MainLayout";
import MenuContextProvider from "@/context/MenuContext";

export const metadata = {
  title: "NextJS Tailwind Sandbox",
  description:
    "This a project developed by MAB. Thanks DevEmpower Youtube Channel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
