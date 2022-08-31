import * as api from '../api';
export const readTodos = async ()=> {
	try {
		const {data} = await api.readTodos();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export const createTodo = async () => {
	try {
		const { data } = await api.createTodo();
		return data;
	} catch (error) {
		console.log(error);
	}
};
