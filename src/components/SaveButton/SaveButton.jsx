import { ReactComponent as SaveIcon } from '../../assets/save-icon.svg';
import { SaveButtonContainer } from './SaveButton.styles';

const SaveButton = () => {
    return (
        <SaveButtonContainer>
            <SaveIcon />
        </SaveButtonContainer>
    )
}

export default SaveButton;