import { TodoPropsType, TodoType } from '../../types/types'
import './Todo.css'

export default function Todo({ data, setTodos }: TodoPropsType) {
	const isDoneToggle = () => {
		setTodos(prev => {
			const newTodos: Array<TodoType> = [];
			let selectedTodo: TodoType | null = null;

			for (let i = 0; i < prev.length; ++i) {
				if (prev[i].id === data.id) {
					selectedTodo = prev[i];
					selectedTodo.isDone = !selectedTodo.isDone;
				} else {
					newTodos.push(prev[i]);
				}
			}

			if (selectedTodo !== null) {
				if (selectedTodo?.isDone === true) {
					newTodos.push(selectedTodo);
				} else {
					newTodos.unshift(selectedTodo);
				}
			}

			return newTodos;
		});
	}
	const deleteThisTodo = () => {
		setTodos(prev => 
			prev.filter(item => item.id !== data.id)
		);
	}

	return (
		<div className={`todo ${ data.isDone ? 'todo_undone' : 'todo_done' }`}>
			<div className='todo__circleBox center'>
				<div className={`todo__circleBox__circle ${ data.isDone ? 'cyrcle_undone' : 'cyrcle_done'  }`}></div>
			</div>
			<div className='todo__box todo__box_info center'>
				<div>
					<h2 className='todo__box_info__title'>{ data.title }</h2>
					<p className='todo__box_info__status'>Status: { data.isDone ? 'done' : 'undone' }</p>
				</div>
			</div>
			<div className='todo__box todo__box_buttons'>
				<button className='todo__box_buttons__button' onClick={ isDoneToggle }>{ data.isDone ? 'undone': 'done' }</button>
				<button className='todo__box_buttons__button deleteButton' onClick={ deleteThisTodo }>delete</button>
			</div>
		</div>
	)
}
