import styled from "@emotion/styled";

export const StyledButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    transition: "0.4s",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",

    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        transition: "0.4s"
    }
}));

//44:13