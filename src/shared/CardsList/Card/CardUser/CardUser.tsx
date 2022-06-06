import React from 'react';
import styles from './carduser.css';

interface IPropsUser {
    link: string,
    avatar: string
}

export function CardUser({ ...props }: IPropsUser) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="avatar"
      />
      <a className={styles.username} href={props.link}>Дмитрий Гришин</a>
    </div>
  );
}
