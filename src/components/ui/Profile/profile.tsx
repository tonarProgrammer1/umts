"use client"

import React from "react";
import Image from "next/image";

import styles from "./profile.module.scss";
import clsx from "clsx";

import Vector from '@/assets/icons/downVectorBold.svg'
import Avatar from '@/assets/images/avatar.png'

type ProfileProps = {
	onClick?: () => void;
	fio: string;
	role: string;
};

const Profile: React.FC<ProfileProps> = ({
	onClick,
	fio = "Управление материально-технического снабжения",
	role = "20 января 2025  12:35",
}) => {
	return (
		<button
			className={clsx(styles.button)}
			onClick={onClick}
		>
			<div>
				<Image src={Avatar} height={40} width={40} alt="avatar" />
			</div>
			<div>
				<h2 className={styles.fio}>{fio}</h2>
				<p className={styles.role}>{role}</p>
			</div>

			<div>
				<Vector />
			</div>
		</button>
	);
};

export default Profile;
