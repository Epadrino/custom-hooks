import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = () => {
		setCounter(counter + 1);
	};
	const decrement = () => {
		if (counter === 0) return;
		setCounter(counter - 1);
	};
	const increment2 = (value = 2) => {
		setCounter(counter + value);
	};
	const decrement2 = (value = 2) => {
		if (counter === 0) return;
		setCounter(counter - value);
	};
	const reset = () => {
		setCounter(initialValue);
	};
	return {
		counter,
		increment,
		decrement,
		increment2,
		decrement2,
		reset,
	};
};
