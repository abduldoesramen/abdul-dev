import { FC, ReactElement } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const linkedInUrl = "https://www.linkedin.com/in/abdulrehman-ahmad-76b9a0223"
const githubUrl = "https://github.com/abduldoesramen"

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "dimgrey",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "15rem", // this will change later depending on the content we add to the main content
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid>
            <Typography color="beige" variant="h6">
              Published by Abdulrehman
            </Typography>
          </Grid>
          <Grid container direction="row" alignItems="center"  color="beige" spacing={2}>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <EmailIcon/>
              <Typography variant="subtitle2">
                <div>abdulrehman133782@gmail.com</div>
              </Typography>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <LinkedInIcon/>
              <Typography variant="subtitle2">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={{color: "beige"}}>LinkedIn</a>
              </Typography>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <GitHubIcon/>
              <Typography variant="subtitle2">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{color: "beige"}}>Github</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;