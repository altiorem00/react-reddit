import React from 'react';
import styles from './cardDropdown.css';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { generateId } from '../../../../utils/react/generateRandomIndex';

interface ICardDropdownProps {
    button: React.ReactNode
}

const LIST = [
  { text: 'some' },
  { text: 'test' },
  { text: 'some' },
].map(generateId);

export function CardDropdown({ button }: ICardDropdownProps) {
  return (
    <div className={styles.container}>
      <Dropdown
        button={button}
        isOpen={false}
      >
        <GenericList list={LIST} />
      </Dropdown>
    </div>
  );
}
