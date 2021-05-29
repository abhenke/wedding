import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const Navigation: React.FunctionComponent = () => {
	return (
		<Navbar collapseOnSelect fixed="top" expand="sm" bg="light">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mx-auto">
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#hwm">How We Met</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#registries">Registries</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#rsvp">RSVP</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#hotel">Hotel Info</Nav.Link>
					</Nav>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
