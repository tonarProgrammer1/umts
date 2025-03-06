"use client";
import React from "react";
import styles from "./checkbox.module.scss";
import clsx from "clsx";
import CheckMark from '@/assets/icons/checkMark.svg';

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void; // Обработчик изменения
  label?: string;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange, label, disabled = false }) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    // Останавливаем propagation события, чтобы клик не достиг родительского элемента
    event.stopPropagation();

    onChange?.(!checked); // Передаем обратное значение текущему состоянию
  };

  return (
    <label className={clsx(styles.checkbox, { [styles.disabled]: disabled })}>
      {/* Скрываем стандартный чекбокс */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleToggle(e)} // Обработчик клика
        disabled={disabled}
        className={styles.input}
      />
      {/* Кастомный чекбокс */}
      <span className={clsx(styles.customCheckbox, { [styles.checked]: checked })}>
        {checked && <CheckMark height="8" width="10" />} {/* Отображаем галочку, если checked === true */}
      </span>
      {label && <span className="description-13-regular">{label}</span>}
    </label>
  );
};

export default Checkbox;
