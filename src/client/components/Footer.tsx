import { FC, ReactElement } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

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
                <div>LinkedIn</div>
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle2">
                <div>GitHub</div>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;