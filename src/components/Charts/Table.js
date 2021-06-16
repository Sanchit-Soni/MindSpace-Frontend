import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Graphs from "../screens/Graphs";

function createData(SrNo, id, Name, Entry, Date) {
  const density = id / SrNo;
  //   return { name, code, population, size, density };
  return { SrNo, id, Name, Entry, Date, density };
}

const rows = [
  createData(1, 1001, "Sanchit", "Entry1", "16th June"),
  createData(2, 1002, "Test1", "Entry2", "16th June"),
  createData(3, 1003, "Test User2", "Entry3", "16th June"),
  createData(4, 1004, "Test User3", "Entry4", "16th June"),
  createData(5, 1005, "Test Uesr4", "Entry5", "16th June"),

  //   createData("China", "CN", 1403500365, 9596961),
  //   createData("Italy", "IT", 60483973, 301340),
  //   createData("United States", "US", 327167434, 9833520),
  //   createData("Canada", "CA", 37602103, 9984670),
  //   createData("Australia", "AU", 25475400, 7692024),
  //   createData("Germany", "DE", 83019200, 357578),
  //   createData("Ireland", "IE", 4857000, 70273),
  //   createData("Mexico", "MX", 126577691, 1972550),
  //   createData("Japan", "JP", 126317000, 377973),
  //   createData("France", "FR", 67022000, 640679),
  //   createData("United Kingdom", "GB", 67545757, 242495),
  //   createData("Russia", "RU", 146793744, 17098246),
  //   createData("Nigeria", "NG", 200962417, 923768),
  //   createData("Brazil", "BR", 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 540,
    width: 800,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [switcher, setSwitcher] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSwitcher(true);
  };

  return switcher === false ? (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          {/* <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead> */}
          <TableHead>
            <TableRow>
              <TableCell>SrNo</TableCell>
              <TableCell align="center">Uid</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Entries&nbsp;</TableCell>
              <TableCell align="center">Dates&nbsp;</TableCell>
              <TableCell align="center">Reports&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (row) => (
                  <TableRow key={row.SrNo}>
                    <TableCell component="th" scope="row">
                      {row.SrNo}
                    </TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.Name}</TableCell>
                    <TableCell align="center">{row.Entry}</TableCell>
                    <TableCell align="center">{row.Date}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        onClick={handleClick}
                      >
                        Reports
                      </Button>
                    </TableCell>

                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                )

                // return (
                //   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                //     {columns.map((column) => {
                //       const value = row[column.id];
                //       return (
                //         <>
                //           <TableCell key={column.id} align={column.align}>
                //             {column.format && typeof value === "number"
                //               ? column.format(value)
                //               : value}
                //           </TableCell>
                //         </>
                //       );
                //     })}
                //   </TableRow>
                // );
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  ) : (
    <>
      <Graphs setSwitcher={setSwitcher} />
    </>
  );
}
