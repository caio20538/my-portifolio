import * as S from "./style"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React from "react";

export const NavBar:React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <S.StyledMobileToolbar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <S.StyledNavLink>About</S.StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <S.StyledNavLink>Skills</S.StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <S.StyledNavLink>Projects</S.StyledNavLink>
                        </MenuItem>
                    </Menu>
                </S.StyledMobileToolbar>

                <S.StyledDesktopToolbar variant="regular">
                    <MenuItem onClick={() => handleSmoothScroll("about")}>
                        <S.StyledNavLink>About</S.StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("skills")}>
                        <S.StyledNavLink>Skills</S.StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleSmoothScroll("projects")}>
                        <S.StyledNavLink>Projects</S.StyledNavLink>
                    </MenuItem>
                </S.StyledDesktopToolbar>
            </AppBar>
        </Box >
    );
}