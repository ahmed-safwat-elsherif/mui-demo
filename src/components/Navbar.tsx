import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SxProps, Theme, useTheme } from "@mui/material";
import { MaterialUISwitch } from "./ModeSwitch";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";

const appBarStyles = (theme: Theme): SxProps<Theme> => {
  const defaultStyles: SxProps<Theme> = {};
  switch (theme.palette.mode) {
    case "dark":
      return {
        ...defaultStyles,
        color: "white",
        backgroundColor: "#121212",
      };

    case "light": {
      return {
        ...defaultStyles,
        color: "#121212",
        backgroundColor: "white",
      };
    }
  }
};

export default function Navbar() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={appBarStyles(theme)}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <MaterialUISwitch
            checked={theme.palette.mode === "dark"}
            onChange={() => toggleColorMode()}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
