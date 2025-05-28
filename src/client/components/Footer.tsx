import { FC, ReactElement } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

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
            <Grid>
              <Typography variant="subtitle2">
                <div>abdulrehman133782@gmail.com</div>
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle2">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={{color: "beige"}}>LinkedIn</a>
              </Typography>
            </Grid>
            <Grid>
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