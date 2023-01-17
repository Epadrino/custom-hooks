import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	//useState para generar acciones deacuardo a los resultados de getFetch
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	//funcion Fetch para manejar los url
	const getFetch = async () => {
		// cambio del estado mientras se recibe la resp de la data
		setState({
			...state,
			isLoading: true,
		});
		const resp = await fetch(url);
		const data = await resp.json();

		// cambio del estado cuando se recibe la data
		setState({
			data,
			isLoading: false,
			hasError: null,
		});
	};

	//useEffect para refrescar cuando se cambie el getFetch o url
	useEffect(() => {
		getFetch();
	}, [url]);

	//parametros necesarios para el funcionamiento del hook
	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
