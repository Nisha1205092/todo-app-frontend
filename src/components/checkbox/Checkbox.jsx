import { TodoContext } from '../../contexts/todos.context';
import { CheckBoxContainer } from './CheckBox.styles';
import { useState, useContext } from 'react';

const CheckBox = ({ status, todoId }) => {
    const [isChecked, setIsChecked] = useState(status)
    const { updateCheckbox } = useContext(TodoContext);

    const toggler = (e) => {
        setIsChecked(e.target.checked)
        updateCheckbox(todoId, e.target.checked)
    }

    return (
        <CheckBoxContainer>
            <div className="cbx">
                <input id="cbx-12" type="checkbox" checked={isChecked} onChange={toggler} />
                <label htmlFor="cbx-12"></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
            </div>
        </CheckBoxContainer>
    )
}

export default CheckBox;
