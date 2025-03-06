"use client"

import React from "react";
import styles from "./InfoCard.module.scss";
import clsx from "clsx";

import RightVector from '@/assets/icons/rightVector.svg'

type InfoCardProps = {
	label: string;
	count: number;
	onClick?: () => void;
	disabled?: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({
	label,
	count,
	onClick,
	disabled = false,
}) => {
	return (
		<button
			className={clsx(styles.button, disabled ? styles.disabled : null)}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<span className="title-2">{count}</span>
			<div className={styles.block}>
				<span className="button-14-medium">{label}</span>
				<span className="icon"><RightVector/></span>
			</div>
		</button>
	);
};

export default InfoCard;
