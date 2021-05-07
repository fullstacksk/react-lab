import React from 'react';
import { useSpring, animated } from 'react-spring';

const ReactSpring = () => {
	const props = useSpring({
		from: {
			opacity: 0,
			marginTop: -300
		},
		to: {
			opacity: 1,
			marginTop: 0
		},
		loop: false
	});
	return (
		<animated.div style={props}>
			<div style={style1}>
				<h1>Welcome to react spring</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat voluptatem nostrum
					consequuntur. Maiores omnis corporis in ea consectetur temporibus minima possimus perspiciatis
					repellendus fuga et exercitationem, vero itaque commodi nisi quidem cumque atque veritatis? Et
					doloribus ducimus eveniet veniam, ipsam architecto, blanditiis nihil magni itaque aperiam inventore
					error placeat.
				</p>
			</div>
		</animated.div>
	);
};

const style1 = {
	background: 'orange',
	color: '#fff',
	padding: '1rem 2rem'
};

export default ReactSpring;
