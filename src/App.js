import React from 'react';
import DragScroll from './dragScroll';
import InfiniteScroll from './infinteScroll';
import GeoTz from './geoTz';
import ReactSpring from './animations/ReactSpring';
import Loader from './animations/Loader';

const App = () => {
	return (
		<div>
			<InfiniteScroll />
			<ReactSpring />
			<DragScroll />
			<Loader />
			<GeoTz />
		</div>
	);
};

export default App;
