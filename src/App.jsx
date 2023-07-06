import './App.css'
import AddToListButton from './components/AddToListButton/AddToListButton'
import CheckBox2 from './components/CheckBox2/CheckBox2'
import DeleteButton from './components/DeleteButton/DeleteButton'
import TextArea from './components/Textarea/TextArea'
import TodoItem from './components/TodoItem/TodoItem'
import InputText from './components/input/InputText'

const App = () => {

  return (
    <>
      <div className='create-todo-container'>
        <h1>ToDo App</h1>
        <InputText />
        <TextArea />
        <AddToListButton />
      </div>

      <div className='todo-list-container'>
        <h3>Todo List</h3>
        <div className='todo-list-item-container'>
          <CheckBox2 />
          <TodoItem />
          <DeleteButton />
        </div>
      </div>
    </>
  )
}

export default App
