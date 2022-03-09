import React from 'react'

function Card({ children, dark }) {
  const c = (dark) ? "card dark" : "card";
  return (
    <div className={c}><div>{children}</div></div>
  )
}

export default Card