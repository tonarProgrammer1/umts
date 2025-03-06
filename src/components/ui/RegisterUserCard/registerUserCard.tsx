"use client";

import React from "react";
import styles from "./registerUserCard.module.scss";
import Image from "next/image";

import BlueClock from "@/assets/icons/blueClock.svg"
import OrgPlaceholder from "@/assets/images/orgPlaceholder.png"
import Link from "next/link";

type registerUserCardProps = {
    status?: string;
    orgImg?: string;
    organization: string;
    name: string;
    phone: string;
    address: string;

};

const registerUserCard: React.FC<registerUserCardProps> = ({
	orgImg,
	organization,
    name,
    phone,
    address,
}) => {
	return(
        <Link className={styles.block} href={"/"}>
            <div><BlueClock/></div>
            <div className={styles.orgBlock}>
                <Image src={ orgImg ? orgImg :  OrgPlaceholder } alt="Логотип организации"/>

                <p>{organization}</p>
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.phone}>{phone}</p>
            <p className={styles.address}>{address}</p>
        </Link>
    )
};

export default registerUserCard;
