const ThemeToggleButton = ({ toggleTheme, isDarkTheme }) => {
    return (
        <button onClick={toggleTheme}>
            {isDarkTheme ?
                <span aria-label="Light mode" role="img">🌞</span>
                : <span aria-label="Dark mode" role="img">🌜</span>}
        </button>
    )
}

export default ThemeToggleButton