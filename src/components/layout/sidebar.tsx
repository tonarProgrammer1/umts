"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

import style from "@/styles/dashboard/sidebar.module.scss";

import Vector from "@/assets/icons/leftVector.svg";
import Logo from "@/assets/icons/logo.svg";

interface SidebarItem {
	title: string;
	href: string;
	icon?: React.ReactNode; // Иконка (опционально)
	count?: number;
}

interface SidebarProps {
	items: SidebarItem[];
	collapseMenu: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, collapseMenu }) => {
	const [activePath, setActivePath] = useState<string>("");
	const [shortMenu, setShortMenu] = useState<boolean>(false);
	const [mounted, setMounted] = useState<boolean>(false);


	useEffect(() => {
		setActivePath(window.location.pathname);
		setMounted(true);
	}, []);
	if (!mounted) return null;

	return (
		<div
			className={clsx(style.container, shortMenu ? style.shortMenu : "")}
		>
			<div className={style.logo}>
				<Logo />
			</div>
			<nav className={style.navMenu}>
				<ul className={style.navList}>
					{items.map((item, index) => (
						<li
							key={index}
							className={clsx(
								style.item,
								activePath === item.href ? style.active : "",
								shortMenu ? style.shortMenu : ""
							)}
						>
							<Link
								href={item.href}
								onClick={() => setActivePath(item.href)}
								style={{
									textDecoration: "none",
									color: "inherit",
									display: "flex",
									alignItems: "center",
								}}
							>
								<div className={style.itemBlock}>
									<div className={style.itemIcon}>
										{item.icon && item.icon}
										{item.count != undefined &&
										item.count > 0 &&
										shortMenu ? (
											<div></div>
										) : (
											""
										)}
									</div>
									<div className={style.textWrapper}>
										<span>{item.title}</span>
									</div>
								</div>

								<span className={style.itemCount}>
									{item.count}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<button
				className={clsx(
					style.closeMenu,
					shortMenu ? style.shortMenu : ""
				)}
				onClick={() => setShortMenu(!shortMenu)}
			>
				<div>
					<Vector />
				</div>

				<span>{collapseMenu}</span>
			</button>
		</div>
	);
};

export default Sidebar;
