import styled from 'styled-components';

import ContentStep1 from './ContentStep1';
import ContentStep2 from './ContentStep2';
import ContentStep3 from './ContentStep3';

import { StepBarState } from '../../types';

const Container = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  justify-content: center;
  margin: 50px 0;
  padding: 10px;
  border-radius: 30px;
  background-image: linear-gradient(#99ccff, #003366);
`;

interface ContentsProps {
  state: StepBarState;
  nextHandler: Function;
  prevHandler: Function;
  fieldHandler: Function;
}

const Contents = ({ state, nextHandler, prevHandler, fieldHandler }: ContentsProps) => (
  <Container>
    {state.selected === 0 && (
      <ContentStep1
        nextHandler={nextHandler}
        username={state.username}
        password={state.password}
        fieldHandler={fieldHandler}
      />
    )}
    {state.selected === 1 && (
      <ContentStep2
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        email={state.email}
        fieldHandler={fieldHandler}
      />
    )}
    {state.selected === 2 && (
      <ContentStep3
        prevHandler={prevHandler}
        additionalNotes={state.additionalNotes}
        fieldHandler={fieldHandler}
      />
    )}
  </Container>
);

export default Contents;
