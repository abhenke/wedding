import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MD5 } from 'crypto-js';
import {
	Alert,
	Button,
	Card,
	Col,
	Form,
	FormCheck,
	Row,
} from 'react-bootstrap';

const scriptUrl =
	'https://script.google.com/macros/s/AKfycbwcef95KoLw6VQ_kZ00XQ7MAq8wFxlhDpNwUihHN6UqOgZj-ChcB-dxoecum9Q4U1bH/exec';

const serialize = function (obj: any) {
	const str = [];
	for (const p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	return str.join('&');
};

interface RSVPState {
	email: string;
	name: string;
	extras: number | string;
	transportation: boolean;
	inviteCode: string;
	alertMessage: JSX.Element | undefined;
	successMessage: JSX.Element | undefined;
}

export const RSVP: React.FunctionComponent = () => {
	const [rsvpState, setRSVPState] = useState({
		email: '',
		name: '',
		extras: '',
		transportation: false,
		inviteCode: '',
	} as RSVPState);

	const submitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = {
			email: rsvpState.email,
			name: rsvpState.name,
			transportation: rsvpState.transportation,
			invite_code: rsvpState.inviteCode.trim(),
			extras: rsvpState.extras,
		};

		if (
			MD5(data.invite_code).toString() !== '60891f1be47b7855578891a0f9d9f35d'
		) {
			const alertMessage = (
				<Alert variant={'info'}>
					<strong>Sorry!</strong> Your invite code is incorrect.
				</Alert>
			);
			setRSVPState((prevState: RSVPState) => {
				return { ...prevState, alertMessage };
			});
			return;
		}
		setRSVPState((prevState: RSVPState) => {
			return { ...prevState, alertMessage: undefined };
		});
		console.log(data);
		const request = {
			method: 'POST',
		};
		fetch(scriptUrl + '?' + serialize(data), request)
			.then((response: any) => {
				if (response.result == 'error') {
					setRSVPState((prevState: RSVPState) => {
						return { ...prevState, alertMessage: response.data.message };
					});
				} else {
					setRSVPState((prevState: RSVPState) => {
						return {
							...prevState,
							successMessage: <Alert variant={'success'}>Success!</Alert>,
						};
					});
				}
			})
			.catch((err: any) => {
				const alertMessage = (
					<Alert variant={'danger'}>
						<strong>Sorry!</strong> There is some issue with the server.
					</Alert>
				);
				setRSVPState((prevState: RSVPState) => {
					return { ...prevState, alertMessage };
				});
			});
	};

	return (
		<>
			<h1 id={'rsvp'}></h1>
			<Card border={'light'} className={'transbox'}>
				<Card.Title className={'transbox--title'}>RSVP</Card.Title>
				<div className={'center'}>
					<Form onSubmit={submitForm}>
						<Row>
							<Col className="col-md-6 col-sm-6">
								<Form.Group className="form-input-group">
									<i className="fa fa-envelope" />
									<Form.Control
										type="email"
										name="email"
										className=""
										placeholder="Your Email"
										required
										value={rsvpState.email}
										onChange={(e) =>
											setRSVPState((prevState: RSVPState) => {
												return { ...prevState, email: e.target.value };
											})
										}
									/>
								</Form.Group>
							</Col>
							<Col className="col-md-6 col-sm-6">
								<Form.Group className="form-input-group">
									<i className="fa fa-user" />
									<Form.Control
										name="name"
										className=""
										placeholder="Your Name"
										required
										value={rsvpState.name}
										onChange={(e) =>
											setRSVPState((prevState: RSVPState) => {
												return { ...prevState, name: e.target.value };
											})
										}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col className="col-md-6 col-sm-6">
								<Form.Group className="form-input-group">
									<i className="fa fa-users" />
									<Form.Control
										type="number"
										name="extras"
										className=""
										min="1"
										max="10"
										placeholder="Number of RSVPs"
										required
										value={rsvpState.extras}
										onChange={(e) =>
											setRSVPState((prevState: RSVPState) => {
												return {
													...prevState,
													extras: parseInt(e.target.value),
												};
											})
										}
									/>
								</Form.Group>
							</Col>
							<Col className="col-md-6 col-sm-6">
								<Form.Group className="form-input-group">
									<i className="fa fa-key" />
									<Form.Control
										name="invite_code"
										id="invite_code"
										className=""
										min="0"
										placeholder="Invite Code"
										required
										value={rsvpState.inviteCode}
										onChange={(e) =>
											setRSVPState((prevState: RSVPState) => {
												return { ...prevState, inviteCode: e.target.value };
											})
										}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group className="form-input-group">
									<i className="fa fa-users" />
									<FormCheck>
										<FormCheck.Input
											type="checkbox"
											name="transportation"
											onChange={(e: ChangeEvent<HTMLInputElement>) =>
												setRSVPState((prevState: RSVPState) => {
													return {
														...prevState,
														transportation: !prevState.transportation,
													};
												})
											}
										/>
										<div className="formLabel">
											<FormCheck.Label>
												Will you need transportation provided?
											</FormCheck.Label>
										</div>
									</FormCheck>
								</Form.Group>
							</Col>
						</Row>
						<Row className={'justify-content-center rsvp-alert'}>
							<div className={'fill'}>
								{rsvpState.alertMessage}
								{rsvpState.successMessage}
							</div>
						</Row>
						<Button
							disabled={!!rsvpState.successMessage}
							variant={'primary'}
							type={'submit'}
						>
							RSVP
						</Button>
					</Form>
				</div>
				<p> </p>
			</Card>
		</>
	);
};
