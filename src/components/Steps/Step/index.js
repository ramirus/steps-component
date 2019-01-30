import React from 'react'

const Step = (props) => {
  return (
    <div>
      <label htmlFor={props.title}>{props.title}</label>
      <input
        id={props.title}
        type="button"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Step
