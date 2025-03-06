"use client";

import React from "react";
import styles from "./cardBlock.module.scss";
import Link from "next/link";

import ArrowDownButton from "@/components/ui/ArrowDownButton/arrowDownButton";
import RightVector from "@/assets/icons/rightVector.svg";

import RegisterUserCard from "@/components/ui/RegisterUserCard/registerUserCard";
import BlueprintCard from "@/components/ui/BlueprintCard/blueprintCard";

type BackButtonProps = {
	title: string;
	link: string;
	type: "users" | "blueprint";
	// users?: Array<1>;
};

const BackButton: React.FC<BackButtonProps> = ({ title, link, type }) => {
	const users = [
		{
			id: 1,
			organization: "ЗАО «ЭнергоСистемы+»",
			name: "Волкова Дарья Николаевна",
			phone: "+7 (912) 345-67-89",
			address: "Россия, г. Смоленск",
		},
		{
			id: 2,
			organization: "ЗАО «ЭнергоСистемы+»",
			name: "Иванов Иван Иванович",
			phone: "+7 (912) 987-65-43",
			address: "Россия, г. Москва",
		},
		{
			id: 3,
			organization: "ЗАО «ЭнергоСистемы+»",
			name: "Иванов Иван Иванович",
			phone: "+7 (912) 987-65-43",
			address: "Россия, г. Москва",
		},
		{
			id: 4,
			organization: "ЗАО «ЭнергоСистемы+»",
			name: "Иванов Иван Иванович",
			phone: "+7 (912) 987-65-43",
			address: "Россия, г. Москва",
		},
		{
			id: 5,
			organization: "ЗАО «ЭнергоСистемы+»",
			name: "Иванов Иван Иванович",
			phone: "+7 (912) 987-65-43",
			address: "Россия, г. Москва",
		},
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
	];

	return (
		<div className={styles.block}>
			<div className={styles.header}>
				<div className={styles.leftBlock}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.headerText}>
						(показаны 5 новых из 43)
					</p>
				</div>

				<div className={styles.rightBlock}>
					<Link href={link} className={styles.linkBlock}>
						<p className={styles.linkText}>Смотреть все </p>

						<RightVector className={styles.linkSvg} />
					</Link>

					<ArrowDownButton />
				</div>
			</div>

			<div className={styles.content}>
				{type == "users"
					? users.map((user) => (
							<RegisterUserCard
								key={user.id}
								organization={user.organization}
								name={user.name}
								phone={user.phone}
								address={user.address}
							/>
					  ))
					: blueprints.map((blueprint) => (
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
	);
};

export default BackButton;
