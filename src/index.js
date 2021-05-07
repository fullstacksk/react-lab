//@ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
/**
 * @file index.js is the root file to explore the surce code for this App
 * @author Shailendra
 * @see <a href="http://linkbook.in">Linkbook.in</a>
 */

/**
 * My Name
 * @type {String}
 */

const name = 'Shailendra';
/**
 * Array of Marks
 * @type {Array<number>}
 */

const marks = [ 83, 84, 85, 23 ];

/**
 * 
 * @param {number} n1 - Number One 
 * @param {number} n2 - Mumber Two
 * @returns {number}
 */

const addTwoNums = (n1, n2) => {
	return n1 + n2;
};

/**
 * @typedef {Object}  Student - Student Type
 * @property {string} id -  Student Id
 * @property {string} name - Student Namae
 * @property {number} [age] - Student Age (optional)
 * @property {number}  phone - Student Phone Number
 */

/**
 * @type {Student}
 */

const student = {
	id: '123rew',
	name: 'Shailendra',
	phone: 1234345656
};

/**
 * Class to create a Person
 */
class Person {
	/**
	 * 
	 * @param {Object} personInfo - Person's Information
	 */
	constructor(personInfo) {
		/**
		 * @property {string} name - Person's Name
		 */
		this.name = personInfo.nmae;
		/**
		 * @property {number} age - Person's age
		 */
		this.age = personInfo.age;
	}

	/**
	 * @property {Function} greet - Function to greet a Person
	 */
	greet() {
		console.log(`Hello, I am ${this.name} and I am ${this.age}`);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
