interface ButtonProps {
  enabled: boolean;
}

const Button = ({ enabled }: ButtonProps) => (
  <button type="submit" disabled={!enabled}>
    send
  </button>
);

export default Button;
