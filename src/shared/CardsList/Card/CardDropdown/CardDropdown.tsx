import React from 'react';
import styles from './cardDropdown.css';
import { Dropdown } from '../../../Dropdown';
import { CardDropdownList } from './CardDropdownList/CardDropdownList';

interface ICardDropdownProps {
    button: React.ReactNode
}

export function CardDropdown({ button }: ICardDropdownProps) {
  return (
    <div className={styles.container}>
      <Dropdown
        button={button}
        isOpen={false}
      >
        <div className={styles.dropdown}>
          <CardDropdownList />
        </div>
      </Dropdown>
    </div>
  );
}
