"use client"

import React from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";


type InputProps = {
	label?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
	label = "",
	placeholder = "Введите текст",
	onChange,
	disabled = false,
}) => {

  return (
	<div className={styles.InputBlock}>
		{
			label ? (
				<label className="title-6" htmlFor={styles.input}>{label}</label>
			) : ("")
		}
		<input className={ clsx(styles.input, disabled ? styles.disabled : "", "button-14-regular" )} onChange={onChange} disabled={disabled} placeholder={placeholder} id={styles.input} type="text" />

	</div>
  );
};

export default Input;
