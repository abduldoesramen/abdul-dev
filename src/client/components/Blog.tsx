import { Grid } from "@mui/material";
import Layout from "./Layout/Layout.js";

const Blog = () => {
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
        <p style={{ fontSize: "100px" }}>This is where I'll post my blog</p>
      </Grid>
    </Layout>
  );
};

export default Blog;
