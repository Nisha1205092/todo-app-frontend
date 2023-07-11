import { useState } from "react";
import { TextAreaContainer, TextAreaInput } from "./TextArea.styles";

const TextArea = () => {
    const [description, setDescription] = useState('');
    const descriptionSetter = (event) => {
        setDescription(event.target.value)
        console.log(description)
    }
    return (
        <TextAreaContainer>
            <TextAreaInput
                required
                type="text"
                name="description"
                id='description'
                placeholder="Your todo description"
                autoComplete="off"
                onChange={descriptionSetter}
            ></TextAreaInput>
        </TextAreaContainer>
    );
};

export default TextArea;