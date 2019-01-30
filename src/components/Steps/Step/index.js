import React from 'react'
import styled from 'styled-components';

// template props
const tp = {
  activeColor: '#5025D6',
  secondColor: '#DBDBDB',
  iconSize: '40px',
}

const Step = (props) => {
  const ButtonContainer = styled.div`
    position: relative;

    &:after {
      content: '';
      height: 8px;
      width: 9999px;
      background-color: ${props.checked ? tp.activeColor : tp.secondColor};
      display: block;
      position: absolute;
      top: 16px;
      left: 50%;
      z-index: -1;
    }
  `

  const Container = styled.div`
    flex: 1;

    &:last-child {
      flex: none;
      ${ButtonContainer}: {
        &:after {
          background: #fff;
        }
      }
    }
  `

  const Element = styled.div`
    display: inline-block;
    text-align: center;
  `

  const Label = styled.label`
    display: block;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
    color: ${props.checked || props.current ? tp.activeColor : tp.secondColor};
  `
  Label.displayName = 'Label'

  const Button = styled.input`
    width: 40px;
    height: 40px;
    border: 10px solid ${props.checked || props.current ? tp.activeColor : tp.secondColor};
    border-radius: 50%;
    padding: 0;
    margin: 0;
    background-color: #fff;
    cursor: ${props.active ? 'pointer' : 'default'};
  `
  Button.displayName = 'Button'

  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.index);
  }

  return (
    <Container>
      <Element>
        <Label htmlFor={props.title}>{props.title}</Label>
        <ButtonContainer>
          <Button
            id={props.title}
            type="button"
            onClick={handleClick}
            disabled={!props.active}
          />
        </ButtonContainer>
      </Element>
    </Container>
  )
}

export default Step
