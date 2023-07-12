import { TextAreaContainer, TextAreaInput } from "../TextArea/TextArea.styles";
import AddToListButton from '../AddToListButton/AddToListButton'
import { CreateNewTodoContainer } from './CreateNewTodo.styles'
import { useContext, useState, useRef, useEffect } from "react";
import { InputTextContainer } from "../InputText/InputText.styles";
import { TodoContext } from "../../contexts/todos.context";

const CreateNewTodo = () => {
    const inputRef = useRef();
    const descriptionRef = useRef();
    const { addTodoItem } = useContext(TodoContext);
    const [title, setTitle] = useState('Title');
    const [description, setDescription] = useState('Description');
    let todoId;

    const titleSetter = (event) => {
        setTitle(event.target.value)
        console.log({ title })
    }

    const handleInputClick = () => {
        if (title === 'Title') {
            setTitle('')
        }
    }

    /**
     * Handles the outside click event for the input field.
     *
     * @param {MouseEvent} event - The click event.
     * @returns {void}
     * The code snippet includes a condition to check 
     * if the clicked target is outside the title input field or 
     * the description textarea filed
     * (!inputRef.current.contains(event.target)) 
     * and if the input field's value is empty 
     * (inputRef.current.value === ''). 
     * If both conditions are met, 
     * the title is set back to "Title" using setTitle('Title').
     * Similarly, description field is handled
     */
    const handleOutsideClick = (event) => {

        if (!inputRef.current.contains(event.target)
            && inputRef.current.value === ''
        ) {
            setTitle('Title')
        }
        if (!descriptionRef.current.contains(event.target)
            && descriptionRef.current.value === ''
        ) {
            setDescription('Description')
        }
        // console.log(inputRef.current)
        // console.log('value: ', inputRef.current.value)
        // console.log('contains: ', inputRef.current.contains(event.target))
        // console.log(event.target)
    };

    const descriptionSetter = (event) => {
        setDescription(event.target.value)
        console.log(description)
    }

    const addTodo = () => {
        console.log({ title, description })

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
                // After adding a new item, clear the input fields and refresh the table
                setTitle('')
                setDescription('')
            })

        // add the todo to the todosArray context
        addTodoItem({ todoId, title, completed: false, description })
    }

    useEffect(() => {
        // Adds an event listener for the 'click' event on the entire document.
        document.addEventListener('click', handleOutsideClick);

        // Returns a cleanup function to remove the event listener when the component unmounts.
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [])

    return (
        <CreateNewTodoContainer>
            <h1>ToDo App</h1>
            <InputTextContainer>
                <input
                    required
                    type="text"
                    name="title"
                    autoComplete="off"
                    className="input"
                    ref={inputRef}
                    value={title}
                    onChange={titleSetter}
                    onClick={handleInputClick}
                />
            </InputTextContainer>
            <TextAreaContainer>
                <TextAreaInput
                    ref={descriptionRef}
                    required
                    type="text"
                    name="description"
                    id='description'
                    value={description}
                    autoComplete="off"
                    onChange={descriptionSetter}
                    onClick={() => setDescription('')}
                ></TextAreaInput>
            </TextAreaContainer>
            <AddToListButton addTodo={addTodo} />
        </CreateNewTodoContainer>
    )
}

export default CreateNewTodo;