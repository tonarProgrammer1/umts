import type { Metadata } from "next";
import React, { Suspense } from "react";
import "@/styles/global.scss";
import styles from "@/styles/dashboard/layout.module.scss";

import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import House from "@/assets/icons/house.svg";
import Star from "@/assets/icons/star.svg";
import Car from "@/assets/icons/car.svg";
import Employees from "@/assets/icons/employees.svg";
import Designers from "@/assets/icons/designers.svg";
import Pen from "@/assets/icons/pen.svg";
import Documents from "@/assets/icons/documents.svg";
import Claims from "@/assets/icons/claims.svg";
import Chat from "@/assets/icons/chat.svg";

import useTranslation from "next-translate/useTranslation";

export const metadata: Metadata = {
	title: "ТОНАР: Система для поставщиков",
	description: "Электронная площадка УМТС предприятия «Тонар»",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { t } = useTranslation("common");

	const sidebarItems = [
		{ title: t("home") , href: "/dashboard", icon: <House /> },
		{
			title: t("tenders"),
			href: "/dashboard/tenders",
			icon: <Star />,
			count: 10,
		},
		{ title: t("suppliers"), href: "/dashboard/suppliers", icon: <Car /> },
		{
			title: t("employees"),
			href: "/dashboard/employees",
			icon: <Employees />,
		},
		{
			title: t("designers"),
			href: "/dashboard/designers",
			icon: <Designers />,
		},
		{
			title: t("documentation"),
			href: "/dashboard/documentation",
			icon: <Pen />,
		},
		{
			title: t("documents"),
			href: "/dashboard/documents",
			icon: <Documents />,
		},
		{ title: t("claims"), href: "/dashboard/claims", icon: <Claims /> },
		{ title: t("chats"), href: "/dashboard/chats", icon: <Chat /> },
	];

	return (
		<div className={styles.main}>
			<div className={styles.sidebar}>
				<Sidebar items={sidebarItems} collapseMenu={t("collapseMenu")} />
			</div>
			<div className={styles.content}>
				<header>
					<Header />
				</header>
				<Suspense fallback={<div>Загрузка содержимого...</div>}>
					<main className={styles.page}>{children}</main>
				</Suspense>
				<footer>
					<Footer/>
				</footer>
			</div>
		</div>
	);
}
