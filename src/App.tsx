import React from 'react';
import { Container } from 'react-bootstrap';
import { BridalParty } from './components/BridalParty';
import { Navigation } from './components/Navigation';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';
import { HWM } from './components/HWM';
import { Registries } from './components/Registries';
import { RSVP } from './components/RSVP';
import { Hotel } from './components/Hotel';

const layout: JSX.Element[] = [
	<Title key={'title'} />,
	<Countdown key={'countdown'} />,
	<HWM key={'hwm'} />,
	<Registries key={'registries'} />,
	<RSVP key={'rsvp'} />,
	<Hotel key={'hotel'} />,
	<BridalParty key={'bridalparty'} />,
];

export const App: React.FunctionComponent = () => {
	return (
		<div className="parallax">
			<div className="App">
				<header>
					<Container>
						<Navigation />
					</Container>
					<h3 id={'home'}>
						.
						<br />
					</h3>
					<Container>{layout.map((el) => el)}</Container>
				</header>
			</div>
		</div>
	);
};
export default App;
