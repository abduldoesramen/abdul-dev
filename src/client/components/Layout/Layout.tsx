import { Container } from "@mui/material";
import AppBar from "./AppBar.js";
import Footer from "./Footer.js";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar />
      <Container disableGutters maxWidth={false}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
export default Layout;
