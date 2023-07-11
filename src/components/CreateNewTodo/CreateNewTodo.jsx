import InputText from '../InputText/InputText'
import TextArea from '../TextArea/TextArea'
import AddToListButton from '../AddToListButton/AddToListButton'

const CreateNewTodo = () => {
    return (
        <div>
            <h1>ToDo App</h1>
            <InputText />
            <TextArea />
            <AddToListButton />
        </div>
    )
}

export default CreateNewTodo;