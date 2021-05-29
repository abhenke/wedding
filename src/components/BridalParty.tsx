import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const party: { [party: string]: string[] } = {
	bridesmaids: ['Faith Arnold', 'Moli Jones', 'Sneh Koul'],
	groomsmen: ['Clay Pinner', 'Tyler Miller', 'Greg Boardman'],
};

export const BridalParty: React.FunctionComponent = () => {
	return (
		<Card border={'light'} className={'transbox'}>
			<Card.Title className={'transbox--title'}>Bridal Party</Card.Title>
			<Card.Body className={'transbox--body'}>
				<Container>
					<Row>
						<Col sm={6}>
							<h4>MAID OF HONOR</h4>
							<h3>Leauna Henke</h3>
							<h4>BRIDESMAIDS</h4>
							{party['bridesmaids'].map((bm, index) => {
								return <h5 key={`bm-${index}`}>{bm}</h5>;
							})}
						</Col>
						<Col sm={6}>
							<h4>BEST MAN</h4>
							<h3>Alex Boardman</h3>
							<h4>GROOMSMEN</h4>
							{party['groomsmen'].map((gm, index) => {
								return <h5 key={`gm-${index}`}>{gm}</h5>;
							})}
						</Col>
					</Row>
				</Container>
			</Card.Body>
			<br />
		</Card>
	);
};
