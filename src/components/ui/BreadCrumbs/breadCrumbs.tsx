import React from 'react';
import Link from 'next/link';
import styles from './breadCrumbs.module.scss';

import Arrow from '@/assets/icons/rightArrow.svg'

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumbs}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={styles.breadcrumbItem}>
              {!isLast && item.href ? (
                <>
                    {
                        index != 0 ? (
                            <Arrow/>
                        ) : ("")
                    }

                    <Link href={item.href} className={styles.breadcrumbItemLink}>
                        <p className={styles.link}>{item.label}</p>
                    </Link>
                </>
              ) : (
                <>
                    {
                        index != 0 ? (
                            <Arrow/>
                        ) : ("")
                    }
                    <span className={styles.current}>{item.label}</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
