import './App.css'
import CreateNewTodo from './components/CreateNewTodo/CreateNewTodo'
import TodoList from './components/TodoList/TodoList'
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark"
    setTheme(updatedTheme)
    localStorage.setItem("theme", updatedTheme)
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])
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
