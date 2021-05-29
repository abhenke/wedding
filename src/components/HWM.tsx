import React from 'react';
import { Card } from 'react-bootstrap';

export const HWM: React.FunctionComponent = () => {
	return (
		<>
			<h1 id={'hwm'} />
			<Card border={'light'} className={'transbox'}>
				<Card.Title className={'transbox--title'}>How We Met</Card.Title>
				<Card.Body className={'transbox--body'}>
					<h3>
						During the summer of 2017 we interned together at Gallup in Omaha,
						Nebraska doing software development.
						{/*After Matt moved to
										Omaha to work full-time for Gallup he asked Aubri to watch
										his cat, Mr.Kitty, while he was visiting family for the holidays.*/}
					</h3>
				</Card.Body>
				<br />
			</Card>
		</>
	);
};
