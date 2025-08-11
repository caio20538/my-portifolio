import { Box, Container, Grid, Typography } from "@mui/material";
import type React from "react";
import SchoolIcon from '@mui/icons-material/School';
import { AnimatedComponent } from "../../../../components/AnimatedComponent/AnimatedComponent";
import * as S from "./style"
import { WorkspacePremium } from "@mui/icons-material";


export const About: React.FC = () =>{

    const skillsSet = [
        "Java", "Spring Boot","Python" , "React", "Typescript", "HTML", "CSS", "Javascript", "Material UI", "AWS", "Docker", "Kubernets", "Mysql", "PostgreSQL", "flyway", "MongoDB", "RabbitMQ", "Kafka", "CI/CD"
    ]

    return(
        <>
            <Container maxWidth="lg" >
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">About me</Typography>
                </Box>

                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                     
                    <Grid size={{xs:9, md:2.5}}>
                        <AnimatedComponent moveDirection="right">
                            <S.StyledCard variant="outlined">
                                <WorkspacePremium />

                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">1 ano</Typography>
                                <Typography textAlign="center">Desenvolvedor Full Stack</Typography>
                            </S.StyledCard>
                        </AnimatedComponent>
                    </Grid>

                    <Grid size={{xs:9, md:2.5}}>
                             <AnimatedComponent moveDirection="left">
                                <S.StyledCard variant="outlined">
                                    <SchoolIcon />
                                    
                                    <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                    <Typography textAlign="center">Tecnologo</Typography>
                                    <Typography textAlign="center">ADS</Typography>
                                </S.StyledCard>
                            </AnimatedComponent>
                        </Grid>
                </Grid>

                <Box pb={1}>
                    <Typography>
                        Desenvolvedor Full Stack com foco em Java, Spring Boot, React e  AWS, aplicando boas práticas como SOLID, Clean Code, TDD e integração de bancos relacionais e não relacionais. 
                        Busco desafios em ambientes colaborativos e que adotem cloud computing, segurança e escalabilidade. 
                    </Typography>
                </Box>

                <hr />

                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{xs:5, sm:4, md:2, lg:2}} >
                                <S.StyledCard variant="outlined">
                                    {skill}
                                </S.StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}