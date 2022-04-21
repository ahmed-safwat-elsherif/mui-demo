import { Paper, SxProps, Theme } from "@mui/material";
import { useState } from "react";

type HoverPaperProps = {
  elevation: number;
  hoverElevation: number;
  transitionTime?: number; // in seconds
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

const HoverPaper = ({
  elevation,
  hoverElevation,
  children,
  sx,
  transitionTime,
}: HoverPaperProps) => {
  const [elev, setElev] = useState(elevation);

  return (
    <Paper
      sx={{ transition: `ease-in-out all ${transitionTime || 0.2}s`, ...sx }}
      elevation={elev}
      onMouseEnter={() => setElev(hoverElevation)}
      onMouseLeave={() => setElev(elevation)}
    >
      {children}
    </Paper>
  );
};

export default HoverPaper;
