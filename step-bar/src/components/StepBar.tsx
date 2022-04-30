import styled from 'styled-components';
import { useState } from 'react';

import { StepType, StepBarState } from '../types';
import Step from './Step';
import StepConnection from './StepConnection';
import Contents from './Contents';

const steps: Array<StepType> = [
  {
    name: 'Step 1',
  },
  {
    name: 'Step 2',
  },
  {
    name: 'Step 3',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StepBar = () => {
  const [state, setState] = useState<StepBarState>({
    selected: 0,
    username: '',
    password: '',
    email: '',
    additionalNotes: '',
  });

  const nextSelected = () => {
    setState((curr) => {
      const newState = { ...curr };
      newState.selected += 1;
      return newState;
    });
  };

  const prevSelected = () => {
    setState((curr) => {
      const newState = { ...curr };
      newState.selected -= 1;
      return newState;
    });
  };

  const fieldHandler = (field: string, value: string) => {
    setState((curr) => {
      const newState = { ...curr };
      newState[field as keyof StepBarState] = value;
      return newState;
    });
  };

  return (
    <>
      <Container>
        {steps.map((step, index) => (
          <Item key={step.name}>
            <Step name={step.name} selected={state.selected === index} />
            {index !== steps.length - 1 ? <StepConnection /> : null}
          </Item>
        ))}
      </Container>
      <Contents
        state={state}
        nextHandler={nextSelected}
        prevHandler={prevSelected}
        fieldHandler={fieldHandler}
      />
    </>
  );
};

export default StepBar;
