import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import HoverPaper from "./HoverPaper";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ReceiptIcon from "@mui/icons-material/Receipt";
function Services() {
  return (
    <Box
      component="section"
      sx={{
        color: (theme) =>
          theme.palette.mode === "light" ? "inherit" : "white",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#00000008" : "#191717",
        paddingY: "5rem",
      }}
    >
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Grid container item xs={12} md={6} spacing={3}>
            {allServices.map(({ label, IconComponent }) => (
              <Grid key={label} item xs={12} sm={6} md={6}>
                <HoverPaper
                  sx={{
                    paddingY: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  elevation={2}
                  hoverElevation={15}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    padding={2}
                    sx={{
                      borderRadius: "50%",
                      border: (theme) =>
                        `2px solid ${theme.palette.primary.main}`,
                      backgroundColor: (theme) => theme.palette.primary.light,
                    }}
                  >
                    <IconComponent
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </Stack>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {label}
                  </Typography>
                </HoverPaper>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" alignItems="start" spacing={2}>
              <Typography variant="h2">
                Made by business people for business people
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no,
                has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,
              </Typography>
              <Typography variant="subtitle1">
                vim quidam blandit voluptaria no, has eu lorem convenire
                incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu.
                Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam
                nostrum ut per.
              </Typography>
              <Button
                variant="contained"
                sx={{ textTransform: "none" }}
                color="primary"
              >
                Try it free
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;

const allServices = [
  {
    label: "Payment Gateway",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <CreditCardIcon {...props} />
    ),
  },
  {
    label: "invoicing",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <AccountBalanceIcon {...props} />
    ),
  },
  {
    label: "cloud sync",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <CloudDoneIcon {...props} />
    ),
  },
  {
    label: "customer records",
    IconComponent: (props: { sx: SxProps<Theme> }) => (
      <ReceiptIcon {...props} />
    ),
  },
];
