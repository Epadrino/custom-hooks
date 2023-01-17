import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	// useState para cambiar el contenido de los inputs
	const [formState, setFormState] = useState(initialForm);

	//funcion para cambiar el contenido de los inputs
	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};
	//funcion para borrar el contenido de los inputs
	const onResetForm = () => {
		setFormState(initialForm);
	};

	//parametros necesarios para el funcionamiento del hook
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
