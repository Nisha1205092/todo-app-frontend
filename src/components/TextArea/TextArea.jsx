import './TextArea.styles.css';

const TextArea = () => {
    return (
        <div className="textarea-input">
            <textarea
                required
                type="text"
                name="description"
                id='description'
                placeholder="Your todo description"
                autoComplete="off"
                className="input"
            ></textarea>
        </div>
    );
};

export default TextArea;