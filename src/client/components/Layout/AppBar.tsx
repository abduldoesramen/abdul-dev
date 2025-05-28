import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import BookIcon from '@mui/icons-material/Book';
import { Grid } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import FaceIcon from '@mui/icons-material/Face';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';

const pages = [
  { name: "About me", icon: <FaceIcon />, path: "/" },
  { name: "What I'm Reading", icon: <BookIcon />, path: "/books" },
  { name: "Japanese Blog", icon: <LanguageIcon />, path: "/blog" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavLinkClick = (path: string) => {
    handleCloseNavMenu(); // Close the menu first
    navigate(path); // Navigate to the specified path
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ElectricBoltTwoToneIcon
            sx={{ mr: 1, color: "beige"  }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "beige",
              textDecoration: "none",
            }}
          >
            Abdulrehman
          </Typography>
          <Grid container spacing={2} sx={{ flexGrow: 1, display: { sm: "flex" }, justifyContent: "flex-end"}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavLinkClick(page.path)}
                sx={{ my: 2, color: "beige", display: "block" }}
              >
                <Grid container direction="row" alignItems="center" spacing={1}>
                  {page.icon}
                  {page.name}
                </Grid>
              </Button>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
