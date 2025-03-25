"use client"

import { useState, useRef, useEffect } from "react";
import styles from './select.module.scss'
import clsx from "clsx";

import Vector from '@/assets/icons/rightVector.svg';

const options = [
  { id: 1, label: "По дате обновления", icon: <Vector /> },
  { id: 2, label: "По дате обновления", icon: <Vector /> },
  { id: 3, label: "По дате публикации", icon: <Vector /> },
  { id: 4, label: "По дате публикации", icon: <Vector /> },
  { id: 5, label: "По номеру", icon: <Vector /> },
  { id: 6, label: "По номеру", icon: <Vector /> },
  { id: 7, label: "По номеру", icon: <Vector /> },
  { id: 8, label: "По номеру", icon: <Vector /> },
  { id: 9, label: "По номеру", icon: <Vector /> },
  { id: 10, label: "По номеру", icon: <Vector /> },
];

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={ clsx(styles.index, isOpen ? styles.active : "" ) }
      >
        <span className="button-14-medium">{selected.label}</span>
		<Vector />
      </button>
        <div className={clsx(styles.block, isOpen ? styles.open : styles.closed)}>
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={styles.element}
            >
				{option.icon}
              	<span className="button-14-regular">{option.label}</span>
            </div>
          ))}
        </div>
    </div>
  );
}
