import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 30px;
  color: white;
  border: 1px solid black;
  background-color: ${({ name }) => {
    switch (name) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'darkgray';
      case 'bad':
        return 'red';
      default:
        return 'black';
    }
  }};
  transform: translateY(0);
  transition: transform 250ms linear, border 250ms linear;

  :hover {
    transform: translateY(-3px);
    border: 1px solid blanchedalmond;
  }
`;
