import { styled } from "styled-components";

export const SaveButtonContainer = styled.div`
    cursor: pointer;
    & svg {
        width: 30px;
        height: auto;
        opacity: 0.9;
        color: ${({ theme }) => theme.textAndIcon};
    }
`