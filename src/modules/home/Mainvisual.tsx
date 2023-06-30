import { Box, SxProps, Theme } from "@mui/material";
import mainImg from "../../resources/work1/images/mainvisual_backgraound.png";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <Box className="Mainvisulual-Img">
        <Box className="Mainvisual-Title">
          <Box className="Maivisual-Title-1">安心<span>と</span>信頼<span className="Mainvisual-span-xs"><br className="Mainvisual-br" />×</span></Box>
          <Box className="Maivisual-Title-2">高度<span>な<br className="Mainvisual-br" /></span>技術力</Box>
          <Box className="Mainvisual-Title-Sub">高品質な開発を標準に</Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  ".Mainvisulual-Img" : {
    backgroundImage: `url(${mainImg})`,
    height: "700px",
    baxkgroundRepeat: "no-repeat",
    backgroundPosition: "cover",
    backgroundSize: "cover",
  },
  ".Mainvisual-Title" : {
    padding: {
      md: "277px 753px 92px 98px",
      xs: ""
    },
    color: "#fff",
    fontFamiry: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: {
      md: "96px",
      xs: "57px",
    },
    // lineHeight: "100px",
    letterSpacing: "0.1em",
    textDecoration: "underline 1px solid #fff",
    textUnderlinePosition: "under",
  },
  "span" : {
    fontSize: {
      xs: "38px",
      md: "64px",
    },
  },
  ".Mainvisual-span-xs" : {
    display : {
      xs: "none",
      md: "flex",
    },
  },
  ".Mainvisual-br" : {
    dispaly : {
      md: "none",
      xs: "flex",
    },
    // display: "none",
  },
  ".Mainvisual-Title-Sub" : {
    position: "absolute",
    color: "#fff",
    fontFamiry: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: {
      xs: "24px",
      md: "48px",
    },
    lineHeight: "150px",
    letterSpacing: "0.2em",
  }
};