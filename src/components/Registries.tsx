import React from 'react';
import { Card } from 'react-bootstrap';
import importScript from '../hooks';

export const Registries: React.FunctionComponent = () => {
	importScript('https://widget.zola.com/js/widget.js');
	return (
		<>
			<h1 id={'registries'}>
				<br />
			</h1>
			<div className={'transbox'}>
				<Card.Title className={'transbox--title'}>Registries</Card.Title>
				<Card border={'light'} className={'registry'}>
					<div className={'amazon'} />
					<h4>
						Our Amazon Wedding Registry <br />
					</h4>
					<a
						className="amazon-registry-embed"
						href="https://www.amazon.com/wedding/registry/2SA0BVB9FK35R?ref=wr_search_page_result_1"
						data-registry-key="matthewandaubri"
					>
						<button>
							SEE OUR REGISTRY
							<br />
						</button>
					</a>
					<p> </p>
				</Card>
				<Card border={'light'} className={'registry'}>
					<a
						className="zola-registry-embed"
						href="https://www.zola.com/registry/matthewandaubri/"
						data-registry-key="matthewandaubri"
					>
						Our Zola Wedding Registry
					</a>
				</Card>
			</div>
		</>
	);
};
