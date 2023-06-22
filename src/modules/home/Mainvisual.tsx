import { Box, SxProps, Theme } from "@mui/material";
import mainImg from "../../resources/work1/images/mainvisual_backgraound.png";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <Box className="Mainvisulual-Img">
        <Box className="Mainvisual-Title">
          <Box className="Maivisual-Title-1">安心<span>と</span>信頼<span>×</span></Box>
          <Box className="Maivisual-Title-2">高度<span>な</span>技術力</Box>
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
    padding: "277px 753px 92px 98px",
    color: "#fff",
    fontFamiry: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "96px",
    lineHeight: "100px",
    letterSpacing: "0.1em",
    textDecoration: "underline 1px solid #fff",
    textUnderlinePosition: "under",
  },
  "span" : {
    fontSize: "64px",
  },
  ".Mainvisual-Title-Sub" : {
    position: "absolute",
    // padding: "542px 660px 92px 98px",
    color: "#fff",
    fontFamiry: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "48px",
    lineHeight: "150px",
    letterSpacing: "0.2em",
  }
};