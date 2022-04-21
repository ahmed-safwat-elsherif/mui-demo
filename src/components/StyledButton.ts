import { Button, colors } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button, {
  shouldForwardProp: (props) => {
    return props !== "color";
  },
  // //   label: "NewComponent",
  name: "MuiStyledButton",
  slot: "Root",
  // skipSx: true,
  overridesResolver: (props, styles) => {
    console.log(props);
    console.log(styles);
    return [styles.root];
  },
})({
  //   backgroundColor: colors.indigo[500],
  //   color: "whitesmoke",
  //   "&:hover": {
  //     backgroundColor: colors.indigo[700],
  //     color: "whitesmoke",
  //   },
});
