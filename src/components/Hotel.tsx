import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

export const Hotel: React.FunctionComponent = () => {
	return (
		<>
			<h1 id={'hotel'} />
			<Card border={'light'} className={'transbox'}>
				<Card.Title className={'transbox--title'}>Hotel Information</Card.Title>
				<Card.Body className={'transbox--body'}>
					<h4>
						We have reserved a block of rooms with the Magnolia Omaha hotel
						available July 9th and July 10th. The hotel is 10 minutes from the
						airport and is situated downtown near the Old Market. Magnolia also
						provides a shuttle service to and from the Eppley Airfield (OMA).
					</h4>
					<br />
					<Row>
						<Col>
							<Button href={'https://book.passkey.com/e/50196984'}>
								Book Here
							</Button>
						</Col>
						<Col>
							<Button
								variant="outline-info"
								href={'https://magnoliahotels.com/omaha/'}
							>
								Hotel Info
							</Button>
						</Col>
					</Row>
				</Card.Body>
				<br />
			</Card>
		</>
	);
};
