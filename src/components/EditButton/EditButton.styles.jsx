import { styled } from "styled-components";

export const EditButtonContainer = styled.span`
    cursor: pointer;
    & svg {
        width: 30px;
        height: auto;
        opacity: 0.9;
        color: ${({ theme }) => theme.textAndIcon};
    }

    button {
        color: none;
    }
`