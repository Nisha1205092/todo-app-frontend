import { useState } from "react";
import { InputTextContainer } from "./InputText.styles";

const InputText = () => {
    const [title, setTitle] = useState('');

    const titleSetter = (event) => {
        setTitle(event.target.value)
        console.log({ title })
    }
    return (
        <InputTextContainer>
            <input
                required
                type="text"
                name="title"
                autoComplete="off"
                className="input"
                placeholder='Your todo title'
                onChange={titleSetter}
            />
        </InputTextContainer>
    );
};

export default InputText;
