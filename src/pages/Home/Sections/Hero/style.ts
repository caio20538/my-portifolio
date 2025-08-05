import styled from "@emotion/styled"

export const StyledHero = styled("div")( ({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"
}));

export const StyledImg = styled("img")(({theme}) => ({
    width: "80%",
    height:"80%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
}));