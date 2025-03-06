"use client";

import React from "react";
import styles from "./blueprintCard.module.scss";
import Link from "next/link";
import Image from "next/image";

import Placeholder from '@/assets/images/avatar.png'

type registerUserCardProps = {
    id:number;
    title:string;
    initiator:string;
    create:string;
    update:string;
    userName:string;
    userPost:string;
    userAvatar:string;
    totalMessage:number;

};

const registerUserCard: React.FC<registerUserCardProps> = ({
	id,
	title,
    initiator,
    create,
    update,
    userName,
    userPost,
    userAvatar,
    totalMessage,
}) => {
	return(
        <Link key={id} className={styles.block} href={"/"}>
            <div className={styles.id}>{id}</div>
            <div className={styles.titleBlock}>
                <p className={styles.title}>{title}</p>

                <p className={styles.initiator}>{initiator}</p>
            </div>
            <p className={styles.date}>{create}</p>
            <p className={styles.date}>{update}</p>
            <div className={styles.user}>
                <div className={styles.userAvatar}><Image src={userAvatar || Placeholder} alt="avatar"/></div>
                <div>
                    <p className={styles.userName}>{userName}</p>
                    <p className={styles.userPost}>{userPost}</p>
                </div>
            </div>
            <p className={styles.totalMessage}>{totalMessage}</p>
        </Link>
    )
};

export default registerUserCard;
