interface CounterProps {
  value: number;
}

const Counter = ({ value }: CounterProps) => <p>{value}</p>;

export default Counter;
