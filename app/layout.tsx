import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avrora Nomad | Реабилитационный центр в Алматы",
  description: "Открытый реабилитационный центр в Алматы с Био-Психо-Социальной моделью. Помощь при наркозависимости, алкоголизме, лудомании.",
  keywords: "реабилитация, реабилитационный центр, Алматы, лечение зависимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
