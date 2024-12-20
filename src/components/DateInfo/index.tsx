import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './DateInfo.module.css';

type Props = {
	date: string;
};

export const DateInfo = ({ date }: Props) => {
	const displayDate = format(new Date(date), 'dd LLL yyyy, eeeeee', {
		locale: ru,
	});
	return <p className={styles.date}>{displayDate}</p>;
};
