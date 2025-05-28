import { Box, Container, Grid } from "@mui/material";
import Layout from "./Layout/Layout.js";
import { ListItem } from "@mui/material";
import meAtSea from "../../../public/meAtSea.jpg";

const aboutMe = `
                I'm a Software Engineer currently working in Qantas Airways,
                passionate about web development! I'll be using this website to
                share my learnings and experiences. I'll also be writing about
                my experiences with learning Japanese, and what books I'm
                currently reading.
`;

const workExperience = `
Airline Operations, Project Analyst
Group Cyber, Cybersecurity Analyst
Qantas Loyalty, DevOps Engineer
Qantas Loyalty Money, Fullstack Software Engineer
`;

const Home = () => {
  return (
    <Layout>
      {/* Seperate Container for heading  */}
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        marginBottom="3rem"
      >
        <p style={{ fontSize: "100px" }}>A bit about me...</p>
      </Grid>

      {/* About Me */}
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid width={500}>
            <p>{aboutMe}</p>
          </Grid>
          <Grid width={500}>
            <div>
              {/* {" "}
              <img src={meAtSea} alt="logo" /> */}
            </div>
          </Grid>
        </Grid>
        {/* Qantas Experience */}
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid width={500}>
            <p>Image Placeholder</p>
          </Grid>
          <Grid width={500}>
            <p>{workExperience}</p>
          </Grid>
        </Grid>
        {/* Simply Seated Experience */}
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid width={500}>
            <p>
              Coded a lot of cool stuff for Simply Seated's in house Inventory
              Management Web App!
            </p>
          </Grid>
          <Grid width={500}>
            <p>Image Placeholder</p>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
