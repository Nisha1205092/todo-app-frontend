import { TextAreaContainer, TextAreaInput } from "../TextArea/TextArea.styles";
import AddToListButton from '../AddToListButton/AddToListButton'
import { CreateNewTodoContainer } from './CreateNewTodo.styles'
import { useContext, useState, useRef, useEffect } from "react";
import { InputTextContainer } from "../InputText/InputText.styles";
import { TodoContext } from "../../contexts/todos.context";

const CreateNewTodo = () => {
    const descriptionRef = useRef();
    const { addTodoItem } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleSetter = (event) => {
        setTitle(event.target.value)
        // console.log({ title })
    }

    const handleInputClick = () => {
        if (title === 'Title') {
            setTitle('')
        }
    }

    const descriptionSetter = (event) => {
        setDescription(event.target.value)
        // console.log(description)
    }

    const addTodo = (e) => {
        e.preventDefault()
        // console.log({ title, description })

        // add the todo to the todosArray context
        addTodoItem({ title, completed: false, description })
        // After adding a new item, clear the input fields and refresh the table
        setTitle('')
        setDescription('')
    }

    return (
        <CreateNewTodoContainer>
            <h1>ToDo App</h1>
            <form action="" onSubmit={addTodo}>
                <InputTextContainer>
                    <input
                        required
                        type="text"
                        name="title"
                        autoComplete="off"
                        className="input"
                        placeholder={"Title"}
                        onChange={titleSetter}
                        onClick={handleInputClick}
                        value={title}
                    />
                </InputTextContainer>
                <TextAreaContainer>
                    <TextAreaInput
                        required
                        type="text"
                        name="description"
                        id='description'
                        placeholder={"Description"}
                        value={description}
                        autoComplete="off"
                        onChange={descriptionSetter}
                        onClick={() => setDescription('')}
                    ></TextAreaInput>
                </TextAreaContainer>
                <AddToListButton type="submit" />
            </form>
        </CreateNewTodoContainer>
    )
}

export default CreateNewTodo;