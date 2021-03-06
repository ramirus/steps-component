import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../redux/actions/steps';

import Step from './Step'

const StepsContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
`;

export const Steps = (props) => {

  const isActive = (index) => Math.abs(index - props.current) === 1

  const handleClick = (index) => {
    if (isActive(index)) {
      props.handleClick(index)
    }
  }

  const renderChildren = () => {
    const { current, steps } = props;

    const stepLengtn = steps.length;
    if (stepLengtn < 2) {
      console.warn("In Steps component must be more than 2 and max 5 steps");
      return null;
    }
    if (stepLengtn > 5) {
      console.warn("In Steps component must be max 5 steps");
    }

    const result = [];

    for (let i = 0; i < stepLengtn && i < 5; i++) {
      result.push(
        <Step
          key={steps[i].label}
          title={steps[i].label}
          index={i}
          handleClick={handleClick}
          current={current === i}
          active={isActive(i)}
          checked={i < current}
        />
      )
    }

    return result;
  }


  return (
    <StepsContainer>
      {renderChildren()}
    </StepsContainer>
  )
}

const mapStateToProps = state => ({
  current: state.steps.current,
});

const mapDispatchToProps = {
  handleClick: actions.setCurrentStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps)
