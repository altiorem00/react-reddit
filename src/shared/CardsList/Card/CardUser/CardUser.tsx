import React from 'react';
import styles from './carduser.css';

interface IPropsUser {
    name?: string,
}

export function CardUser({ ...props }: IPropsUser) {
  return (
    <div className={styles.userLink}>
      <div className={styles.username}>{props.name}</div>
    </div>
  );
}
