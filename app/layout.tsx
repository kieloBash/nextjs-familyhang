import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import SidebarProvider from "@/contexts/SidebarProvider";
import SideBar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import GameProvider from "@/providers/GameProvider";
import SongMPThree from "@/components/song";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Family Games - Fortune",
  description: "Created for Family Games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <SidebarProvider>
            <GameProvider>
              <SideBar />
              <Toaster />
              {children}
              <SongMPThree />
            </GameProvider>
          </SidebarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
