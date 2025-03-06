"use client";

import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
	label: string; // Текст кнопки
	onClick?: () => void; // Обработчик клика
	disabled?: boolean;
	color?: "blue" | "darkBlue" | "green" | "orange"; // Цвет кнопки
	icon?: React.ReactNode; // Иконка перед текстом
	href?: string | null;
};

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled = false,
	color = "blue",
	icon,
	href,
}) => {

	if(href != null){
		return(
			<Link
				className={clsx(styles.button, styles[color], {
					[styles.disabled]: disabled,
				})}
				href={href}
			>
				{icon && icon}
				<span className="button-14-medium">{label}</span>
			</Link>
		)
	}


	return (
		<button
			className={clsx(styles.button, styles[color], {
				[styles.disabled]: disabled,
			})}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			{icon && icon}
			<span className="button-14-medium">{label}</span>
		</button>
	);
};

export default Button;
