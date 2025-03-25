import React from "react";
import useTranslation from "next-translate/useTranslation";

import Breadcrumbs, {
	BreadcrumbItem,
} from "@/components/ui/BreadCrumbs/breadCrumbs";

import style from "@/styles/dashboard/documentation/detailPage.module.scss";

import MoreButtom from '@/components/ui/ContextMenu/contextMenu'
import Card from "@/components/ui/BlueprintCardDetail/blueprintCard"

const breadcrumbItems: BreadcrumbItem[] = [
	{ label: "Главная", href: "/dashboard" },
	{ label: "Чертежи", href: "/dashboard/documentation" },
	{ label: "Чертеж #00012" },
];

export default function Index() {
	useTranslation("common");

	return (
		<div>
			<Breadcrumbs items={breadcrumbItems} />

			<div className={style.header}>
				<h2 className={style.headerTitle}>#00012 Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами</h2>

                <div className={style.moreButtom}>
                    <MoreButtom/>
                </div>

			</div>

            <div className={style.content}>
                <Card id={"1"} create="11.01.2025 12:52" status="Опубликован" userName="Петрова А.М." userPost="Сотрудник УМТС" />
                <Card id={"2"} create="11.01.2025 12:52" status="Опубликован" userName="Петрова А.М." userPost="Сотрудник УМТС" />
                <Card id={"3"} create="11.01.2025 12:52" status="Опубликован" userName="Петрова А.М." userPost="Сотрудник УМТС" />
                <Card id={"4"} create="11.01.2025 12:52" status="Опубликован" userName="Петрова А.М." userPost="Сотрудник УМТС" />
            </div>

		</div>
	);
}
