import { configureStore } from '@reduxjs/toolkit';

import ticketListReducer from './TicketListState';
import { useDispatch, useSelector } from 'react-redux';

export interface Root {
	tickets: ITicket[];
}
export interface ITicket {
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

export interface IStoreState {
	ticketsList: ITicket[];
}

const store = configureStore({
	reducer: {
		ticketListState: ticketListReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
