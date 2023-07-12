import { TextAreaContainer, TextAreaInput } from "../TextArea/TextArea.styles";
import AddToListButton from '../AddToListButton/AddToListButton'
import { CreateNewTodoContainer } from './CreateNewTodo.styles'
import { useContext, useState } from "react";
import { InputTextContainer } from "../InputText/InputText.styles";
import { TodoContext } from "../../contexts/todos.context";

const CreateNewTodo = () => {
    const { addTodoItem } = useContext(TodoContext);
    const [title, setTitle] = useState('Title');
    const [description, setDescription] = useState('Description');
    let todoId;

    const titleSetter = (event) => {
        setTitle(event.target.value)
        console.log({ title })
    }


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