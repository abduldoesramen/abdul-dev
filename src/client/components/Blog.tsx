import { Grid } from "@mui/material";
import Header from "./Layout/Header.js";
import Layout from "./Layout/Layout.js";

const Blog = () => {
  return (
    <Layout>
      {/* Seperate Container for heading  */}
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Header title="This is where I'll post my blog" />
      </Grid>
    </Layout>
  );
};

export default Blog;
