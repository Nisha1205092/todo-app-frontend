import { keyframes, styled } from "styled-components";

export const Cbx12 = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    margin: 0;

    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 2px solid #bfbfc0;
    border-radius: 50%;

    &:focus {
        outline: 0;
    }
`

export const Label = styled.label`
    width: 24px;
    height: 24px;
    background: none;
    border-radius: 50%;
    position: absolute;
    left: 0;
    transform: trasnlate3d(0, 0, 0);
    pointer-events: none;
`

export const Cbx = styled.div`
    width: 24px;
    height: 24px;
    top: calc(100px - 12px);
    left: calc(100px - 12px);
`

export const Icon = styled.svg`
    position: absolute;
    top: -130%;
    left: -170%;
    width: 110px;
    pointer-events: none;    
`

export const CheckBoxContainer = styled.div`
    position: relative;

    &  * {
        box-sizing: border-box;
    }

    &  ${Cbx} ${Icon} {
        position: absolute;
        top: 5px;
        left: -43px;
        z-index: 1;
        pointer-events: none;
    }

    &  ${Cbx} ${Icon} path {
        stroke: #fff;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 19;
        stroke-dashoffset: 19;
        transition: stroke-dashoffset 0.3s ease;
        transition-delay: 0.2s;
    }

    &  ${Cbx} ${Cbx12}:checked+${Label} {
        animation: splash-12 0.6s ease forwards;
    }

    &  ${Cbx} ${Cbx12}:checked+${Label}+${Icon} path {
        stroke-dashoffset: 0;
    }

    @-moz-keyframes splash-12 {
        40% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -18px 0 -8px ${({ theme }) => theme.color1}, 16px -8px 0 -8px ${({ theme }) => theme.color1}, 16px 8px 0 -8px ${({ theme }) => theme.color1}, 0 18px 0 -8px ${({ theme }) => theme.color1}, -16px 8px 0 -8px ${({ theme }) => theme.color1}, -16px -8px 0 -8px ${({ theme }) => theme.color1};
        }

        100% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }

    @-webkit-keyframes splash-12 {
        40% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -18px 0 -8px ${({ theme }) => theme.color1}, 16px -8px 0 -8px ${({ theme }) => theme.color1}, 16px 8px 0 -8px ${({ theme }) => theme.color1}, 0 18px 0 -8px ${({ theme }) => theme.color1}, -16px 8px 0 -8px ${({ theme }) => theme.color1}, -16px -8px 0 -8px ${({ theme }) => theme.color1};
        }

        100% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }

    @-o-keyframes splash-12 {
        40% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -18px 0 -8px ${({ theme }) => theme.color1}, 16px -8px 0 -8px ${({ theme }) => theme.color1}, 16px 8px 0 -8px ${({ theme }) => theme.color1}, 0 18px 0 -8px ${({ theme }) => theme.color1}, -16px 8px 0 -8px ${({ theme }) => theme.color1}, -16px -8px 0 -8px ${({ theme }) => theme.color1};
        }

        100% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }

    @keyframes splash-12 {
        40% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -18px 0 -8px ${({ theme }) => theme.color1}, 16px -8px 0 -8px ${({ theme }) => theme.color1}, 16px 8px 0 -8px ${({ theme }) => theme.color1}, 0 18px 0 -8px ${({ theme }) => theme.color1}, -16px 8px 0 -8px ${({ theme }) => theme.color1}, -16px -8px 0 -8px ${({ theme }) => theme.color1};
        }

        100% {
            background: ${({ theme }) => theme.color1};
            box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
        }
    }
`