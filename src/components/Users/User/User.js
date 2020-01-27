import React from 'react'

// ES6 Function syntax.
const user = props => {
  return (
      <div className={user}>
        <h2>{props.name}</h2>
        <h5>{props.email}</h5>
      </div>
  )
};

export default user;