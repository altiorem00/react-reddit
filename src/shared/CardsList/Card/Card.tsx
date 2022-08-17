import React from 'react';
import styles from './card.css';
import { CardUser } from './CardUser';
import { CardDate } from './CardDate';
import { CardMenu } from './CardMenu';
import { CardControls } from './CardControls';
import { IPostsData } from '../../../hooks/usePostsData';

interface ICardProps {
    data: IPostsData
}

export function Card({ data }: ICardProps): JSX.Element {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <CardUser name={data.author} />
          {data.created && <CardDate published={data.created} />}
        </div>
        <h2 className={styles.title}>
          <a href={data.url} target="_blank" className={styles.postLink} rel="noreferrer">{data.title}</a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img className={styles.previewImg} src={data.preview} alt="" />
      </div>
      <CardMenu />
      <CardControls />
    </li>
  );
}
