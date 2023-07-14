import {
    DialogWrapper,
    DialogBox,
    ButtonWrapper,
    Button
} from "./DeleteDialog.styles";

const DeleteDialog = ({ cancelDelete, deleteHandler }) => {

    return (
        <DialogWrapper>
            <DialogBox>
                <p>Are you sure you want to delete this todo?</p>
                <ButtonWrapper>
                    <Button onClick={cancelDelete}>Keep</Button>
                    <Button onClick={deleteHandler}>Delete</Button>
                </ButtonWrapper>
            </DialogBox>
        </DialogWrapper>
    );
};

export default DeleteDialog;