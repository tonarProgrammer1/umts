"use client";

import React, { useState } from "react";
import styles from "./blueprintCard.module.scss";
import Link from "next/link";
import Image from "next/image";

import GrayFlag from "@/assets/icons/grayFlag.svg";


import Placeholder from '@/assets/images/avatar.png'

type registerUserCardProps = {
    id:string;
    create:string;
    status:string;
    userName:string;
    userPost:string;
    userAvatar?:string;
};

const registerUserCard: React.FC<registerUserCardProps> = ({
	id,
    create,
    status,
    userName,
    userPost,
    userAvatar,
}) => {
	return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <p className={styles.id}>{id}</p>
                    <div className={styles.dateBlock}>
                        <GrayFlag/>

                        <p className={styles.date}>{create}</p>
                        <p className={styles.status}>{status}</p>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.userAvatar}><Image src={userAvatar || Placeholder} alt="avatar"/></div>
                        <div>
                            <p className={styles.userName}>{userName}</p>
                            <p className={styles.userPost}>{userPost}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button></button>

                    <div>

                    </div>
                </div>



            </div>
            <div className={styles.content}>
                <p>
                    Данный чертеж представляет собой деталь для механизма привода. Обратите внимание на следующие ключевые моменты:<br/>
                    <br/>
                    1. Материалы: Используйте сталь марки 45 для обеспечения необходимой прочности.<br/>
                    2. Допуски: Все размеры указаны с допусками, соответствующими стандарту ISO 2768-1 (общее).<br/>
                    3. Обработка: Необходима механическая обработка всех поверхностей, указанных в приложении.<br/>
                    <br/>
                    Игорь, пожалуйста, подтвердите возможность выполнения данных требований и сообщите о любых возможных проблемах или предложениях по улучшению. <span>(Ред. 17.01.2025 13.05)</span>
                </p>
            </div>
        </div>
    )
};

export default registerUserCard;
