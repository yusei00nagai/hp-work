import { Box, SxProps, Theme } from "@mui/material";

export const Service = () => {
  return (
    <Box className="Service" sx={sx}>
      サービス
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Service" : {
    width: "100%",
  },
};