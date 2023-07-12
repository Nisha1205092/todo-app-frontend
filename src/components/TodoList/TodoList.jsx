import CheckBox from '../CheckBox/CheckBox'
import TodoItem from '../TodoItem/TodoItem'
import DeleteButton from '../DeleteButton/DeleteButton'
import { TodoListItemContainer, TodoListContainer } from './TodoList.styles'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/todos.context'

const TodoList = () => {
    const { todosArray } = useContext(TodoContext);

    const randomKeyGenerator = () => {
        const key = Math.floor(Math.random() * 1000000);
        return key;
    }
    return (
        <TodoListContainer>
            <h3>Todo List</h3>
            {
                todosArray.length !== 0 ?
                    todosArray.map((todo) =>
                        <TodoListItemContainer key={randomKeyGenerator()}>
                            <CheckBox key={randomKeyGenerator()} status={todo.completed} todoId={todo._id} />
                            <TodoItem
                                todoId={todo._id}
                                key={randomKeyGenerator()}
                                todoTitle={todo.title}
                                todoDescription={todo.description}
                            />
                            <DeleteButton todoId={todo._id} />
                        </TodoListItemContainer>
                    )
                    : 'loading'
            }

        </TodoListContainer>
    )
}

export default TodoList;