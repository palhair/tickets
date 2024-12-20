import styles from './StopsInfo.module.css';
import plane from '../../assets/plane.png';

type Props = {
	stops: number;
};
export const StopsInfo = ({ stops }: Props) => {
	let stopTitle = '';
	if (stops == 0) {
		stopTitle = 'пересадок';
	} else if (stops == 1) {
		stopTitle = 'пересадка';
	} else {
		stopTitle = 'пересадки';
	}
	return (
		<div className={styles.container}>
			<div className={styles.stops}>
				{stops} {stopTitle}
			</div>
			<img
				className={styles.plane}
				src={plane}
			/>
		</div>
	);
};
