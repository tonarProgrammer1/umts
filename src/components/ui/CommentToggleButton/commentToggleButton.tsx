"use client"

import React from "react";
import styles from "./commentToggleButton.module.scss";
import clsx from "clsx";

import TopVector from '@/assets/icons/topVector.svg'


type CommentToggleButtonProps = {
	onClick?: () => void;
	disabled: boolean;
};

const CommentToggleButton: React.FC<CommentToggleButtonProps> = ({
	onClick,
	disabled = false,
}) => {
	return (
		<button
			className={clsx(styles.button, disabled ? styles.disabled : null)}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<span className="button-14-medium">Скрыть коммментарий</span>
			<span className="icon"><TopVector /></span>
		</button>
	);
};

export default CommentToggleButton;
