import { Grid, ListItem } from "@mui/material";
import Layout from "./Layout/Layout.js";
import meAtSea from "../assets/meAtSea.png";
import qantasLogo from "../assets/qantasLogo.png";
import simplySeatedLogo from "../assets/simplySeatedLogo.avif";

const aboutMe = `
I'm a Software Engineer currently working in Qantas Loyalty,
passionate about web development! I made this website to
share my learnings with the world. I'll also be writing about
my challenges and experiences with learning Japanese (currently JLPT N4 level), and what books I'm
currently reading. Stay tuned for more!
`;

const qantasExperience = `
I've been through a ton of different roles in Qantas. From creating an automated no-code solution to track and categorise airport delays across the world, to producing Risk Assessments for executive stakeholders in Group Cyber - I've actually ended up loving development in my fourth and final rotation. 
`;

const simplySeatedExperience = `
My first role had me working as an intern inside a warehouse! (no, seriously) We were a small group of 4 developers creating the next cutting edge inventory management system called "Wueyo". This gave me my first taste of full stack development, and how it can be quite a chaotic, challenging but very exciting and rewarding role. 
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
        flex={1}
      >
        <p style={{ fontSize: "100px", marginBottom: "3rem" }}>
          A bit about me...
        </p>

        {/* About Me */}
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid width={500}>
            <p>{aboutMe}</p>
          </Grid>
          <Grid width={200}>
            <img src={meAtSea} alt="logo" width={200} height={200} />
          </Grid>
        </Grid>
        {/* Qantas Experience */}
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid width={200}>
            <img src={qantasLogo} alt="logo" width={200} height={200} />
          </Grid>
          <Grid width={500}>
            <p>{qantasExperience}</p>
          </Grid>
        </Grid>
        {/* Simply Seated Experience */}
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid width={500}>
            <p>{simplySeatedExperience}</p>
          </Grid>
          <Grid width={200}>
            <img src={simplySeatedLogo} alt="logo" width={200} height={200} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
