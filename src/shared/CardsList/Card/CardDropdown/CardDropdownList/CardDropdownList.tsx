import React from 'react';
import styles from './cardDropdownList.css';
import { Icon } from '../../../../Icon/Icon';

export function CardDropdownList() {
  return (
    <>
      <ul className={styles.menuItemsList}>
        <li className={styles.menuItem}>
          <Icon name="comment" size={16} />
          Комментарии
        </li>
        <div className={styles.divider} />
        <li className={styles.menuItem}>
          <Icon name="share" size={16} />
          Поделиться
        </li>
        <div className={styles.divider} />
        <li className={styles.menuItem}>
          <Icon name="hide" size={16} />
          Скрыть
        </li>
        <div className={styles.divider} />
        <li className={styles.menuItem}>
          <Icon name="save" size={16} />
          Сохранить
        </li>
        <div className={styles.divider} />
        <li className={styles.menuItem}>
          <Icon name="danger" size={16} />
          Пожаловаться
        </li>
      </ul>
      <button className={styles.closeButton}>Закрыть</button>
    </>
  );
}
