import React from 'react'

export interface ButtonProps {
  variant: string,
}

const Button: React.FC<ButtonProps> = ({variant}) => {
  return (
    <div>my button {variant}</div>
  )
}

export default Button