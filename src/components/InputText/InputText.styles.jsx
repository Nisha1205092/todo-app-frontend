import { styled } from "styled-components";

export const InputTextContainer = styled.div`    
    position: relative;
    width: 100%;
    
    .input {
        border: solid 1.5px #9e9e9e;
        border-radius: 0.5rem;
        padding: 1rem;
        font-size: 1rem;
        color: #3C3C3C;
        background-color: ${({ theme }) => theme.titleDescriptionCreate};
        transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
        width: 60%;
    }

    .input:focus,
    input:valid {
        outline: none;
        border: 1.5px solid #3C3C3C;
    }

    .input:focus~label,
    input:valid~label {
        transform: translateY(-50%) scale(0.8);
        background-color: #212121;
        padding: 0 .2em;
        color: #2196f3;
    }
`