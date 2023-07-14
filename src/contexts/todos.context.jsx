import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
    showDeleteDialog: false,
    setShowDeleteDialog: () => { },
    todosArray: [],
    setTodosArray: () => { },
    removeTodoItem: () => { },
    addTodoItem: () => { }
})

export const TodoContextProvider = ({ children }) => {
    const [todosArray, setTodosArray] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const fetchAllTodos = async () => {
        const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/todos`, {
            method: 'GET'
        })
        const response = await data.json()
        const array = await response.todoArray;
        if (array) {
            return array
        }
        return [];
    }

    useEffect(() => {
        console.log('useEffect run')

        fetchAllTodos()
            .then(todos => setTodosArray(todos));

    }, [])

    const removeTodoItem = (todoId) => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/todos/${todoId}`, {
            method: 'DELETE'
        })
            .then(() => console.log('delete successful'))
        //no need to fetch from server
        const newTodosArray = todosArray.filter(todo => todo._id !== todoId)
        setTodosArray(newTodosArray)
    }

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
                console.log(data)
                todoId = data.id
            })

        // no need to fetch from the server
        const newTodosArray = [...todosArray];
        newTodosArray.push({ todoId, title, completed, description })
        setTodosArray(newTodosArray)
    }

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
            .then(data => console.log(data))
            .then(() => console.log('title and description updated'))
            .catch((err) => console.log(err))
        // // fetch from the server
        // fetchAllTodos()
        //     .then(todos => setTodosArray(todos));
        const newTodosArray = [...todosArray];
        const index = newTodosArray.findIndex(item => item._id === todoId);
        if (index !== -1) {
            newTodosArray[index].title = title;
            newTodosArray[index].description = description;
            setTodosArray(newTodosArray)
        }
    }

    const value = {
        showDeleteDialog,
        setShowDeleteDialog,
        todosArray,
        setTodosArray,
        removeTodoItem,
        addTodoItem,
        updateTodoItem
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


