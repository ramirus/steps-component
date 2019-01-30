import styled, { css } from 'styled-components';

// template props
const tp = {
  activeColor: '#5025D6',
  secondColor: '#DBDBDB',
  iconSize: '40px',
}

export const ButtonContainer = styled.div`
    position: relative;

    &:after {
      content: '';
      height: 8px;
      width: 100%;
      background-color: ${props => props.checked ? 'transparent' : tp.secondColor};
      display: block;
      position: absolute;
      top: 16px;
      left: 50%;
      z-index: -1;
      background: linear-gradient(to right, ${props => `${tp.activeColor} 50%, ${tp.secondColor} 50%`});
      background-size: 200% 100%;
      background-position: right bottom;
      transition: background-position 0.2s ease 0.1s;
      
      ${props => props.checked ?
    css`background-position: left bottom;
        transition: background-position 0.2s`
    :
    ''
  }
    }
  `

export const Container = styled.div`
    flex: 1;
    width: 100%;
    min-width: 100px;
    text-align: center;

    &:last-child {
      ${ButtonContainer}: {
        &:after {
          width: 0;
        }
        &:after {
          width: 0;
        }
      }
    }
  `

export const Label = styled.label`
    display: block;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
    cursor: ${props => props.active ? 'pointer' : 'default'};
    color: ${props => props.checked ? tp.activeColor : tp.secondColor};
    transition: color 0.1s;

    ${props => props.current ?
    css`color: ${props => tp.activeColor};
        transition: color 0.1s ease 0.2s;`
    :
    ''
  }
  `
Label.displayName = 'Label'

export const Button = styled.input`
    width: ${tp.iconSize};
    height: ${tp.iconSize};
    border: 10px solid ${props => props.isChecked ? tp.activeColor : tp.secondColor};
    border-radius: 50%;
    padding: 0;
    margin: 0;
    background-color: #fff;
    cursor: ${props => props.active ? 'pointer' : 'default'};
    transition: transform 0.3s;
    transition: border 0.1s;

    ${props => props.active ?
    `&:hover {
          transform: scale(1.2);
        }`
    :
    ''
  }
    ${props => props.current ?
    css`border: 10px solid ${props => tp.activeColor};
      transition: border 0.1s ease 0.2s`
    :
    ''
  }
  }
    &:focus {
      outline: none;
      transform: scale(1.2);
    }
  `
Button.displayName = 'Button'
