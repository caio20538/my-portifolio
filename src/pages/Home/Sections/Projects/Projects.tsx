import { Box, Container, Grid, Typography } from "@mui/material";
import type React from "react";
import { AnimatedComponent } from "../../../../components/AnimatedComponent/AnimatedComponent";
import { StyledExperience } from "./style";
import { ProjectCard, type ProjectCardProps } from "../../../../components/ProjectCards/ProjectCards";
import { Projects as ProjectList } from "../../../../data/ProjectsData";

export const Projects: React.FC = () => {
    
    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {ProjectList.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{md: 6}} key={index}>
                            <AnimatedComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimatedComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}