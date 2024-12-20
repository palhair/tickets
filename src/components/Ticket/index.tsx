import { useAppSelector } from '../../store';
import { Currency } from '../../store/TicketListState';
import { Button } from '../Button';
import styles from './Ticket.module.css';
import logo from './../../assets/logo.png';
import { DateInfo } from '../DateInfo';
import { TimeInfo } from '../TimeInfo';
import { AirportInfo } from '../AirportInfo';
import { StopsInfo } from '../StopsInfo';

interface Props {
	origin: string;
	origin_name: string;
	destination: string;
	destination_name: string;
	departure_date: string;
	departure_time: string;
	arrival_date: string;
	arrival_time: string;
	stops: number;
	price: number;
}

const currncyIcon: Record<Currency, '₽' | '$' | '€'> = {
	RUB: '₽',
	USD: '$',
	EUR: '€',
};
export const Ticket = ({
	origin,
	origin_name,
	destination,
	destination_name,
	departure_date,
	departure_time,
	arrival_date,
	arrival_time,
	stops,
	price,
}: Props) => {
	const currency = useAppSelector((state) => state.ticketListState.currency);

	return (
		<li className={styles.ticket}>
			<div className={styles.salesblock}>
				<img
					className={styles.image}
					src={logo}
				/>
				<Button title={`Купить\nза ${Math.round(price)}${currncyIcon[currency]}`} />
			</div>

			<div className={styles.info}>
				<div className={styles.row}>
					<TimeInfo time={departure_time} />
					<StopsInfo stops={stops} />
					<TimeInfo time={arrival_time} />
				</div>

				<div className={styles.row}>
					<div className={styles.airport}>
						<AirportInfo
							id={origin}
							name={origin_name}
						/>
						<DateInfo date={departure_date} />
					</div>
					<div className={styles.airport}>
						<AirportInfo
							id={destination}
							name={destination_name}
						/>
						<DateInfo date={arrival_date} />
					</div>
				</div>
			</div>
		</li>
	);
};
