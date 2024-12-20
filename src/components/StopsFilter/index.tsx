import { useCallback, useEffect, useState } from 'react';
import { CheckBox } from '../CheckBox';
import { useAppDispatch, useAppSelector } from '../../store';
import { pickOnlyCurrent, resetFilter, setFilter } from '../../store/TicketListState';
import styles from './StopsFilter.module.css';

export const StopsFilter = () => {
	const [all, setAll] = useState(false);
	const dispath = useAppDispatch();
	const stops = useAppSelector((state) => state.ticketListState.filterStatus);

	useEffect(() => {
		if (stops.every((item) => item)) {
			setAll(true);
		} else {
			setAll(false);
		}
	}, [stops]);

	const handleChangeStops = useCallback((name: string) => {
		if (name == 'all') {
			dispath(resetFilter());
			return;
		}
		dispath(setFilter(Number(name)));
	}, []);

	const handlePickAll = useCallback(() => {
		dispath(resetFilter());
	}, []);

	const handlerPickOnly = useCallback((name: string) => {
		dispath(pickOnlyCurrent(Number(name)));
	}, []);

	return (
		<div className={styles.container}>
			<CheckBox
				label='Все'
				name='all'
				checked={all}
				onchange={handlePickAll}
			/>
			<CheckBox
				label='Без пересадок'
				name='0'
				checked={stops[0]}
				onchange={handleChangeStops}
				resetAll={handlerPickOnly}
			/>

			<CheckBox
				label='1 пересадка'
				name='1'
				onchange={handleChangeStops}
				checked={stops[1]}
				resetAll={handlerPickOnly}
			/>
			<CheckBox
				label='2 пересадки'
				name='2'
				onchange={handleChangeStops}
				checked={stops[2]}
				resetAll={handlerPickOnly}
			/>
			<CheckBox
				label='3 пересадки'
				name='3'
				onchange={handleChangeStops}
				checked={stops[3]}
				resetAll={handlerPickOnly}
			/>
		</div>
	);
};
