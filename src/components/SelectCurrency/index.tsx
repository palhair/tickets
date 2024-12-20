import { changeCurrency, Currency } from '../../store/TicketListState';
import { useAppDispatch } from '../../store';
import { CurrencyButton } from '../CurrencyButton';
import { useCallback } from 'react';

export const SelectCurrency = () => {
	const dispatch = useAppDispatch();

	const handleChangeCurrency = useCallback(
		(name: Currency) => {
			dispatch(changeCurrency(name));
		},
		[dispatch]
	);

	return (
		<>
			<div>
				<CurrencyButton
					position='left'
					onclick={handleChangeCurrency}
					title={Currency.RUB}
				/>
				<CurrencyButton
					onclick={handleChangeCurrency}
					title={Currency.USD}
				/>
				<CurrencyButton
					position='right'
					onclick={handleChangeCurrency}
					title={Currency.EUR}
				/>
			</div>
		</>
	);
};
