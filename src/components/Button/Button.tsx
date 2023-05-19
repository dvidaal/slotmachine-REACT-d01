import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  action: () => void;
  message: string;
}

const Button = ({ className, action, message }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={action}>
      {message}
    </ButtonStyled>
  );
};

export default Button;
