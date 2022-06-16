import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);

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

  const submitHandler = () => {
    console.log('payload: ', state);
  };

  useEffect(() => {
    if (
      state.email !== '' &&
      state.password !== '' &&
      state.additionalNotes !== '' &&
      state.username !== ''
    ) {
      setSubmitButtonEnabled(() => true);
    } else {
      setSubmitButtonEnabled(() => false);
    }
  }, [state.email, state.password, state.additionalNotes, state.username]);

  return (
    <>
      <Container>
        {steps.map((step, index) => (
          <Item key={step.name}>
            <Step
              name={step.name}
              selected={state.selected === index}
              completed={state.selected > index}
            />
            {index !== steps.length - 1 ? (
              <StepConnection highlight={state.selected > index} />
            ) : null}
          </Item>
        ))}
      </Container>
      <Contents
        state={state}
        nextHandler={nextSelected}
        prevHandler={prevSelected}
        fieldHandler={fieldHandler}
        submitHandler={submitHandler}
        submitButtonEnabled={submitButtonEnabled}
      />
    </>
  );
};

export default StepBar;
