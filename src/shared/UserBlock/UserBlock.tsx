import React from 'react';
import styles from './UserBlock.css';
import { Icon } from '../Icon';

interface IUserBlock {
    avatarSrc?: string,
    username?: string,
}

export function UserBlock({ avatarSrc, username }: IUserBlock) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=SaNZsn5yWL8Uw46sXLafcg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="userAvatar" className={styles.avatarImage} />
          : <Icon name="anon" />}
      </div>
      <div className={styles.username}>
        {username || 'Аноним'}
      </div>
    </a>
  );
}
