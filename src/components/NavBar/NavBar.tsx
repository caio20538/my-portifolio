import { AppBar, MenuItem } from "@mui/material"
import * as S from "./style"

export const NavBar:React.FC = () => {

  return (
    <>
      <AppBar position="relative">
            <S.StyledToobar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </S.StyledToobar>
            
      </AppBar>
    </>
    
  )
}