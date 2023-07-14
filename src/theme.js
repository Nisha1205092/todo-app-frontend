import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: '#f1f1f1',
  text: '#3C3C3C',
  color1: '#B7AEF2',
  color2: '#F2ECB3',
  textAndIcon: '3C3C3C'
};
export const darkTheme = {
  body: '#121620',
  text: '#bdbdbd',
  color1: '#282633',
  color2: '#4f4f4e',
  textAndIcon: '#bdbdbd'
};