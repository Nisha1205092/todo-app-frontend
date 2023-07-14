import './App.css'
import CreateNewTodo from './components/CreateNewTodo/CreateNewTodo'
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ThemeToggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <CreateNewTodo />
        <TodoList />
      </>
    </ThemeProvider>
  )
}

export default App
