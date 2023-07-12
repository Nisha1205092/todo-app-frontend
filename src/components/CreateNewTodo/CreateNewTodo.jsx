import { TextAreaContainer, TextAreaInput } from "../TextArea/TextArea.styles";
import AddToListButton from '../AddToListButton/AddToListButton'
import { CreateNewTodoContainer } from './CreateNewTodo.styles'
import { useState } from "react";
import { InputTextContainer } from "../InputText/InputText.styles";

const CreateNewTodo = () => {
    const [title, setTitle] = useState('Title');

    const titleSetter = (event) => {
        setTitle(event.target.value)
        console.log({ title })
    }

    const [description, setDescription] = useState('Description');

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
                // After adding a new item, clear the input fields and refresh the table
                setTitle('')
                setDescription('')
            })
    }
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
                    value={title}
                    onChange={titleSetter}
                />
            </InputTextContainer>
            <TextAreaContainer>
                <TextAreaInput
                    required
                    type="text"
                    name="description"
                    id='description'
                    value={description}
                    autoComplete="off"
                    onChange={descriptionSetter}
                ></TextAreaInput>
            </TextAreaContainer>
            <AddToListButton addTodo={addTodo} />
        </CreateNewTodoContainer>
    )
}

export default CreateNewTodo;