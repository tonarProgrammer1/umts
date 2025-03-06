import { useState, useRef, useEffect, JSX } from "react";
import styles from './selectMany.module.scss';
import clsx from "clsx";
import Checkbox from "../Checkbox/checkbox";
import Vector from '@/assets/icons/rightVector.svg';

const options = [
	{ id: 1, label: "По дате обновления", icon: <Vector /> },
	{ id: 2, label: "По дате обновления" },
	{ id: 3, label: "По дате публикации" },
	{ id: 4, label: "По дате публикации" },
	{ id: 5, label: "По номеру" },
	{ id: 6, label: "По номеру" },
	{ id: 7, label: "По номеру" },
	{ id: 8, label: "По номеру" },
	{ id: 9, label: "По номеру" },
  	{ id: 10, label: "По номеру" },
];

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{ id: number; label: string; icon?: JSX.Element }[]>([]);
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

  // Функция для обработки выбора опции
  const handleSelect = (option: { id: number; label: string; icon?: JSX.Element }) => {
    if (selected.some((item) => item.id === option.id)) {
      // Если уже выбрано, удаляем
      setSelected(selected.filter((item) => item.id !== option.id));
    } else {
      // Иначе добавляем
      setSelected([...selected, option]);
    }
  };

  return (
    <div ref={dropdownRef} className={styles.container}>
      {/* Отображаем выбранные элементы */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(styles.index, isOpen && styles.active)}
      >
        <span className="button-14-medium">
          {selected.length > 0
            ? `${selected.length} элемент${
                selected.length === 1 ? "" : selected.length >= 2 && selected.length <= 4 ? "а" : "ов"
              } выбрано`
            : "Выберите элементы"}
        </span>
        <Vector />
      </button>

      <div className={clsx(styles.block, isOpen ? styles.open : styles.closed)}>
        {options.map((option) => (
			<div key={option.id} className={styles.container}>
				<label
					className={clsx(styles.element, {
					[styles.selected]: selected.some((item) => item.id === option.id), // Добавляем класс для выбранного состояния
					})}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => e.key === "Enter" && handleSelect(option)}
				>
					<div className={styles.elementBlock}>
						{option.icon}
						<span className="button-14-regular">{option.label}</span>
					</div>
					{/* Чекбокс без активных обработчиков */}
					<Checkbox
						checked={selected.some((item) => item.id === option.id)} // Управляемое состояние
						onChange={() => handleSelect(option)} // Обработчик изменения
						disabled={false} // Можно добавить логику для отключения
					/>
				</label>
			</div>
        ))}
      </div>
    </div>
  );
}
