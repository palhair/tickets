import icon from '../../assets/airplane.png';
import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<img
				alt='logo'
				className={styles.logo}
				src={icon}
			/>
		</header>
	);
};
