import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import HoverPaper from "./HoverPaper";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SettingsIcon from "@mui/icons-material/Settings";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import DvrIcon from "@mui/icons-material/Dvr";
import { StyledButton } from "./StyledButton";

function IntegrateProcess() {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "5rem",
        color: (theme) =>
          theme.palette.mode === "light" ? "inherit" : "white",
        backgroundColor: "inherit",
      }}
    >
      <Container>
        <Stack direction="column" spacing={2} marginBottom={2}>
          <Typography variant="h2">Integrate Your Process</Typography>
          <Typography variant="subtitle1">
            Access integrations and new features in a matter of seconds
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {allProcesses.map(({ label, subtitle, IconComponent }) => (
            <Grid key={label} item xs={12} md={6}>
              <HoverPaper
                elevation={2}
                hoverElevation={15}
                transitionTime={0.4}
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  filter: "grayscale(100%)",
                  padding: {
                    md: 0,
                    xs: 2,
                  },
                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={0} sm={3}>
                    <IconComponent
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "200px",
                        position: "absolute",
                        //   zIndex: 0,
                        display: {
                          xs: "none",
                          sm: "inline-block",
                        },
                        left: "-5rem",
                        bottom: "-5.5rem",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Stack
                      sx={{ zIndex: 1 }}
                      marginY={3}
                      direction="column"
                      spacing={1}
                    >
                      <Typography variant="h3">{label}</Typography>
                      <Typography variant="subtitle1">{subtitle}</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </HoverPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Stack justifyContent="center" alignItems="center" my={2}>
        <StyledButton
          // sx={{ fontSize: "30px" }}
          variant="contained"
          color="info"
          size="large"
          sx={{
            borderRadius: 300,
            color: "wheat",
            backgroundColor: "blue",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Test
        </StyledButton>
      </Stack>
    </Box>
  );
}

export default IntegrateProcess;

const allProcesses = [
  {
    label: "Choose Technology",
    subtitle:
      "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <AccessAlarmIcon {...props} />
    ),
  },
  {
    label: "Setup Workflows",
    subtitle:
      "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <SettingsIcon {...props} />
    ),
  },
  {
    label: "Learn from Data",
    subtitle:
      "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    IconComponent: (props: { sx: SxProps<Theme> }) => <DvrIcon {...props} />,
  },
  {
    label: "Scale Up",
    subtitle:
      "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <MultilineChartIcon {...props} />
    ),
  },
];
