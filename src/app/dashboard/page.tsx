import React from "react";
import useTranslation from "next-translate/useTranslation";

import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/BreadCrumbs/breadCrumbs";
import Button from "@/components/ui/Button/Button";
import CardBlock from '@/components/dashboard/cardBlock/cardBlock';

import style from '@/styles/dashboard/dashboard.module.scss'

import Plus from '@/assets/icons/plus.svg'

const breadcrumbItems: BreadcrumbItem[] = [
	{ label: "Главная" },
];

export default function Index() {
	useTranslation("common");

	return (
		<div>
			<Breadcrumbs items={breadcrumbItems} />

			<div className={style.header}>
				<h2 className={style.headerTitle}>Здравствуйте, Анна!</h2>

				<div className={style.headerButtons}>
					<Button label={"Новый документ"} icon={<Plus/>} />
					<Button label={"Новый чертеж"} icon={<Plus/>} />
				</div>
			</div>



			<CardBlock title="Запросы на регистрацию" link="#" type="users"/>
			<CardBlock title="Обновленные чертежи" link="#" type="blueprint"/>
			<CardBlock title="Обновленные документы" link="#" type="blueprint"/>


		</div>
	);
}
