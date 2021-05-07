import React from 'react';

import { BrowserRouter as BRouter, Switch, Route, Link } from 'react-router-dom';
import DragScroll from './dragScroll';
import InfiniteScroll from './infinteScroll';

const Router = () => {
	return (
		<BRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/infiniteScroll">Infinit Scroll</Link>
					</li>
					<li>
						<Link to="/dragScroll">Drag Scroll</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route to="/dragScroll" component={<DragScroll />} />
				<Route to="/infiniteScroll" component={<InfiniteScroll />} />
			</Switch>
		</BRouter>
	);
};

export default Router;
