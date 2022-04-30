interface StepProps {
  name: string;
  selected: boolean;
}

const Step = ({ name, selected }: StepProps) => {
  const selectedStyle = {
    backgroundColor: 'crimson',
    color: 'white',
  };

  const baseStyle = {
    padding: '10px 30px',
    borderRadius: '10px',
  };

  return <div style={selected ? { ...baseStyle, ...selectedStyle } : baseStyle}>{name}</div>;
};

export default Step;
