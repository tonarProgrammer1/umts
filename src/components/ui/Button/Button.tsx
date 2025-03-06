"use client"

import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

type ButtonProps = {
	label: string; // Текст кнопки
	onClick?: () => void; // Обработчик клика
	disabled?: boolean;
	color?: "blue" | "darkBlue" | "green" | "orange"; // Цвет кнопки
	icon?: React.ReactNode; // Иконка перед текстом
};

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled = false,
	color = "blue",
	icon,
}) => {

  return (
    <button
		className={clsx(styles.button, styles[color],{ [styles.disabled]: disabled })}
		onClick={!disabled ? onClick : undefined}
		disabled={disabled}
    >
		{icon && icon}
		<span className="button-14-medium">{label}</span>
    </button>
  );
};

export default Button;
