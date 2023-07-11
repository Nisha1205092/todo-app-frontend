import { InputTextContainer } from "./InputText.styles";

const InputText = () => {
    return (
        <InputTextContainer>
            <input required type="text" name="title" autoComplete="off" className="input" placeholder='Your todo title' />
        </InputTextContainer>

    );
};

export default InputText;
