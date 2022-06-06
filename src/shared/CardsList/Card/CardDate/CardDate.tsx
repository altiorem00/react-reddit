import React from 'react';
import styles from './carddate.css';

interface IPropsDate {
    published: string,
}

export function CardDate({ ...props }: IPropsDate) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>Опубликовано</span>
      {props.published}
    </span>
  );
}
