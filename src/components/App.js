import React from 'react';

import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

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

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		})



	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header name="Magnus" tagline="Fresh seafood Market"/>
				
					<ul className="list-of-fishes">
						{
							Object
							.keys(this.state.fishes)
							.map(key => <Fish key={key} details = {this.state.fishes[key]} />)


						}
						

					</ul>	
						

				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>

		)
	}
}

export default App;