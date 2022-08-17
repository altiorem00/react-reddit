import React from 'react';
import styles from './carddate.css';

interface IPropsDate {
    published: number,
}

export function CardDate({ ...props }: IPropsDate) {
  const currentPublished = Math.round((new Date().getTime() - props.published) / 1000 / 60 / 60);
  const publishedText = currentPublished > 24
    ? `${Math.round(currentPublished / 24)} д. назад` : `${currentPublished} ч. назад`;
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>Опубликовано</span>
      {publishedText}
    </span>
  );
}
