"use client"

import React, { ReactElement } from "react";
import styles from "./userTypeBlock.module.scss";
import clsx from "clsx";

import Gear from '@/assets/icons/gear.svg'

type UserTypeBlockProps = {
	onClick?: () => void;
	svg?: ReactElement;
	title? : string;
	date?: string;
};

const UserTypeBlock: React.FC<UserTypeBlockProps> = ({
	onClick,
	svg = <Gear/>,
	title = "Управление материально-технического снабжения",
	date = "20 января 2025  12:35",
}) => {
	return (
		<div className={styles.container}>
			<button
				className={clsx(styles.button)}
				onClick={onClick}
			>
				{svg}
			</button>

			<div className={styles.textBlock}>
				<p className={styles.title}>{title}</p>
				<p className={styles.date}>{date}</p>
			</div>
		</div>
	);
};

export default UserTypeBlock;
