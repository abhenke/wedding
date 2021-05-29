import React from 'react';
import { Card } from 'react-bootstrap';

export const Title: React.FunctionComponent = () => {
	return (
		<Card border={'light'} className={'transbox'}>
			<Card.Title className={'transbox--title'}>Aubri & Matthew</Card.Title>
			<Card.Body className={'transbox--body'}>
				<h3>July 10, 2021 | Omaha, NE</h3>
			</Card.Body>
			<br />
		</Card>
	);
};
