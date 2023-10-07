import React, {useState} from 'react'

interface ButtonProps {
  variant: string,
}

const Button: React.FC<ButtonProps> = ({variant}) => {
  const asd = useState<string>(variant)
  return (
    <div><>my button {asd}</></div>
  )
}

export default Button