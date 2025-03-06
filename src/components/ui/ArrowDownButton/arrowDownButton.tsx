"use client"

import React from "react";
import styles from "./arrowDownButton.module.scss";
import clsx from "clsx";

import DownVector from '@/assets/icons/downVector.svg'

type ArrowDownButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
};

const ArrowDownButton: React.FC<ArrowDownButtonProps> = ({
onClick,
	disabled = false,
}) => {
	return (
	<button
		className={clsx(styles.button, disabled ? styles.disabled : null)}
		onClick={!disabled ? onClick : undefined}
		disabled={disabled}
	>
		<span className="icon"><DownVector /></span>
	</button>
	);
};

export default ArrowDownButton;
