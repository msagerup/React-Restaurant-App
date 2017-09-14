import React from 'react';
import Header from './Header';

class App extends React.component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header />
				</div>
				<Order />
				<Inventory />
			</div>

		)
	}
}

export default App;