"use client"

import React from "react";
import styles from "./backButton.module.scss";
import clsx from "clsx";

import Back from '@/assets/icons/back.svg'


type BackButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
};

const BackButton: React.FC<BackButtonProps> = ({
	onClick,
  	disabled = false,
}) => {
	return (
		<button
			className={clsx(styles.button, disabled ? styles.disabled : null)}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<span className="icon"><Back /></span>
			<span className="button-13-medium">Назад</span>
		</button>
	);
};

export default BackButton;
