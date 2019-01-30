import React from 'react'
import {
  Label,
  Container,
  ButtonContainer,
  Button,
} from './styles';


const Step = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.index);
  }

  const {
    checked,
    active,
    current,
  } = props;

  return (
    <Container>
      <Label
        htmlFor={props.title}
        checked={checked}
        active={active}
        current={current}
      >
        {props.title}
      </Label>
      <ButtonContainer checked={checked}>
        <Button
          id={props.title}
          type="button"
          onClick={handleClick}
          disabled={!props.active}
          isChecked={checked}
          active={active}
          current={current}
        />
      </ButtonContainer>
    </Container>
  )
}

export default Step
