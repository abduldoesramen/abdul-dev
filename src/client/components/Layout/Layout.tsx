import { Container } from "@mui/material";
import AppBar from "./AppBar.js";
import Footer from "./Footer.js";

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <AppBar />
      <Container disableGutters maxWidth={false}>
        <main>
          {children}
        </main> 
        <Footer/>
      </Container>
    </>
  );
}
export default Layout;
