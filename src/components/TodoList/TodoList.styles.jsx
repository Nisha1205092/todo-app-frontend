import { styled } from "styled-components";

export const TodoListItemContainer = styled.div`
    display: grid;
    grid-template-columns: 10% 80% 10%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #3C3C3C;
`
export const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black; 
    background: ${({ theme }) => theme.color2};
    border-radius: 0.5rem;
    padding: 0 60px 60px 60px; 
`