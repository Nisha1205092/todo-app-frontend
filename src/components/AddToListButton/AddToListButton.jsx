import { AddToListButtonContainer, Span } from './AddToListButton.styles';

const AddToListButton = ({ addTodo }) => {
    return (
        <AddToListButtonContainer
            onClick={addTodo}
        >
            <Span>Add to List</Span>
        </AddToListButtonContainer>
    )
}

export default AddToListButton;