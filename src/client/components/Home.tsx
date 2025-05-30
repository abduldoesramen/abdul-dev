import { Grid, ListItem } from "@mui/material";
import Layout from "./Layout/Layout.js";
import meAtSea from "../assets/meAtSea.png";
import qantasLogo from "../assets/qantasLogo.png";
import simplySeatedLogo from "../assets/simplySeatedLogo.avif";
import Header from "./Layout/Header.js";
import "./Home.css";

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
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        flex={1}
      >
        <Header title="A bit about me..." />
        <div className="rowContainer">
          <p>{aboutMe}</p>
          <img src={meAtSea} alt="picture of my face next to the sea" />
        </div>
        <div className="rowContainer">
          <img src={qantasLogo} alt="qantas airways logo" />
          <p>{qantasExperience}</p>
        </div>
        <div className="rowContainer">
          <p>{simplySeatedExperience}</p>
          <img src={simplySeatedLogo} alt="simply seated logo" />
        </div>
      </Grid>
    </Layout>
  );
};

export default Home;
