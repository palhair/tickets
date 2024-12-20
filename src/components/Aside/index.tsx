import { ReactElement } from 'react';

import styles from './Aside.module.css';
interface Props {
	children?: ReactElement[];
}

export const Aside = ({ children }: Props) => {
	return <aside className={styles.aside}>{children}</aside>;
};
