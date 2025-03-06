"use client"

import React, { useRef, useState } from "react";
import styles from "./fileUpload.module.scss";
import clsx from "clsx";

import Clip from '@/assets/icons/clip.svg'

interface FileUploadProps {
  disabled?: boolean
  onFileSelect?: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({  disabled = false, onFileSelect }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [fileName, setFileName] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		setFileName(file ? file.name : null);
		if (onFileSelect) {
			onFileSelect(file);
		}
	};

	const handleClick = () => {
		if (!disabled) {
		fileInputRef.current?.click();
		}
	};

	return (
		<div className={styles.uploadContainer}>
			<button
				className={clsx(styles.button, disabled ? styles.disabled : null)}
				onClick={handleClick}
				disabled={disabled}
			>
				<div className={styles.block}>
					<span className="icon"><Clip/></span>
					<span className="button-14-regular">Загрузить файл (до 1гб)</span>
				</div>
				<span className="text" >Форматы .dwg, .dxf, .pdf, .svg, .plt, .jpg, .png</span>
			</button>
			<input
				type="file"
				ref={fileInputRef}
				className={styles.fileInput}
				onChange={handleFileChange}
				disabled={disabled}
				accept=".dwg, .dxf, .pdf, .svg, .plt, .jpg, .png"
			/>
			{fileName && <p className={styles.fileName}>{fileName}</p>}
		</div>
	);
};

export default FileUpload;
