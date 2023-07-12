import { styled } from "styled-components";

export const AddToListButtonContainer = styled.button`
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 0.65rem;
    background: #3c3c3c;
    background-size: 400%;
    color: #fff;
    border: none;


    &:hover::before {
        transform: scaleX(1);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: 0 50%;
        width: 100%;
        height: inherit;
        border-radius: inherit;
        background: linear-gradient(82.3deg,
                rgba(150, 93, 233, 1) 10.8%,
                rgba(99, 88, 238, 1) 94.3%);
        transition: all 0.475s;        
    }
`

export const Span = styled.span`
    position: relative
    z-index: 1;
`