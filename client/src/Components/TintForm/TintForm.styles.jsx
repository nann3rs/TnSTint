import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
`;

export const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 60%;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  z-index: 101;
  padding: 40px;
`;

export const CloseIcon = styled.div`
  text-align: right;
`;

export const Grid = styled.div`
  border: 1px solid black;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  text-align: center;
`;

export const THead = styled.div`
  border: 1px solid black;
  text-align: center;
  font-weight: bold;
`;