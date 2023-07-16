import React, { useContext, useState } from 'react';
import {
    CustomInput,
    TodoItemContainer,
    TodoItemDescriptionCompleted,
    TodoItemDescriptionNotCompleted,
    CustomTextArea,
    TodoItemTitle,
    TitleDescriptionContainer
} from './TodoItem.styles';
import EditButton from '../EditButton/EditButton';
import { TodoContext } from '../../contexts/todos.context';

const TodoItem = ({ todoId, todoTitle, todoDescription, todoCompleted }) => {
    const { updateTodoItem } = useContext(TodoContext);

    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState(todoTitle);
    const [description, setDescription] = useState(todoDescription);
    const [isEdited, setIsEdited] = useState(false); // used to check if title/description is even updated or not

    const handleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handleSave = () => {
        // Perform save logic here
        setIsEditable(false);
        // console.log({ title, description })

        if (!isEdited) {
            // didn't edit title or description
            return;
        }
        // reset the value
        setIsEdited(false);
        //call function from context api
        updateTodoItem(todoId, title, description)
    };

    return (
        <TodoItemContainer>
            <TitleDescriptionContainer>
                {
                    isEditable ?
                        (
                            <CustomInput
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setIsEdited(true);
                                }
                                }
                            />
                        )
                        :
                        (
                            <TodoItemTitle $completed={todoCompleted}>{title}</TodoItemTitle>
                        )
                }

                {
                    isEditable ?
                        (
                            <CustomTextArea
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    setIsEdited(true);
                                }}
                            />
                        )
                        :
                        (
                            todoCompleted ? <TodoItemDescriptionCompleted>{description}</TodoItemDescriptionCompleted>
                                : <TodoItemDescriptionNotCompleted>{description}</TodoItemDescriptionNotCompleted>
                            // <TodoItemDescription $completed={todoCompleted}>{description}</TodoItemDescription>
                        )
                }
            </TitleDescriptionContainer>

            <EditButton
                editButtonHandler={!isEditable ? handleEdit : handleSave}
                showSaveIcon={isEditable}
            />
        </TodoItemContainer>
    );
};

export default TodoItem;
