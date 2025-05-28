import { Box, Container, Grid } from "@mui/material";
import Layout from "./Layout/Layout.js";
import { ListItem } from "@mui/material";

const aboutMe = `
                I'm a Software Engineer currently working in Qantas Airways,
                passionate about web development! I'll be using this website to
                share my learnings and experiences. I'll also be writing about
                my experiences with learning Japanese, and what books I'm
                currently reading.
`;

const Home = () => {
  return (
    <Layout>
      {/* Seperate Container for heading  */}
      <Grid container direction="column" alignItems="center" spacing={2}>
        <p style={{ fontSize: "100px" }}>A bit about me...</p>
      </Grid>

      <Grid
        container
        direction="column"
        sx={{
          display: "flex", // Make this Box a flex container
          justifyContent: "center", // Horizontally center its content
          // alignItems: "center", // Vertically center its content (if height allows)
          minHeight: "100vh", // Optional: Make it take full viewport height
          width: "100%", // Ensure it spans full width
          border: "1px solid red", // For debugging layout
        }}
      >
        <Grid container direction="row" alignItems="center">
          <Grid
            size={6}
            direction="row"
            alignItems="center"
            justifySelf="flex-end"
            sx={{
              border: "1px solid blue",
            }}
          >
            <ListItem
              sx={{
                width: "100%", // Ensure ListItem takes full width of Grid item
                justifyContent: "center", // Center content if ListItem is flex
              }}
            >
              {aboutMe}
            </ListItem>
          </Grid>
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid blue",
            }}
          >
            <ListItem>
              <p>Column 2, Row 1</p>
            </ListItem>
          </Grid>
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid blue",
            }}
          >
            <ListItem>
              <p>Column 1, Row 2</p>
            </ListItem>
          </Grid>
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid blue",
            }}
          >
            <ListItem>
              <p>Column 2, Row 2</p>
            </ListItem>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid sx={{ flexGrow: 1 }} alignItems="center" spacing={2}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid>
            <Grid container direction="column" spacing={2}>
              <Grid>
                <p>
                  I'm a Software Engineer currently working in Qantas Airways,
                  passionate about web development! I'll be using this website
                  to share my learnings and experiences. I'll also be writing
                  about my experiences with learning Japanese, and what books
                  I'm currently reading.
                </p>
              </Grid>
              <Grid>Row 2 in Left Column</Grid>
            </Grid>
          </Grid>
              <p>Airline Operations, Project Analyst</p>
              <p>Group Cyber, Cybersecurity Analyst</p>
              <p>Qantas Loyalty, DevOps Engineer</p>
              <p>Qantas Loyalty Money, Fullstack Software Engineer</p>
          <Grid>
            <Grid container direction="column" spacing={2}>
              <Grid>Row 1 in Right Column</Grid>
              <Grid>Row 2 in Right Column</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Layout>
  );
};

export default Home;

// <Box sx={{ flexGrow: 1 }}>
// <Grid container direction="column" alignItems="center" spacing={2}>
//   <Grid
//     container
//     direction="column"
//     sx={{ width: "30%", marginTop: "50px" }}
//     spacing={2}
//   >
//     <Grid>
//       {/* Row 1 in Left Column */}
//     </Grid>
//     <Grid>
//       {/* Row 1 in Left Column */}
//     </Grid>
//   </Grid>
// </Grid>
// </Box>
