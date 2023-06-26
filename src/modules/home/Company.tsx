import { Box, SxProps, Theme, Typography} from "@mui/material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function createData(
  names: string[],
  contents: string,
) {
  return { names, contents};
}

const rows = [
  createData(["会社名"], "株式会社テクノスタンダード"),
  createData(['設立日'], "2022年6月"),
  createData(["所在地"] , "東京都渋谷区渋谷3-10-15 YKビル7F"),
  createData(['資本金'], "100万"),
  createData(['代表取締役'], "加藤拓也"),
  createData(['取引銀行',"取引先"], "三菱UFJ銀行`<br />`SBIネット銀行"),
  // createData('取引先', "SBIネット銀行"),
  // createData('', "株式会社バンタン"),
  // createData('', "株式会社ジョブクラウン"),
  // createData('', "株式会社メルメクス"),
  // createData('', "マルナカ合同会社"),
];

export const Company = () => {
  return (
    <Box className="Company" sx={sx}>
      <Typography className="Company-Title"><span>A</span>BOUT</Typography>
      <TableContainer >
      <Table className="Company-Table">
        <TableBody className="Company-Table-Body">
          {rows.map((row) => (
            <TableRow className="Company-Table-Row">
              <TableCell component="th" scope="row"> {row.names.map((name) =>
              { name<br /> }
              )}
            </TableCell>
              <TableCell>{row.contents}</TableCell>
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
    backgroundColor: "#22A1B9"
  },
  ".Company-Title" : {
    paddingTop: "72px",
    textAlign: "center",
    color: "#FFFFFF99",
    fontFamiry: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "68px",
    lineHeight: "93px",
    letterSpacing: "0.15em",
  },
  ".Company-Table" : {
    align: "center",
  },
  ".Company-Table-Body" : {
    align: "center",
  },
  ".Company-Table-Row" : {
    "&:last-child td, &:last-child th": { border: 0 },
  }
};