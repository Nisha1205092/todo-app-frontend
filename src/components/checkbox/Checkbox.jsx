import { TodoContext } from '../../contexts/todos.context';
import { CheckBoxContainer } from './CheckBox.styles';
import React, { useContext, useState } from 'react';

const CheckBox = ({ status, todoId }) => {
    const [isChecked, setIsChecked] = useState(status)
    const { todosArray, setTodosArray } = useContext(TodoContext);

    // useEffect(() => {
    //     console.log('isChecked: ', isChecked)
    // }, [isChecked])

    const toggler = (e) => {
        setIsChecked(e.target.checked)

        const updatedTodos = [...todosArray]; // Create a copy of the todosArray

        const index = updatedTodos.findIndex(todo => todo._id === todoId); // Find the index of the todo item
        console.log({ index })
        if (index !== -1) {
            updatedTodos[index] = {
                ...updatedTodos[index],
                completed: e.target.checked, // Modify the status property
            };

            setTodosArray(updatedTodos); // Update the todosArray state
            // update in DB
            fetch(`${import.meta.env.VITE_SERVER_URL}/todos/${todoId}`, {
                method: 'PUT',
                body: JSON.stringify({ completed: e.target.checked }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <CheckBoxContainer>
            <div className="cbx">
                <input id="cbx-12" type="checkbox" checked={isChecked} onChange={toggler} />
                <label htmlFor="cbx-12"></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
            </div>
        </CheckBoxContainer>

    )
}

export default CheckBox;
