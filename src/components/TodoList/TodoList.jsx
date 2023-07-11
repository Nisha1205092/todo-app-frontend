import CheckBox from '../CheckBox/CheckBox'
import TodoItem from '../TodoItem/TodoItem'
import DeleteButton from '../DeleteButton/DeleteButton'
import { TodoListItemContainer } from './TodoList.styles'

const TodoList = () => {
    return (
        <div>
            <h3>Todo List</h3>
            <TodoListItemContainer>
                <CheckBox />
                <TodoItem />
                <DeleteButton />
            </TodoListItemContainer>
        </div>
    )
}

export default TodoList;