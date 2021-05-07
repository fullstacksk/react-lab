
//@ts-check
/**
 * Drag and Scroll Implementation
 * @module DragScroll
 */
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring'
import boy from '../images/boy.jpg'
import girl from '../images/girl.jpg'
import './style.css';
/**
 * @component
 * @example
 * return (
 * 		<DragScroll />
 * )
 */
const DrgaScroll = () => {
	const style1 = useSpring({
		loop: {reverse:true},
		from: { x: 0 },
		to: { x: 120 },
		config:{duration:2000}
	})
	const style2 = useSpring({
		loop: {reverse:true},
		from: { x: 0 },
		to: { x: -120 },
		config:{duration:2000}
	})
	const imageStyle = {
		width: '100%',
		height:'100%'
	}
    
	useEffect(() => {
		/**
		 * @type {HTMLElement} - slider
		 */
        const slider = document.querySelector('.items');
		console.log('Slider : ', slider)
	let isDown = false,
		startX,
		scrollLeft;

	slider?.addEventListener('mousedown', (e) => {
		isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        console.log('Mouse Down : startX : ',startX);
	});

	slider?.addEventListener('mouseleave', () => {
        console.log('Mouse Leave');
		isDown = false;
    });
    
    slider?.addEventListener('mouseup', () => {
    console.log('Mouse Up');
    isDown = false;
    slider.classList.remove('active');
    });
        
    slider?.addEventListener('mousemove', (e) => {
    console.log('Mouse Move');
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX)*3;
        slider.scrollLeft = scrollLeft - walk;
    });
        
    }, [])

	return (
		<div className="container">
			<div className="items">
				{
					[1,2,3,4,5,6,7,8, 9,10, 11,12,13,14,15,16,17,18,19,20].map(( elem) =>
						<animated.div className="item item1" style={elem % 2 === 0 ? style1 : style2}>
							{
								elem % 2 === 0 ?
									<img src={boy} alt="" style={imageStyle} />
									:
									<img src={girl} alt="" style={imageStyle}/>
							}
						</animated.div>
					)
				}
				{/* <div className="item item2">2</div>
				<div className="item item3">3</div>
				<div className="item item4">4</div>
				<div className="item item5">5</div>
				<div className="item item6">6</div>
				<div className="item item7">7</div>
				<div className="item item8">8</div>
				<div className="item item9">9</div>
				<div className="item item10">10</div>
				<div className="item item11">11</div>
				<div className="item item12">12</div>
				<div className="item item13">13</div>
				<div className="item item14">14</div>
				<div className="item item15">15</div>
				<div className="item item16">16</div>
				<div className="item item17">17</div>
				<div className="item item18">18</div>
				<div className="item item19">19</div>
				<div className="item item20">20</div> */}
			</div>
		</div>
	);
};

export default DrgaScroll;
