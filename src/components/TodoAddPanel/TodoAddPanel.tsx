import React from 'react';
import './TodoAddPanel.css';
import { TodoAddPanelPropsType, TodoType } from '../../types/types';

export default function TodoAddPanel({ setTodos }: TodoAddPanelPropsType) {
	const [inputValue, setInputValue] = React.useState('');

	const addButton = () => {
		if (inputValue === '') { return; }
		
		setTodos(prev => {
			const newTodo: TodoType = {
				id: Math.random(),
				title: inputValue,
				isDone: false,
			};

			return [newTodo, ...prev];
		});
		setInputValue('');
	};

	return (
		<div className='controlPanel'>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='What you want to do ?'
				className='controlPanel__input'
			/>
			<button className='controlPanel__button' onClick={addButton}>add</button>
		</div>
	);
}