import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthX",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className} bg-[#0d021f] text-[#e5dbff]`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors theme="dark" />

          <footer className="bg-[#1a1126] py-12">
            <div className="container mx-auto px-4 text-center text-[#cbb2ff]">
              <p>Made by <span className="font-bold text-[#e5dbff]">codeblooded</span></p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
