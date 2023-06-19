// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/home/Header";
import { Mainvisual } from "../modules/home/Mainvisual";
import { About } from "../modules/home/About";
import { Service } from "../modules/home/Serivice";
import { Company } from "../modules/home/Company";
import { Footer } from "../modules/home/Footer";

// サンプルページのメインの実装
export const HomePage = () => {
  return (
    <Box className="Homepage" sx={sx}>
      <Header />
      <Mainvisual />
      <About />
      <Service />
      <Company />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.HomePage": {
    width: "100%",    
  }
};
