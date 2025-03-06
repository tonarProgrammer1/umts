"use client"

import React from "react";
import styles from "./drawingAction.module.scss";
import clsx from "clsx";

import Setting from '@/assets/icons/setting.svg'
import Cancel from '@/assets/icons/cancel.svg'

type DrawingActionProps = {
	label: string; // Текст кнопки
	disabled: boolean,
	onClick?: () => void; // Обработчик клика
	type: "setting" | "cancel"; // Тип кнопки
};

const DrawingAction: React.FC<DrawingActionProps> = ({
	label,
	onClick,
	disabled = false,
	type = "setting",
}) => {

	return (
		<button
			className={clsx(styles.button, styles[type], disabled ? styles.disabled : null)}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<span className="icon">{type == 'setting' ? <Setting /> : <Cancel />}</span>
			<span className="button-14-medium">{label}</span>
		</button>
	);
};

export default DrawingAction;
