import React from "react";

export
type TodoType = {
  id: number,
  title: string,
  isDone: boolean,
};

export 
type TodoPropsType = {
	data: TodoType,
	setTodos: React.Dispatch<React.SetStateAction<Array<TodoType>>>
}

export
type TodosPropsType = {
	todos: Array<TodoType>,
	setTodos: React.Dispatch<React.SetStateAction<Array<TodoType>>>
}

export 
type TodoAddPanelPropsType = {
	setTodos: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
};