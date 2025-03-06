"use client"

import React from "react";
import styles from "./fileWithAction.module.scss";
import clsx from "clsx";

import Clip from '@/assets/icons/clip.svg'
import Download from '@/assets/icons/download.svg'

type FileWithActionProps = {
	label: string; // Текст кнопки
	onClick?: () => void; // Обработчик клика
	disabled: boolean;
	color?: "blue" | "green"; // Состояние кнопки
};

const FileWithAction: React.FC<FileWithActionProps> = ({
  	label = "Скачать файл",
	onClick,
	disabled = false,
	color = "blue",
}) => {

	return (
		<button className={ clsx(styles.download, styles[color], disabled ? styles.disabled : null)} disabled={disabled}>
			<span className="icon"><Clip/></span>
			<span className="button-14-medium">{label}</span>
			<div
				className={clsx(styles.button, styles[color])}
				onClick={!disabled ? onClick : undefined}
			>
				<span className="icon"><Download/></span>

			</div>
		</button>
	);
};

export default FileWithAction;
