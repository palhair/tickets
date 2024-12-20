import styles from './StopsInfo.module.css';
import plane from '../../assets/plane.png';

type Props = {
	stops: number;
};

export const StopsInfo = ({ stops }: Props) => {
	const stopTitleMap: Record<number, string> = {
		0: 'пересадок',
		1: 'пересадка',
	};
	const stopTitle = stopTitleMap[stops] || 'пересадки';

	return (
		<div className={styles.container}>
			<div className={styles.stops}>
				{stops} {stopTitle}
			</div>
			<img
				alt='plane'
				className={styles.plane}
				src={plane}
			/>
		</div>
	);
};
