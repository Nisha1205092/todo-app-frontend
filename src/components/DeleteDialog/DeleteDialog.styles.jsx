import styled from 'styled-components';

export const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const DialogBox = styled.div`
  background-color: ${({ theme }) => theme.deleteDialog};
  padding: 20px;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin-left: 10px;
  background-color: ${({ theme }) => theme.deleteDialogButtons}
`;