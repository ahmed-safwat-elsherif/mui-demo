import { colors, responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 10,
  //     md: 20,
  //     lg: 30,
  //     xl: 40,
  //   },
  // },
  palette: {
    primary: {
      main: colors.orange[500],
      light: colors.orange[100],
      dark: colors.orange[800],
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: "600",
      color: "#3f51b5",
      textShadow: "0 0.4rem 0.4rem #00000038",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "500",
    },
    h4: {
      fontSize: "22px",
      color: "#000000de",
    },
    h5: {
      fontSize: "20px",
    },
    caption: {
      color: "#0000008a",
      fontSize: "0.9rem",
    },
    subtitle1: {
      color: "#000000b3",
      fontSize: "0.9rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
  // components: {
  //   // Name of the component
  //   MuiButton: {
  //     styleOverrides: {
  //       /**
  //        * Each component is composed of several different parts. These parts correspond to classes
  //        * that are available to the component—see the CSS section of the component's API page for
  //        * a detailed list. You can use these classes inside the styleOverrides key to modify
  //        * the corresponding parts of the component.
  //        */
  //       focusVisible: ({ ownerState, theme }) => ({
  //         ...(ownerState.variant === "contained" && {
  //           backgroundColor: theme.palette.primary.main,
  //         }),
  //       }),
  //     },
  //   },
  // },
});

// console.log("h5: before apply responsive fonts", theme.typography.h5);

// console.log(
//   "h5: before apply responsive fonts",
//   responsiveFontSizes(theme).typography.h5
// );

// console.log(theme.breakpoints.up("xs")); // @media (min-width:0px)
// console.log(theme.breakpoints.up("sm")); // @media (min-width:600px)
// console.log(theme.breakpoints.up("md")); // @media (min-width:900px)
// console.log(theme.breakpoints.up("lg")); // @media (min-width:1200px)
// console.log(theme.breakpoints.up("xl")); // @media (min-width:1536px)

// console.log(theme.breakpoints.down("xs")); // @media (max-width:-0.05px)
// console.log(theme.breakpoints.down("sm")); // @media (max-width:599.95px)
// console.log(theme.breakpoints.down("md")); // @media (max-width:899.95px)
// console.log(theme.breakpoints.down("lg")); // @media (max-width:1199.95px)
// console.log(theme.breakpoints.down("xl")); // @media (max-width:1535.95px)

// console.log(theme.breakpoints.not("sm")); // @media not all and (min-width:600px) and (max-width:899.95px)

// console.log(theme.breakpoints.only("sm")); // @media (min-width:600px) and (max-width:899.95px)

// console.log(theme.breakpoints.between("sm", "lg")); // @media (min-width:600px) and (max-width:1199.95px)

theme = responsiveFontSizes(theme);

export { theme };

console.log(
  theme.transitions.create(["background-color", "transform"], {
    delay: 200, // in milli sec
    duration: 300,
    easing: "ease-in-out",
  })
);
// background-color 300ms ease-in-out 200ms,transform 300ms ease-in-out 200ms
