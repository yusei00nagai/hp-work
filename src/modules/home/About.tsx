import { Box, SxProps, Theme } from "@mui/material";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      アバウト
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
  },
};