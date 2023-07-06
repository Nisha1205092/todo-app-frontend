import React, { useState } from 'react';
import './TodoItem.styles.css'; // Import the CSS file
import EditButton from '../EditButton/EditButton';

const TodoItem = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState('Title');
    const [description, setDescription] = useState('description');

    const handleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handleSave = () => {
        // Perform save logic here
        setIsEditable(false);
    };

    return (
        <div className="todo-item">
            <div className='title-description-container'>
                {isEditable ? (
                    <input
                        type="text"
                        className="custom-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h3 className='todo-item-title'>{title}</h3>
                )}

                {isEditable ? (
                    <textarea
                        className="custom-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <p className='todo-item-description'>{description}</p>
                )}
            </div>

            <EditButton
                editButtonHandler={!isEditable ? handleEdit : handleSave}
                buttonText={isEditable ? 'Save' : 'Edit'}
            />
        </div>
    );
};

export default TodoItem;
