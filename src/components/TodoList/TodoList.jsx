import CheckBox from '../CheckBox/CheckBox'
import TodoItem from '../TodoItem/TodoItem'
import DeleteButton from '../DeleteButton/DeleteButton'
import { TodoListItemContainer, TodoListContainer } from './TodoList.styles'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/todos.context'

const TodoList = () => {
    const { todosArray } = useContext(TodoContext);
    console.log({ todosArray })

    const randomKeyGenerator = () => {
        const key = Math.floor(Math.random() * 1000000);
        console.log({ key })
        return key;
    }
    return (
        <TodoListContainer>
            <h3>Todo List</h3>

            {/* 
            // this works
            {
                todosArray.length === 0 ?
                    'loading'
                    :

                    <>
                        <TodoListItemContainer key={todosArray[0]._id}>
                            <CheckBox status={todosArray[0].completed} />
                            <TodoItem
                                todoTitle={todosArray[0].title}
                                todoDescription={todosArray[0].description}
                            />
                            <DeleteButton />
                        </TodoListItemContainer>

                        <TodoListItemContainer key={todosArray[1]._id}>
                            <CheckBox status={todosArray[1].completed} />
                            <TodoItem
                                todoTitle={todosArray[1].title}
                                todoDescription={todosArray[1].description}
                            />
                            <DeleteButton />
                        </TodoListItemContainer>
                    </>
            } */}

            {
                // this doesn't work
                todosArray.length !== 0 ?
                    todosArray.map((todo) =>
                        <TodoListItemContainer key={randomKeyGenerator()}>
                            <CheckBox key={randomKeyGenerator()} status={todo.completed} />
                            <TodoItem
                                key={randomKeyGenerator()}
                                todoTitle={todo.title}
                                todoDescription={todo.description}
                            />
                            <DeleteButton />
                        </TodoListItemContainer>
                    )
                    : 'loading'
            }

        </TodoListContainer>
    )
}

export default TodoList;