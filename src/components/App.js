import React from 'react';

import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header name="Magnus" tagline="Fresh seafood Market"/>
				</div>
				<Order />
				<Inventory />
			</div>

		)
	}
}

export default App;