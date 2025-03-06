import React from "react";
import useTranslation from "next-translate/useTranslation";
import style from "@/styles/dashboard/footer.module.scss";

import VK from '@/assets/icons/socials/vk.svg'
import Rutube from '@/assets/icons/socials/rutube.svg'
import Telegram from '@/assets/icons/socials/telegram.svg'
import Link from "next/link";


const Header: React.FC = () => {
	useTranslation("common");

	return (
		<div className={style.container}>
            <div className={style.textBlock}>
                <div className={style.left}>
                    <p className={style.tonar}>© «Тонар», 2024</p>
                </div>
                <div className={style.right}>
                    <a href="#" className={style.text}>Официальный сайт предприятия</a>
                    <Link  href="#" className={style.text}>Политика в отношении персональных данных</Link>
                </div>
            </div>
            <div className={style.iconBlock}>
                <a target="_blank" href="https://vk.com/tonarinfo">
                    <VK className={style.icon}/>
                </a>
                <a target="_blank" href="https://rutube.ru/channel/26127832/">
                    <Rutube className={style.icon}/>
                </a>
                <a target="_blank" href="https://t.me/tonar_mz">
                    <Telegram className={style.icon}/>
                </a>
            </div>
		</div>
	);
};

export default Header;
