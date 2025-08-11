import styled from "@emotion/styled"

export const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  paddingBottom: "2rem",

  // No mobile: minHeight para evitar sobreposição
  [theme.breakpoints.down("md")]: {
    minHeight: "100vh",
    paddingTop: "300px", // se ainda quiser espaçamento no topo
  },

  // No desktop: altura fixa da viewport
  [theme.breakpoints.up("md")]: {
    height: "100vh",
    paddingTop: "0",
  },

  display: "flex",
  alignItems: "center",
}));



export const StyledImg = styled("img")(({theme}) => ({
  width: "75%",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  position: "relative",
  marginBottom: "30px", // exemplo para empurrar imagem pra cima/baixo
}));