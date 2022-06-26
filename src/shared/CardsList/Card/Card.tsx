import React from 'react';
import styles from './card.css';
import { CardUser } from './CardUser';
import { CardDate } from './CardDate';
import { CardMenu } from './CardMenu';
import { CardControls } from './CardControls';
import { CardDropdown } from './CardDropdown/CardDropdown';

export function Card(): JSX.Element {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <CardUser
            avatar="https://cdn.dribbble.com/users/677572/avatars/normal/cd94b72f04f84b0dcf1c1ee3f6bdf2b9.png?1634627780"
            link="#user-url"
          />
          <CardDate published="4 часа назад" />
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi atque cumque delectus dolor enim
            ex
          </a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/users/677572/screenshots/17636117/media/1ab9fc2d2401b409c50363a36861812b.png?compress=1&resize=400x300&vertical=top"
          alt=""
        />
      </div>
      <CardDropdown button={<CardMenu />} />
      <CardControls />
    </li>
  );
}
