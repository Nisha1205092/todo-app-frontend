import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
    todosArray: [],
    setTodosArray: () => { },
    removeTodoItem: () => { },
    addTodoItem: () => { }
})

export const TodoContextProvider = ({ children }) => {
    const [todosArray, setTodosArray] = useState(null);

    const fetchAllTodos = async () => {
        const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/todos`, {
            method: 'GET'
        })
        const response = await data.json()
        const array = await response.todoArray;
        return array; // can be []
    }

    /**
     * handled the server not available case
    */
    useEffect(() => {
        // console.log('useEffect run')

        fetchAllTodos()
            .then(todos => setTodosArray(todos)) // can be []
            .catch(err => alert('Something went wrong!'))

    }, [])

    /**
     * handled the server not available case
    */
    const updateCheckbox = (todoId, checkedStatus) => {
        const updatedTodos = [...todosArray]; // Create a copy of the todosArray

        const index = updatedTodos.findIndex(todo => todo._id === todoId); // Find the index of the todo item
        // console.log({ index })
        if (index !== -1) {
            updatedTodos[index] = {
                ...updatedTodos[index],
                completed: checkedStatus, // Modify the status property
            };

            // update in DB
            fetch(`${import.meta.env.VITE_SERVER_URL}/todos/${todoId}`, {
                method: 'PUT',
                body: JSON.stringify({ completed: checkedStatus }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    // console.log(data);
                    setTodosArray(updatedTodos); // Update the todosArray state
                })
                .catch((err) => alert('Something went wrong! Please refresh!'))
        }
    }
    /** 
     * handled the server not available case
    */
    const removeTodoItem = (todoId) => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/todos/${todoId}`, {
            method: 'DELETE'
        })
            .then(() => {
                // console.log('delete successful')
                //no need to fetch from server
                const newTodosArray = todosArray.filter(todo => todo._id !== todoId)
                setTodosArray(newTodosArray)
            })
            .catch((err) => alert('Something went wrorng!'))
    }

    /**
     * handled the server not available case
    */
    const addTodoItem = ({ title, completed, description }) => {
        let todoId;

        fetch(`${import.meta.env.VITE_SERVER_URL}/todos`, {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
                completed: false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                todoId = data.id
                // no need to fetch from the server
                const newTodosArray = [...todosArray];
                newTodosArray.push({ _id: todoId, title, completed, description })
                setTodosArray(newTodosArray)
            })
            .catch((err) => alert('Something went wrong!'))
    }

    /**
     * handled the server not available case
    */
    const updateTodoItem = (todoId, title, description) => {
        // save in DB
        fetch(`${import.meta.env.VITE_SERVER_URL}/todos/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const newTodosArray = [...todosArray];
                const index = newTodosArray.findIndex(item => item._id === todoId);
                if (index !== -1) {
                    newTodosArray[index].title = title;
                    newTodosArray[index].description = description;
                    setTodosArray(newTodosArray)
                }
                // console.log('title and description updated')
            })
            .catch((err) => alert('Something went wrong! Please refresh!'))


    }

    const value = {
        todosArray,
        setTodosArray,
        removeTodoItem,
        addTodoItem,
        updateTodoItem,
        updateCheckbox
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


