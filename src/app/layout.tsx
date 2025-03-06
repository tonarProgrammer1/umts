import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ТОНАР: Система для поставщиков",
    description: "Электронная площадка УМТС предприятия «Тонар»",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <html lang="ru">
        <body>
            {children}
        </body>
    </html>
);
}
