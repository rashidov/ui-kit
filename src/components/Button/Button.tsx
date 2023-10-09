import React from 'react'

export interface ButtonProps {
  variant: string
}

const Button: React.FC<ButtonProps> = ({ variant }) => <div>my button {variant}</div>

export default Button
