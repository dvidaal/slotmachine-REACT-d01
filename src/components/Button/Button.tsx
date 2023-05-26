import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  action: () => void;
  message: string;
  isDisabled: boolean;
}

const Button = ({
  className,
  action,
  message,
  isDisabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={action} disabled={isDisabled}>
      {message}
    </ButtonStyled>
  );
};

export default Button;
