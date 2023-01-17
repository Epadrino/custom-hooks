import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

//estado inicial de hook de todos
const initialState = [
	// {
	// 	id: new Date().getTime(),
	// 	description: 'Recolectar la piedra del alma',
	// 	done: false,
	// },
	// {
	// 	id: new Date().getTime() * 3,
	// 	description: 'Recolectar la piedra del tiempo',
	// 	done: false,
	// },
];

// funcion para guardar en el local Store
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
	//hook para cambiar el estado de los todos
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	// hook para guardar la informacion (todo) en el local storage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	// funsion para agregar los nuevos todo
	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};
		dispatch(action);
	};
	// funsion para eliminar un todo
	const handleDeleteTodo = (id) => {
		dispatch({
			type: '[TODO] Delete Todo',
			payload: id,
		});
	};

	// funsion para tachar el todo
	const handleToggleTodo = (id) => {
		dispatch({
			type: '[TODO] Toggle Todo',
			payload: id,
		});
	};

	return {
		todos,

		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => !todo.done).length,

		dispatch,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
