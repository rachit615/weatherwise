import { ButtonStyled } from "./style";

export const Button = (props) => {
  const { name } = props;

  return (
    <>
      <ButtonStyled>{name}</ButtonStyled>
      {props.names.map((name) => {
        console.log(name);
      })}
    </>
  );
};
