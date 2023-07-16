import CheckBox from '../CheckBox/CheckBox'
import TodoItem from '../TodoItem/TodoItem'
import DeleteButton from '../DeleteButton/DeleteButton'
import { TodoListItemContainer, TodoListContainer } from './TodoList.styles'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/todos.context'

const TodoList = () => {
    const { todosArray } = useContext(TodoContext);

    // Custom sorting function
    const compareTodos = (a, b) => {
        // Compare completed status
        if (a.completed && !b.completed) {
            return 1; // 'a' comes after 'b'
        } else if (!a.completed && b.completed) {
            return -1; // 'a' comes before 'b'
        } else {
            return 0; // No sorting needed
        }
    }

    if (todosArray) {
        // Sort the todos array using the custom sorting function
        todosArray.sort(compareTodos);
    }

    const randomKeyGenerator = () => {
        const key = Math.floor(Math.random() * 1000000);
        return key;
    }
    return (
        <TodoListContainer>
            <h3>Todo List</h3>
            {
                todosArray?.length !== 0 ?
                    todosArray?.map((todo) =>
                        <TodoListItemContainer key={randomKeyGenerator()}>
                            <CheckBox key={randomKeyGenerator()} status={todo.completed} todoId={todo._id} />
                            <TodoItem
                                todoId={todo._id}
                                key={randomKeyGenerator()}
                                todoTitle={todo.title}
                                todoCompleted={todo.completed}
                                todoDescription={todo.description}
                            />
                            <DeleteButton todoId={todo._id} todoTitle={todo.title} />
                        </TodoListItemContainer>
                    )
                    : todosArray === null ? <h4>loading...</h4> : <h4>Empty!!</h4>

            }

        </TodoListContainer>
    )
}

export default TodoList;