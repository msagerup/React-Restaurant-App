import React from 'react';

import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);

		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish (fish) {
		// update state
		const fishes = {...this.state.fishes};
		// add in new fish
		const timeStamp = Date.now();
		fishes[`fish-${timeStamp}`] = fish;
		// set state
		this.setState({fishes: fishes})
	}



	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header name="Magnus" tagline="Fresh seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>

		)
	}
}

export default App;