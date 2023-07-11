import { TextAreaContainer, TextAreaInput } from "./TextArea.styles";

const TextArea = () => {
    return (
        <TextAreaContainer>
            <TextAreaInput
                required
                type="text"
                name="description"
                id='description'
                placeholder="Your todo description"
                autoComplete="off"
            ></TextAreaInput>
        </TextAreaContainer>
    );
};

export default TextArea;