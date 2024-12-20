import { useEffect } from 'react';
import './App.css';
import { TicketsList } from './components/TicketsList';
import { useAppDispatch, useAppSelector } from './store';
import { fetchCurrncy, filterByStops } from './store/TicketListState';
import { StopsFilter } from './components/StopsFilter';
import { SelectCurrency } from './components/SelectCurrency';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { Main } from './components/Main';

function App() {
	const tickets = useAppSelector((state) => state.ticketListState.filteredTickets);
	const rates = useAppSelector((state) => state.ticketListState.rates);
	const stops = useAppSelector((state) => state.ticketListState.filterStatus);
	const dispath = useAppDispatch();

	useEffect(() => {
		dispath(filterByStops());
	}, [stops, rates]);

	useEffect(() => {
		dispath(fetchCurrncy());
	}, []);

	return (
		<div className='container'>
			<Header />
			<div className='temp'>
				<Main>
					<TicketsList list={tickets} />
				</Main>
				<Aside>
					<SelectCurrency />
					<StopsFilter />
				</Aside>
			</div>
		</div>
	);
}

export default App;
