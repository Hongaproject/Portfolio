import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "홍성원 포트폴리오",
  description: "프론트엔드 개발자 홍성원의 포토폴리오 입니다.",
  openGraph: {
    images: ["/img/photo.jpg"], 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <h1 className="text-center text-gray-500 h-24">
          © {new Date().getFullYear()}. Hong Seong Won. All Rights Reserved.
        </h1>
      </body>
    </html>
  );
}
