import axios from 'axios';
const a = 20;
console.log(a);

const array = [ 12, 13, 14, 15 ];

const sum = array.reduce((acc, curr) => {
	return acc + curr;
});

console.log(array, sum);

function add(a, b) {
	return a + b;
}
console.log(add(11, 22));

const getUser = async (id) => {
	const res = await axios({
		method: 'GET',
		url: 'https://jsonplaceholder.typicode.com/todos/1'
	});
	console.log(res);
};

getUser();
