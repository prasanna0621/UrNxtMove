import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentorChat from "@/components/MentorChat";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrNxtMove - Career Guidance Platform",
  description: "Discover the exact educational pathway tailored to your unique skills, passions, and industry trends.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="aurora-container">
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
          <div className="aurora-blob blob-3"></div>
        </div>
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1, paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <MentorChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
