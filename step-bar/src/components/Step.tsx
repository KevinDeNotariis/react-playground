interface StepProps {
  name: string;
  selected: boolean;
  completed: boolean;
}

const Step = ({ name, selected, completed }: StepProps) => {
  const selectedStyle = {
    backgroundColor: 'crimson',
    color: 'white',
  };

  const completedStyle = {
    backgroundColor: '#02f902',
    color: 'black',
    // border: '2px solid #228b22',
  };

  const baseStyle = {
    padding: '10px 30px',
    borderRadius: '10px',
    width: '50px',
    border: '2px solid aliceblue',
    textAlign: 'center' as 'center',
  };

  let style = baseStyle;
  if (selected) {
    style = { ...style, ...selectedStyle };
  } else if (completed) {
    style = { ...style, ...completedStyle };
  }

  return <div style={style}>{completed ? 'Done' : name}</div>;
};

export default Step;
