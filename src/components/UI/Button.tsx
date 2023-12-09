import { FC } from 'react'

interface ButtonProps {
  onClick?:() => void,
  children:React.ReactNode,
  variant?:'solid' | 'default' | 'danger',
  className?:string,
  disabled?:boolean
} 

const Button: FC<ButtonProps> = ({ onClick, children, variant = 'default', className = '', disabled = false }) => {
  const styles = {
    solid:'bg-yellow-400 text-black hover:text-black hover:bg-white',
    default:'text-black hover:bg-yellow-400 hover:text-white',
    danger:'bg-white text-black hover:bg-red-500 hover:text-white'
  }
  return (
    <button disabled={disabled} className={`bg-none font-bold text-[16px] border ${styles[variant]} px-5 py-2  transition duration-200 ${className} ${disabled && 'grayscale text-gray-400 pointer-events-none'}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button;