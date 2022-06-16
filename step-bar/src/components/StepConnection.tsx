interface StepConnectionProps {
  highlight: boolean;
}

const StepConnection = ({ highlight }: StepConnectionProps) => (
  <div
    style={{
      width: '80px',
      height: '5px',
      margin: '10px',
      borderRadius: '20px',
      backgroundImage: highlight ? undefined : 'linear-gradient(to right, white, black)',
      backgroundColor: highlight ? '#02f902' : undefined,
    }}
  />
);

export default StepConnection;
