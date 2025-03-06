import { useState, useRef, useEffect } from "react";
import styles from './contextMenu.module.scss'
import clsx from "clsx";
import Link from "next/link";

import VerticalMultiPoint from '@/assets/icons/verticalMultiPoint.svg';

const options = [
  { id: 1, label: "Информация о профиле", icon: <VerticalMultiPoint />, color: 'blue',  },
  { id: 2, label: "Удалить поставщика", icon: <VerticalMultiPoint />, color: 'red', },
];

export default function ContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
		<VerticalMultiPoint />
      </button>
        <div className={clsx(styles.block, isOpen ? styles.open : styles.closed)}>
          {options.map((option) => (
            <Link
				href={'/'}
              	key={option.id}
              	className={styles.element}
            >
				{option.icon}
              	<span className={clsx("button-14-medium", styles[option.color]  )}>{option.label}</span>
            </Link>
          ))}
        </div>
    </div>
  );
}
