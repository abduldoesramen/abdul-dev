import { Button, Fade, Grid } from "@mui/material";
import Layout from "../Layout/Layout.js";
import meAtSea from "../../assets/meAtSea.png";
import qantasLogo from "../../assets/qantasLogo.png";
import simplySeatedLogo from "../../assets/simplySeatedLogo.avif";
import Header from "../Layout/Header.js";
import "./Home.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Snackbar, {
  SnackbarCloseReason,
  SnackbarOrigin,
} from "@mui/material/Snackbar";
import { useState } from "react";

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

type Inputs = {
  email: string;
  content: string;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // Logic for notification bar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          <h1>Personal Projects</h1>
          <p>TBD</p>
          <br />
          <h1>Feel free to contact me</h1>
          <div
            style={{ border: "solid red 1px" }}
            flex-direction="column"
            justify-content="center"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email Address</label>
              <input {...register("email", { required: true })} />
              <label>What's on your mind?</label>
              <input {...register("content", { required: true })} />
              <div>
                <Button variant="contained" type="submit" onClick={handleClick}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Layout>
      {/* If any field is not filled in, show error to user. Else continue with success message */}
      {/* {errors.content ||
        (errors.email ? (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Please fill in all the fields"
            color="alert"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        ) : (
          <Snackbar
            open={open}
            autoHideDuration={4000}
            message="Successfully submitted email!"
            color="alert"
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            slots={{ transition: Fade }}
          />
        ))} */}
    </>
  );
};

export default Home;
