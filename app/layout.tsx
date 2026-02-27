/*
 * @Author: clhuang v-clhuang@abcft.com
 * @Date: 2026-02-26 14:17:08
 * @LastEditors: clhuang v-clhuang@abcft.com
 * @LastEditTime: 2026-02-27 21:41:05
 * @FilePath: \my-next-demo\app\layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Comforter } from 'next/font/google'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const comforter = Comforter({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={comforter.className}
      >
        {children}
      </body>
    </html>
  );
}
