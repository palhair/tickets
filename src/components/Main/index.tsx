import { ReactElement } from 'react';
import styles from './Main.module.css';

type Props = {
	children: ReactElement;
};

export const Main = ({ children }: Props) => {
	return <main className={styles.main}>{children}</main>;
};
