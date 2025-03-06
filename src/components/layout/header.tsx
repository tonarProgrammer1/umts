import React from "react";
import useTranslation from "next-translate/useTranslation";
import style from "@/styles/dashboard/header.module.scss";

import UserTypeBlock from "../ui/UserTypeBlock/userTypeBlock";
import Profile from "../ui/Profile/profile";

const Header: React.FC = () => {
	useTranslation("common");

	return (
		<div className={style.container}>
			<div className={style.left}>
				<UserTypeBlock />
			</div>

			<div className={style.right}>
				<Profile fio={"Петрова Анна Максимовна"} role={"Сотрудник УМТС"} />
			</div>
		</div>
	);
};

export default Header;
