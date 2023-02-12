import { useState } from 'react';

// hook para guardar la informacion en el local storage
// la key es el nombre de como se guardo en el localStorage
// el initialValue es la info que va a mostrar si no hay nada en localStorage

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = windows.useLocalStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			setStoredValue(value);
			windows.useLocalStorage.setTtem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};
};
