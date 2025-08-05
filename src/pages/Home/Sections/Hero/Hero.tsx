import { Box, Container, Grid, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg"
import * as S from "./style";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Caio_Silva_.pdf"

export const Hero:React.FC = () => {

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'Caio_Silva.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'caio20538@gmail.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

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
                                <StyledButton onClick={ () => handleDownload()}>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>   
                                </StyledButton>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4}} display="flex" justifyContent="center">
                                <StyledButton onClick={ () => handleEmail()}>
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

