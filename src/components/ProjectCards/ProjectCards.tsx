import { Grid, Typography } from "@mui/material";
import { StyledButton } from "../StyledButton/StyledButton";
import * as S from "./style"


export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    return (
        <S.StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>

            <Typography >
                {subtitle}
            </Typography>

            <S.StyledImg src={srcImg} />

            <Typography>
                {description}
            </Typography>

            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>

            <Grid container spacing={1} pt={2}>
                {websiteURL && (
                    <Grid size={{ xs: 6 }}>
                    <StyledButton onClick={() => window.open(websiteURL)}>
                        View Project
                    </StyledButton>
                    </Grid>
                )}

                <Grid size={{ xs: websiteURL ? 6 : 12 }}>
                    <StyledButton onClick={() => window.open(codeURL)}>
                    View Code
                    </StyledButton>
                </Grid>
            </Grid>

        </S.StyledCard>
    )
}
