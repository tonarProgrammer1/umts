"use client"

import React, { ReactElement } from "react";
import styles from "./svgButton.module.scss";
import clsx from "clsx";

import Pencil from '@/assets/icons/pencil.svg'

type SvgButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
	svg?: ReactElement;
};

const SvgButton: React.FC<SvgButtonProps> = ({
	onClick,
	disabled = false,
	svg = <Pencil/>,
}) => {
	return (
		<button
			className={clsx(styles.button, disabled ? styles.disabled : null)}
			onClick={!disabled ? onClick : undefined}
			disabled={disabled}
		>
			<span className="icon">{svg}</span>
		</button>
	);
};

export default SvgButton;
