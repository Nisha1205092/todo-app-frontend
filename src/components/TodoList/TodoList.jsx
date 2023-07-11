import CheckBox from '../CheckBox/CheckBox'
import TodoItem from '../TodoItem/TodoItem'
import DeleteButton from '../DeleteButton/DeleteButton'
import { TodoListItemContainer, TodoListContainer } from './TodoList.styles'

const TodoList = () => {
    return (
        <TodoListContainer>
            <h3>Todo List</h3>
            <TodoListItemContainer>
                <CheckBox />
                <TodoItem />
                <DeleteButton />
            </TodoListItemContainer>
        </TodoListContainer>
    )
}

export default TodoList;