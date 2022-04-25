interface SignProps {
  sign: string;
  handler: Function;
}

const Sign = ({ sign, handler }: SignProps) => (
  <button type="button" onClick={() => handler()}>
    {sign}
  </button>
);

export default Sign;
