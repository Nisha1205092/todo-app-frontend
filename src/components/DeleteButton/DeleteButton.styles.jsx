import { styled } from "styled-components";

export const DeleteButtonContainer = styled.div`
    cursor: pointer;
    & svg {
    width: 30px;
    height: auto;
    color: ${({ theme }) => theme.textAndIcon};
    opacity: 0.9;
}
`
