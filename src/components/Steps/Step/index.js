import React from 'react'

const Step = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.index);
  }

  return (
    <div>
      <label htmlFor={props.title}>{props.title}</label>
      <input
        id={props.title}
        type="button"
        onClick={handleClick}
      />
    </div>
  )
}

export default Step
