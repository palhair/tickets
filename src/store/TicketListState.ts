import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from '../data/tickets.json';

const sortedList = data.tickets.sort((a, b) => a.price - b.price).map((ticket) => ({ ...ticket, id: nanoid() }));

export interface ITicket {
	id: string;
	origin: string;
	origin_name: string;
	destination: string;
	destination_name: string;
	departure_date: string;
	departure_time: string;
	arrival_date: string;
	arrival_time: string;
	carrier: string;
	stops: number;
	price: number;
}

export interface ITicketState {
	tickets: ITicket[];
	filteredTickets: ITicket[];
	filterStatus: boolean[];
	currency: Currency;
	rates: Record<Currency, number>;
}
export enum Currency {
	RUB = 'RUB',
	USD = 'USD',
	EUR = 'EUR',
}

const initialState: ITicketState = {
	tickets: sortedList,
	filteredTickets: sortedList,
	filterStatus: [true, false, false, false],
	currency: Currency.RUB,
	rates: {
		RUB: 1,
		USD: 0.09,
		EUR: 0.08,
	},
};

const ticketListSlice = createSlice({
	name: 'ticketList',
	initialState,
	reducers: {
		filterByStops: (state) => {
			if (state.filterStatus.every((item) => item)) {
				resetFilter();
				return;
			}
			const stops = state.filterStatus;
			state.filteredTickets = state.tickets
				.sort((a, b) => a.price - b.price)
				.filter((ticket) => {
					if (stops[0] && 0 == ticket.stops) {
						return true;
					}
					if (stops[1] && 1 == ticket.stops) {
						return true;
					}
					if (stops[2] && 2 == ticket.stops) {
						return true;
					}
					if (stops[3] && 3 == ticket.stops) {
						return true;
					}
					return false;
				});
		},

		resetFilter: (state) => {
			state.filterStatus = state.filterStatus.map(() => true);
			state.filteredTickets = state.tickets;
		},

		setFilter: (state, action: PayloadAction<number>) => {
			state.filterStatus[action.payload] = !state.filterStatus[action.payload];
		},

		pickOnlyCurrent: (state, action: PayloadAction<number>) => {
			state.filterStatus = state.filterStatus.map((_, index) => {
				return action.payload == index;
			});
		},

		changeCurrency: (state, action: PayloadAction<Currency>) => {
			let rate = state.rates[action.payload];
			if (action.payload == Currency.RUB) {
				rate = 1;
			}
			let currentRate: number;

			if (state.currency == Currency.USD) {
				currentRate = rate / state.rates[Currency.USD];
			} else if (state.currency == Currency.EUR) {
				currentRate = rate / state.rates[Currency.EUR];
			} else {
				currentRate = rate;
			}

			state.filteredTickets = state.filteredTickets.map((ticket) => {
				return { ...ticket, price: ticket.price * currentRate };
			});

			state.currency = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCurrecy.fulfilled, (state, action) => {
			if (action.payload) {
				state.rates = action.payload;
			}
		});
	},
});

export const { filterByStops, resetFilter, setFilter, pickOnlyCurrent, changeCurrency } = ticketListSlice.actions;
export default ticketListSlice.reducer;

export const fetchCurrecy = createAsyncThunk('ticketList/fetchStatus', async () => {
	const response = await fetch('https://www.cbr-xml-daily.ru/latest.js');
	const data = await response.json();
	return data.rates;
});
