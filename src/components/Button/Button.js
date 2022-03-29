import "./Button.css";

const Button = ({ className, value, onClick,id }) => {
  return (
    <button className={className} onClick={onClick} data-testid={id}>
      {value}
    </button>
  );
};

export default Button;