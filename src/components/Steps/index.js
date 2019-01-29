import React from 'react'
import Step from './Step'

const Steps = (props) => {

  const isActive = (index) => Math.abs(index - props.current)

  const handleClick = (index) => {
    if (isActive(index)) {
      this.props.handleClick(index)
    }
  }

  const renderChildren = () => {
    const { current, steps } = props;

    const stepLengtn = steps.length;
    if (stepLengtn < 2) {
      console.warn("In Steps component must be more than 2 and max 5 steps");
      return null;
    }
    if (stepLengtn > 2) {
      console.warn("In Steps component must be max 5 steps");
    }

    const result = [];
    
    for (let i = 0; i < stepLengtn && i < 5; i++) {
      result.push(
        <Step
          key={steps[i].label}
          title={steps[i].label}
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
    <div>
      { renderChildren() }
    </div>
  )
}

export default Steps
