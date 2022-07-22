import React from 'react';
import styles from './cardmenu.css';
import { CardDropdown } from '../CardDropdown/CardDropdown';
import { Icon } from '../../../Icon/Icon';

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <CardDropdown button={(
        <button className={styles.menuButton} type="button">
          <Icon name="menu" />
        </button>
        )}
      />
    </div>
  );
}
