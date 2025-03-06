import type { Metadata } from "next";
import '@/styles/global.scss';

export const metadata: Metadata = {
    title: "ТОНАР: Система для поставщиков",
    description: "Электронная площадка УМТС предприятия «Тонар»",
};

export default function GuestLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
	<div className="body-main">
		{children}
	</div>
);
}
