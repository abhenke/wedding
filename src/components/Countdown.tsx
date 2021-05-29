import React from 'react';
import { Card } from 'react-bootstrap';

const DAY: number = 1000 * 3600 * 24;
const WEDDING_DATE: Date = new Date(2021, 6, 10);

const daysTill: number = Math.floor(
	(WEDDING_DATE.getTime() - new Date().getTime()) / DAY
);

export const Countdown: React.FunctionComponent = () => {
	return (
		<Card border={'light'} className={'main'}>
			<div className={'main--bg'} />
			<Card.Body>
				<Card.Text className={'main--text'}>
					<h3>{daysTill} days until the wedding.</h3>
				</Card.Text>
				<h1 id={'hwm'}></h1>
			</Card.Body>
		</Card>
	);
};
