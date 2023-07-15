import { styled } from "styled-components";

export const CustomTextArea = styled.textarea`
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    background-color: ${({ theme }) => theme.color2};
    color: ${({ theme }) => theme.text};

    &:focus {
        background-color: ${({ theme }) => theme.color2};
    }
`

export const CustomInput = styled.input`
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    background-color: ${({ theme }) => theme.color2};
    color: ${({ theme }) => theme.text};

    &:focus {
        background-color: ${({ theme }) => theme.color2};
    }
`
export const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TitleDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
    padding: 20px;
`


export const TodoItemTitle = styled.h3`
    width: 100%;
    text-align: left;
    text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
`


export const TodoItemDescriptionCompleted = styled.p`
    width: 100%;
    text-align: left;
    color: ${({ theme }) => theme.todoCompleted};
`
export const TodoItemDescriptionNotCompleted = styled.p`
    width: 100%;
    text-align: left;
    color: ${({ theme }) => theme.todoNotCompleted};
`
// BDBDBD
// 3C3C3C