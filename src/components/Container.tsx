import clsx from 'clsx';
import type{ ReactNode } from 'react';
interface Props {
    className?:string
  children?: ReactNode; 
}
function Container({children,className}:Props) {
  return (
    <div className={clsx(" mx-auto max-w-300 px-4 sm:px-6 lg:px-8",className)}>
      {children}
    </div>
  )
}

export default Container
