import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './TimeInfo.module.css';

type Props = {
	time: string;
};
export const TimeInfo = ({ time }: Props) => {
	const [hour, minute] = time.split(':');
	const displayTime = format(new Date(2024, 0, 1, Number(hour), Number(minute)), 'HH:mm ', {
		locale: ru,
	});
	return <div className={styles.time}>{displayTime}</div>;
};
