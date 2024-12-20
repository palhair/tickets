import { memo } from 'react';
import styles from './CheckBox.module.css';

type Props = {
	name: string;
	checked: boolean;
	onchange: (name: string) => void;
	resetAll?: (name: string) => void;
	label: string;
};

export const CheckBox = memo(({ name, checked, onchange, resetAll, label }: Props) => {
	return (
		<div className={styles.container}>
			<label className={styles.label}>
				<input
					type='checkbox'
					name={name}
					onChange={() => onchange(name)}
					checked={checked}
					className={styles.checkbox}
				/>
				{label}
			</label>

			{resetAll && (
				<button
					className={styles.button}
					onClick={() => resetAll(name)}
				>
					только
				</button>
			)}
		</div>
	);
});
