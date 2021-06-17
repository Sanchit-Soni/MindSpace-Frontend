import React, { useState, useEffect } from "react";
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
import Graph2 from "../screens/Graphs";
import Moment from "react-moment";
import { GetDataById } from "../../Firebase/writemood";
import { Getdata } from "../../Firebase/api";

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
    width: 900,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [switcher, setSwitcher] = useState("table");
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [wymData, setWymData] = useState();
  const [face, setFace] = useState();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [row1, setRow1] = useState();
  const [value1, setValue1] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }

    const uid = `${profile.uid}`;

    (async () => {
      const datas = await GetDataById(uid);
      if (datas) {
        setWymData(datas);
      }
      console.log(datas);
      // setRow1(datas);
      setLoading(false);
    })();
  }, [loading, profile.uid]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClick = (value1) => {
    setValue1(value1);
    setSwitcher("bar");
  };
  const handleClick2 = (value1) => {
    // setValue1(value1);
    setSwitcher("circle");
  };
  useEffect(() => {
    if (localStorage.getItem("user-details") !== null) {
      let values = localStorage.getItem("user-details");
      let newVal = JSON.parse(values);
      setProfile(newVal.user);
    }
    const uid = `${profile.uid}`;
    console.log(wymData);
    (async () => {
      const data2 = await Getdata(uid);
      if (data2) {
        setFace(data2);
      }
      console.log(data2);
      setLoading(false);
    })();
    console.log(face);
  }, [wymData]);
  return switcher === "table" && wymData && face ? (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <h1>WriteYourMood Statistics</h1>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Report ID</TableCell>
                <TableCell align="center">Date&nbsp;</TableCell>
                <TableCell align="center">Report&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wymData &&
                wymData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    (row) => (
                      <TableRow key={row.id}>
                        {/* <TableCell component="th" scope="row">
                        {row.SrNo}
                      </TableCell> */}
                        <TableCell align="center">
                          {profile.displayName}
                        </TableCell>

                        <TableCell align="center">{row.key}</TableCell>

                        <TableCell align="center">
                          <Moment format="DD MMMM YYYY" withTitle>
                            {row.date}
                          </Moment>{" "}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            onClick={() => handleClick(row.values)}
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
          rowsPerPageOptions={[3, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <h1>FaceSnap Statistics</h1>
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
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Report ID</TableCell>
                <TableCell align="center">Date&nbsp;</TableCell>
                <TableCell align="center">Report&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {face &&
                face
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((des) => (
                    <TableRow key={des.id}>
                      <TableCell align="center">
                        {profile.displayName}
                      </TableCell>
                      <TableCell align="center">{des.key}</TableCell>

                      <TableCell align="center">
                        <Moment format="DD MMMM YYYY" withTitle>
                          {des.date}
                        </Moment>{" "}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                          onClick={() => handleClick2(des.values)}
                        >
                          Report
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  ) : switcher === "bar" ? (
    <>
      <Graphs
        setSwitcher={setSwitcher}
        sentiments={wymData.sentiments}
        values={value1}
      />
    </>
  ) : switcher === "circle" ? (
    <>
      <Graph2 setSwitcher={setSwitcher} />
    </>
  ) : (
    <h1>Loading</h1>
  );
}
