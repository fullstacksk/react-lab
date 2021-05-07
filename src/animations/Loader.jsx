import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Loader = () => {
	const [ load, setLoad ] = useState(false);
	const loading = useSpring({
		from: { width: 0, background: 'lightgrey' },
		to: { width: load ? 300 : 0, background: 'green' },
		config: { duration: 3000 },
		height: 40,
		loop: load
	});
	const loadingNumber = useSpring({
		from: { number: 0 },
		to: { number: load ? 100 : 0 },
		config: { duration: 3000 },
		loop: load
	});
	return (
		<div
			style={{
				width: 300,
				background: 'lightblue',
				cursor: 'pointer',
				flex: '1 1'
			}}
			onClick={() => setLoad(!load)}
		>
			<animated.div style={loading}>
				<animated.div
					style={{
						padding: '10px',
						textAlign: 'center',
						width: 300,
						fontWeight: 'bold',
						...loadingNumber
					}}
				>
					{loadingNumber.number.interpolate((val) => Math.floor(val))}
				</animated.div>
			</animated.div>
		</div>
	);
};

export default Loader;
