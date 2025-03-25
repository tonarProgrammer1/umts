import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";


import Styles from '@/styles/guest/index.module.scss';

import Banner from '@/assets/images/guest/banner.png';
import Button from "@/components/ui/Button/Button";
import Key from '@/assets/icons/key.svg';
import Plus from '@/assets/icons/plus.svg';

function AuthContent() {


	return (
		<div className={Styles.wrapper}>

			<Image
				src={Banner}
				width={440}
				height={676}
				alt="banner"
			/>

			<div className={Styles.block}>
				<h1 className={clsx(Styles.title, Styles.mt40)}>Регистрация</h1>

				<div className={Styles.mt22}>
					<Button href={"http://10.11.8.137:9101/redirect?name=mts"} icon={<Plus />} label="Новый поставщик" />
				</div>

				<h2 className={clsx(Styles.title)}>Вход с логином и паролем</h2>

				<div className={Styles.inputBlock}>
					<Button href={"http://10.11.8.137:9101/redirect?name=mts"} label="Войти" color="darkBlue" icon={ <Key />}/>
				</div>

				<div className={Styles.link}>
					<Link href="/" >Забыли пароль?</Link>
				</div>



			</div>
		</div>
	);
}

export default function Index() {
	return (
	  <Suspense fallback={<div>Loading...</div>}>
		<AuthContent />
	  </Suspense>
	);
}
