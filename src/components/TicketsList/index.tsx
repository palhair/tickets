import { ITicket } from '../../store/TicketListState';
import { Ticket } from '../Ticket';
import styles from './TicketList.module.css';

type Props = {
	list: ITicket[];
};
export const TicketsList = ({ list }: Props) => {
	return (
		<ul className={styles.list}>
			{list.map((ticket) => (
				<Ticket
					key={ticket.id}
					{...ticket}
				/>
			))}
		</ul>
	);
};
