import { Box, SxProps, Theme, Typography} from "@mui/material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { ReactNode } from "react";

function createData(
  names: ReactNode,
  contents: ReactNode,
) {
  return { names, contents};
}

const rows = [
  createData(<Box>会社名</Box>, <Box>株式会社テクノスタンダード</Box>),
  createData(<Box>設立日</Box>, <Box>2022年6月</Box>),
  createData(<Box>所在地</Box>, <Box>東京都渋谷区渋谷3-10-15 YKビル7F</Box>),
  createData(<Box>資本金</Box>, <Box>100万</Box>),
  createData(<Box>代表取締役</Box>, <Box>加藤拓也</Box>),
  createData(<Box>取引銀行<br />取引先</Box>, <Box>三菱UFJ銀行<br />SBIネット銀行<br />株式会社バンタン<br />株式会社ジョブクラウン<br />株式会社メルメクス<br />マルナカ合同会社</Box>),
];

export const Company = () => {
  return (
    <Box className="Company" sx={sx}>
      <Typography className="Company-Title"><span>C</span>OMPANY</Typography>
      <Box className="Company-Title-Sub">会社概要</Box>
      <TableContainer className="Company-TableContainer">
        <Table className="Company-Table">
          <TableBody className="Company-Table-Body">
            {rows.map((row) => (
              <TableRow className="Company-Table-Row">
                <TableCell className="Company-Table-Cell-1" component="th" scope="row"> {row.names}</TableCell>
                <TableCell className="Company-Table-Cell-2">{row.contents}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Company" : {
    width: "100%",
    backgroundColor: "#22A1B9",
    textAlign: "center",
  },
  ".Company-Title" : {
    paddingTop: "72px",
    color: "#FFFFFF99",
    fontFamiry: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: {
      xs: "40px",
      md: "68px",
    },
    lineHeight: "93px",
    letterSpacing: "0.15em",
  },
  "span" : {
    color: "#fff",
  },
  ".Company-Title-Sub" : {
    marginBottom: "74px",
    fontFamiry: "Noto Sans",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.1em",
    color: "#fff",
  },
  ".Company-TableContainer" : {
  },
  ".Company-Table" : {
    width: "880px",
    margin: "0 auto",
  },
  ".Company-Table-Body" : {
  },
  ".Company-Table-Row" : {
    "&:last-child td, &:last-child th": { border: 0 },
  },
  ".Company-Table-Cell-1" : {
    textAlign: "left",
    color: "#fff",
    fontFamiry: "Noto Sans JP",
    fontSize: "20px",
    display: "flex",
    alignItems: "top",
  },
  ".Company-Table-Cell-2" : {
    textAlign: "left",
    color: "#fff",
    fontFamiry: "Noto Sans JP",
    fontSize: "20px",
  },
};