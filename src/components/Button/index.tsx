import cn from 'classnames';
import styles from './Button.module.css';
import { memo } from 'react';

type Props = {
	title: string;
	type?: 'primary' | 'secondary';
	onClick?: () => void;
};

export const Button = memo(({ title, type = 'primary', onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={cn(styles.button, {
				[styles.ptimary]: type == 'primary',
				[styles.secondary]: type == 'secondary',
			})}
		>
			{title}
		</button>
	);
});
