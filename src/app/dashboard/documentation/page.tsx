import React from "react";
import useTranslation from "next-translate/useTranslation";

import Breadcrumbs, {
	BreadcrumbItem,
} from "@/components/ui/BreadCrumbs/breadCrumbs";
import Button from "@/components/ui/Button/Button";
import BlueprintCard from "@/components/ui/BlueprintCard/blueprintCard";
import Select from "@/components/ui/Select/select";

import style from "@/styles/dashboard/documentation/index.module.scss";

import Plus from "@/assets/icons/plus.svg";
import Loupe from "@/assets/icons/loupe.svg";
import Setting from "@/assets/icons/searchSetting.svg";

const breadcrumbItems: BreadcrumbItem[] = [
	{ label: "Главная", href: "/dashboard" },
	{ label: "Чертежи" },
];

const blueprints = [
	{
		id: 1,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 2,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 3,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 4,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 5,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 6,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 7,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 8,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
	{
		id: 9,
		title: "Чертеж крепления гидравлического цилиндра для прицепа и спецтехники с подробными размерами",
		initiator: "Петрова А.М., сотрудник УМТС",
		create: "11.01.2025 12:52",
		update: "17.01.2025 12:52",
		userName: "Петрова А.М.",
		userPost: "Сотрудник УМТС",
		userAvatar: "",
		totalMessage: 4,
	},
];

export default function Index() {
	useTranslation("common");

	return (
		<div>
			<Breadcrumbs items={breadcrumbItems} />

			<div className={style.header}>
				<h2 className={style.headerTitle}>Чертежи</h2>

				<div className={style.headerButtons}>
					<Button label={"Новый чертеж"} icon={<Plus />} />
				</div>
			</div>

			<div className={style.searchBlock}>
				<div className={style.loupe}>
					<Loupe />
				</div>

				<input
					type="text"
					placeholder="Быстрый поиск чертежа"
					className={style.search}
				/>

				<div className={style.searchAction}>
					<button className={style.moreSearch}>
						<Setting />

						<p>Расширенный поиск</p>
					</button>
					<div className={style.searchButton}>
						<Button color="darkBlue" label="Найти" />
					</div>
				</div>
			</div>

			<div className={style.filterBlock}>
				<Select />
				<Select />
				<Select />
			</div>

			<div className={style.table}>
				<div className={style.tableHeader}>

					<p className={style.columnName}>НОМЕР</p>
					<p>НАИМЕНОВАНИЕ И АВТОР</p>
					<p>ДАТА ПУБЛИКАЦИИ</p>
					<p>ОБНОВЛЕН</p>
					<p>АВТОР ОБНОВЛЕНИЯ</p>
					<p className={style.columnName}>ВЕРСИИ</p>

				</div>
				<div className={style.tableList}>
					{blueprints.map((blueprint) => (
						<BlueprintCard
							key={blueprint.id}
							id={blueprint.id}
							title={blueprint.title}
							initiator={blueprint.initiator}
							create={blueprint.create}
							update={blueprint.update}
							userName={blueprint.userName}
							userPost={blueprint.userPost}
							userAvatar={blueprint.userAvatar}
							totalMessage={blueprint.totalMessage}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
