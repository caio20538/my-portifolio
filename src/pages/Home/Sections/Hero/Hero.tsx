import { Box, Container, Grid, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg"
import * as S from "./style";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { StyledButton } from "../../../../components/StyledButton/StyledButton";

export const Hero:React.FC = () => {

  return (
    <>
        <S.StyledHero>
            <Container maxWidth="lg">
                <Grid container >
                    <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
                        <Box position="relative">
                            <Box position="absolute" width="100%" top="-100" right={0}>
                                
                            </Box>

                            <Box position="absolute" textAlign="center">
                                <S.StyledImg src={Avatar}/>
                            </Box>

                        </Box>

                        
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" paddingBottom={2}>Caio Silva</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm Software Engineer</Typography>
                        
                        <Grid container display="flex" justifyContent="center" spacing={2} paddingTop={3}>
                            <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                <StyledButton onClick={ () => console.log("donwload")}>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>   
                                </StyledButton>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4}} display="flex" justifyContent="center">
                                <StyledButton onClick={ () => console.log("Email")}>
                                    <EmailIcon />
                                    <Typography>
                                        Contact Me
                                    </Typography>
                                   
                                </StyledButton>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
            
   
        </S.StyledHero>
    </>
  )
}

