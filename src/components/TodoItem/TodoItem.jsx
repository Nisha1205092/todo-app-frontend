import React, { useState } from 'react';
import {
    CustomInput,
    TodoItemContainer,
    TodoItemDescription,
    CustomTextArea,
    TodoItemTitle,
    TitleDescriptionContainer
} from './TodoItem.styles';
import EditButton from '../EditButton/EditButton';

const TodoItem = ({ todoTitle, todoDescription }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState(todoTitle);
    const [description, setDescription] = useState(todoDescription);

    const handleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handleSave = () => {
        // Perform save logic here
        setIsEditable(false);
    };

    return (
        <TodoItemContainer>
            <TitleDescriptionContainer>
                {isEditable ? (
                    <CustomInput
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <TodoItemTitle>{title}</TodoItemTitle>
                )}

                {isEditable ? (
                    <CustomTextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <TodoItemDescription>{description}</TodoItemDescription>
                )}
            </TitleDescriptionContainer>

            <EditButton
                editButtonHandler={!isEditable ? handleEdit : handleSave}
                buttonText={isEditable ? 'Save' : 'Edit'}
            />
        </TodoItemContainer>
    );
};

export default TodoItem;
