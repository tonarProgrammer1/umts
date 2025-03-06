"use client"

import React, { useState } from "react";
import styles from "./textArea.module.scss";
import clsx from "clsx";


type TextAreaProps = {
	label?: string;
	placeholder?: string;
	disabled?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({
	label = "",
	placeholder = "Введите текст",
	disabled = false,
}) => {
  const [value, setValue] = useState('');

  return (
	<div className={styles.InputBlock}>
		{
			label ? (
				<label className="title-4" htmlFor={styles.input}>{label} {value.length}/500 </label>
			) : ("")
		}
		<textarea className={ clsx(styles.input, disabled ? styles.disabled : "", "button-14-regular" )}  maxLength={500}  disabled={disabled} value={value} onChange={(e)=>setValue(e.target.value)} placeholder={placeholder} id={styles.input} />

	</div>
  );
};

export default TextArea;
