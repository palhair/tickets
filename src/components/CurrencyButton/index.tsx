import { memo } from 'react';
import { useAppSelector } from '../../store';
import { Currency } from '../../store/TicketListState';
import styles from './CurrencyButton.module.css';
import cn from 'classnames';

type Props = {
	title: Currency;
	onclick: (name: Currency) => void;
	position?: 'left' | 'middle' | 'right';
};
export const CurrencyButton = memo(({ title, onclick, position = 'middle' }: Props) => {
	const currency = useAppSelector((state) => state.ticketListState.currency);
	return (
		<button
			className={cn(
				styles.button,
				{
					[styles.left]: position == 'left',
					[styles.right]: position == 'right',
				},
				{
					[styles.selected]: currency == title,
				}
			)}
			onClick={() => onclick(title)}
		>
			{title}
		</button>
	);
});
