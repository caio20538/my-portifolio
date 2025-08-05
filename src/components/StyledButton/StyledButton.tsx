import type { ReactNode } from "react"
import * as S from "./style"

interface StyledButtonProps{
  children: ReactNode
}

export const StyledButton:React.FC<StyledButtonProps> = ({children}) => {

    
  return (
    <S.StyledButton>
      {children}
    </S.StyledButton>
    
  )
}