import InputText from '../InputText/InputText'
import TextArea from '../TextArea/TextArea'
import AddToListButton from '../AddToListButton/AddToListButton'
import { CreateNewTodoContainer } from './CreateNewTodo.styles'

const CreateNewTodo = () => {
    return (
        <CreateNewTodoContainer>
            <h1>ToDo App</h1>
            <InputText />
            <TextArea />
            <AddToListButton />
        </CreateNewTodoContainer>
    )
}

export default CreateNewTodo;