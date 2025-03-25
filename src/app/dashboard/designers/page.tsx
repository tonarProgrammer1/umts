import React from "react";
import useTranslation from "next-translate/useTranslation";

import Breadcrumbs, {
	BreadcrumbItem,
} from "@/components/ui/BreadCrumbs/breadCrumbs";
import Button from "@/components/ui/Button/Button";
import DesignerCard from "@/components/ui/designerCard/designerCard";
import Select from "@/components/ui/Select/select";

import style from "@/styles/dashboard/designers/index.module.scss";

import Loupe from "@/assets/icons/loupe.svg";

const breadcrumbItems: BreadcrumbItem[] = [
	{ label: "Главная", href: "/dashboard" },
	{ label: "Конструкторы" },
];

const blueprints = [
	{
		avatar: "",
		fio: "Захарова Оксана Васильевна",
		post: "Главный конструктор",
		phone: "+7 (912) 345-67-89",
		tabel: "2456",
	},
	{
		avatar: "",
		fio: "Чернов Игорь Владимирович",
		post: "Конструктор I категории",
		phone: "+7 (912) 456-78-90",
		tabel: "2352",
	},
	{
		avatar: "",
		fio: "Лукина Анжелика Сергеевна",
		post: "Конструктор I категории",
		phone: "+7 (920) 357-91-08",
		tabel: "5453",
	}
];

export default function Index() {
	useTranslation("common");

	return (
		<div>
			<Breadcrumbs items={breadcrumbItems} />

			<div className={style.header}>
				<h2 className={style.headerTitle}>Конструкторы</h2>

			</div>

			<div className={style.searchBlock}>
				<div className={style.loupe}>
					<Loupe />
				</div>

				<input
					type="text"
					placeholder="Быстрый поиск по ФИО, нормеру телефона, табельному номеру, должности"
					className={style.search}
				/>

				<div className={style.searchAction}>
					<div className={style.searchButton}>
						<Button color="darkBlue" label="Найти" />
					</div>
				</div>
			</div>

			<div className={style.filterBlock}>
				<Select />
				<Select />
			</div>

			<div className={style.table}>
				<div className={style.tableHeader}>

					<p>ФИО СОТРУДНИКА</p>
					<p>ДОЛЖНОСТЬ</p>
					<p>НОМЕР ТЕЛЕФОНА</p>
					<p className={style.columnName}>ТАБЕЛЬНЫЙ НОМЕР</p>

				</div>
				<div className={style.tableList}>
					{blueprints.map((blueprint) => (
						<DesignerCard
							key={blueprint.tabel}
							tabel={blueprint.tabel}
							fio={blueprint.fio}
							post={blueprint.post}
							phone={blueprint.phone}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
