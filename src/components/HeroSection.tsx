import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: 300,
  position: "relative",
  padding: 4,
  paddingLeft: "1rem",
  paddingRight: "1rem",
  width: "100%",
  border: `2px solid #c3c3c3`,
  "&:hover": {
    border: "2px solid",
  },
  transition: "ease-in-out border 0.1s",
  "&.Mui-focused": {
    border: `2px solid ${theme.palette.secondary.main} !important`,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "black",
  position: "absolute",
  right: 3,
  borderRadius: 300,
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  padding: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
}));

function HeroSection() {
  return (
    <Box component="section" sx={{ paddingY: "5rem" }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} padding={2}>
            <Stack direction="column" spacing={3}>
              <Typography variant="h1">
                Better Management; Less Expense
              </Typography>
              <Typography variant="h4">
                Not sure about Pro? Try trial first!
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={1}>
                  <CheckIcon sx={{ color: "primary.main" }} />
                  <Typography variant="caption">Unlimited Projects.</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <CheckIcon sx={{ color: "primary.main" }} />
                  <Typography variant="caption">
                    Unlimited Team Members.
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <CheckIcon sx={{ color: "primary.main" }} />
                  <Typography variant="caption">
                    Unlimited Disk Space.
                  </Typography>
                </Stack>
              </Stack>
              <FormControl
                sx={{
                  maxWidth: 460,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledInputBase placeholder="Your Email:" />
                <StyledButton startIcon={<FlightTakeoffIcon />}>
                  Subscribe
                </StyledButton>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                maxWidth: 350,
                mx: "auto",
                mt: { md: 0, sm: 3 },
                "& img": { width: "100%" },
              }}
            >
              <img
                src="http://evelynn-react.ui-lib.com/assets/images/illustrations/2.svg"
                alt="hero"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
