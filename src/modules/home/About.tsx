import { Box, SxProps, Theme, Typography } from "@mui/material";
import AboutImg from "../../resources/work1/images/about_illustration.png";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Typography className="About-Title"><span>A</span>BOUT</Typography>
      <Box className="About-Title-under">私たちについて</Box>

      <img className="About-Content-Img" src={ AboutImg } alt="about-img"/>
      <Box className="About-Content-Text">副業人材を主体とした<span>「業務委託サービス」</span>です。<br className="About-br"></br>
        通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う<br className="About-br"></br>
        フリーランスエンジニアが<span>現在約100名</span>ほど所属しています。<p></p>
        副業を主体としているため長時間の拘束稼働はできませんが、<br className="About-br"></br>
        トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。<br className="About-br"></br>
        クライアント側のチームメンバーと共同して開発を行うこともできるため、<br className="About-br"></br>
        <span>クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。<p></p>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    backgroundColor: "rgba(34, 161, 185, 0.3);",
    textAlign: "center",
  },
  ".About-Title" : {
    paddingTop: "66px",
    fontFamily: "Avenir Next",
    fontSize: "64px",
    fontWeight: "500",
    lineHeight: "87px",
    letterSpacing: "0.18em",
  },
  ".About-Title-under" : {
    fontFamiry: "Noto Sans",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.1em",
  },
  ".About-Content-Img" : {
    width: "100%",
    height: {
      xs: "300px",
      md: "100%",
    },
    objectPosition: {
      xs: "20% 50%",
      md: "100 100",
    },
    objectFit: "cover",
    paddingTop: "30px",
  },
  "span" : {
    color: "#22A1B9",
    fontWeight: "700",
  },
  ".About-Content-Text" : {
    padding: "50px",
    fontFamiry: "Noto Sans",
    fontWeight: "400",
    fontSize: {
      xs: "16px",
      md: "18px",
    },
    lineHeight: "35px",
  },
  ".About-br" : {
    display: {
      xs: "none",
      md: "flex",
    }
  }
};