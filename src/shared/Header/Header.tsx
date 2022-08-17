import React, { useContext } from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';
import { UserBlock } from '../UserBlock';
import { userContext } from '../context/userContext';

export function Header() {
  const { iconImg, name } = useContext(userContext);

  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <UserBlock avatarSrc={iconImg} username={name} />
    </header>
  );
}
