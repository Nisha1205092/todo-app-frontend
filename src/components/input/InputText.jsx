import './InputText.styles.css';

const InputText = () => {
    return (
        <div className="title-input">
            <input required type="text" name="title" autoComplete="off" className="input" placeholder='Your todo title' />
        </div>
    );
};

export default InputText;
