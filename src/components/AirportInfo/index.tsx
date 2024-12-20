import styles from './AirportInfo.module.css';
type Props = {
	id: string;
	name: string;
};

export const AirportInfo = ({ id, name }: Props) => {
	return (
		<p className={styles.text}>
			{id}, {name}
		</p>
	);
};
