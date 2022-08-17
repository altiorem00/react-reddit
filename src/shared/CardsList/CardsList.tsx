import React, { useContext } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { postsContext } from '../context/postsContext';

export function CardsList(): JSX.Element {
  const data = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {data.map((card) => <Card key={card.url} data={card} />)}
    </ul>
  );
}
