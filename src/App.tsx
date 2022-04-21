import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import IntegrateProcess from "./components/IntegrateProcess";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { ColorModeProvider } from "./contexts/ColorModeContext";

function App() {
  return (
    <ColorModeProvider>
      <Box
        component="main"
        sx={{
          transition: (theme) =>
            theme.transitions.create(["color", "background-color"]),
          color: (theme) =>
            theme.palette.mode === "light" ? "inherit" : "white",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "transparent" : "#353535",
        }}
      >
        <Navbar />
        <HeroSection />
        <Services />
        <IntegrateProcess />
      </Box>
    </ColorModeProvider>
  );
}

export default App;
