import React from 'react'
import Todo from '../Todo/Todo'
import { TodosPropsType } from '../../types/types'

export default function Todos({ todos, setTodos }: TodosPropsType) {
	return (
		<div>
			{ 
				todos.map(item =>
					<Todo 
						key={ item.id }
						data={ item }
						setTodos={ setTodos }
					/>
				)
			}
		</div>
	)
}