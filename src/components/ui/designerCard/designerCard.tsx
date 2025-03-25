"use client";

import React from "react";
import styles from "./designerCard.module.scss";
import Link from "next/link";
import Image from "next/image";

import Placeholder from '@/assets/images/avatar.png'

type registerUserCardProps = {
    avatar?: string;
	fio: string;
    post: string;
    phone: string;
    tabel: string;
};

const registerUserCard: React.FC<registerUserCardProps> = ({
	avatar,
	fio,
    post,
    phone,
    tabel,
}) => {
	return(
        <Link key={tabel} className={styles.block} href={"/"}>
            <div className={styles.user}>
                <div className={styles.userAvatar}><Image src={avatar || Placeholder} alt="avatar"/></div>
                <p className={styles.userName}>{fio}</p>
            </div>
            <p className={styles.grayText}>{post}</p>
            <p className={styles.grayText}>{phone}</p>
            <p className={styles.tabel}>{tabel}</p>
        </Link>
    )
};

export default registerUserCard;
