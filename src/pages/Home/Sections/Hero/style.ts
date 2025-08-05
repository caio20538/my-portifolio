import styled from "@emotion/styled"

export const StyledHero = styled("div")( ({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",

    //aqui é para o mobile preciso colocar os 2 pq as mudanças são aplicadaspara todos
    [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px"
    },

    [theme.breakpoints.up('md')]: { // >= mobile
        paddingTop: "0"
    },
}));

export const StyledImg = styled("img")(({theme}) => ({
    width: "75%",
    height:"75%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
}));