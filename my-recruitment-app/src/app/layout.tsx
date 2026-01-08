import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EDURA - Tạo CV, Tìm việc làm, Tuyển dụng hiệu quả",
  description: "EDURA - Nền tảng tuyển dụng và tìm việc làm hàng đầu Việt Nam. Tạo CV chuyên nghiệp, tìm việc làm phù hợp, kết nối với hàng nghìn nhà tuyển dụng uy tín.",
  keywords: "tìm việc làm, tuyển dụng, CV, hồ sơ xin việc, việc làm, EDURA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
