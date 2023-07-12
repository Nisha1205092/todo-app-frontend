import { createContext, useState, useEffect } from "react";

const defaultTodo = [{
    title: 'Title',
    description: 'Description',
    completed: false
}]
export const TodoContext = createContext(defaultTodo)

export const TodoContextProvider = ({ children }) => {
    const [todosArray, setTodosArray] = useState([]);

    useEffect(() => {
        console.log('useEffect run')
        const fetchAllTodos = async () => {
            const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/todos`, {
                method: 'GET'
            })
            const response = await data.json()
            return await response.todoArray;
        }
        fetchAllTodos().then(todos => setTodosArray(todos));

    }, [])

    const value = { todosArray, setTodosArray }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


