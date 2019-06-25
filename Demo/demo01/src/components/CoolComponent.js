import React from 'react';

const CoolComponent = (props) => {
  console.log(props)
  return (
    <div>{props.name} say: Hello World! </div>
  )
}

export default CoolComponent
