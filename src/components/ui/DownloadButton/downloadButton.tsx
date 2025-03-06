"use client"

import React from "react";
import styles from "./downloadButton.module.scss";
import clsx from "clsx";

import Clip from '@/assets/icons/clip.svg'

type ButtonProps = {
	label: string; // Текст кнопки
	onClick?: () => void; // Обработчик клика
	disabled: boolean;
};

const Button: React.FC<ButtonProps> = ({
	label = "Скачать файл",
	onClick,
	disabled = false,
}) => {

return (
	<button
		className={clsx(styles.button, disabled ? styles.disabled : null)}
		onClick={!disabled ? onClick : undefined}
		disabled={disabled}
	>
		<span className="icon"><Clip  /></span>
		<span className="button-14-medium">{label}</span>
	</button>
);
};

export default Button;
