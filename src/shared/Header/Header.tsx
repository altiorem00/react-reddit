import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import { UserBlock } from '../UserBlock';
import { useToken } from '../../hooks/useToken';

interface IUserData {
    name?: string,
    iconImg?: string
}

export function Header() {
  const [token] = useToken();
  const [data, setData] = useState<IUserData>();
  useEffect(() => {
    console.log(`bearer ${token}`);
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` },
    })
      .then((res) => {
        const userData = res.data;
        setData({ name: userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log);
  }, [token]);
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <UserBlock avatarSrc={data?.iconImg} username={data?.name} />
    </header>
  );
}
