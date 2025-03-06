"use client"

import React from "react";
import styles from "./userTag.module.scss";
import clsx from "clsx";

import Cross from '@/assets/icons/cross.svg'

type UserTagProps = {
	label: string; // Текст кнопки
	onClick?: () => void; // Обработчик клика
	disabled?: boolean;
};

const UserTag: React.FC<UserTagProps> = ({
	label,
	onClick,
	disabled = false,
}) => {

	return (
		<button
			className={clsx(styles.button, disabled ? styles.disabled : null)}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<span className="icon"><Cross/></span>
			<span className="button-14-medium">{label}</span>
		</button>
	);
};

export default UserTag;
