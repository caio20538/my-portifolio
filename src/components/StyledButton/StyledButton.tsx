import type { ReactNode } from "react"
import * as S from "./style"

interface StyledButtonProps{
  children: ReactNode,
  onClick: () => void
}

export const StyledButton:React.FC<StyledButtonProps> = ({children, onClick}) => {

    
  return (
    <S.StyledButton onClick={onClick}>
      {children}
    </S.StyledButton>
    
  )
}