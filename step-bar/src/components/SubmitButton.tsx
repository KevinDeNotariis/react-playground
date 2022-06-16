import styled from 'styled-components';

const SubmitButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;

  :enabled {
    background-color: yellow;
  }

  :hover:enabled {
    background-color: green;
    color: white;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export default SubmitButton;
