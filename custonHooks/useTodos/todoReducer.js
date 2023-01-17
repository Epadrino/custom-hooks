export const todoReducer = (initialState = [], action) => {
	switch (action.type) {
		//permite agregar un todo
		case '[TODO] Add Todo':
			return [...initialState, action.payload];

		//permite borrar un todo
		case '[TODO] Delete Todo':
			return initialState.filter((todo) => todo.id !== action.payload);

		//permite tachar un todo
		case '[TODO] Toggle Todo':
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					//id
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			});

		default:
			break;
	}
};
