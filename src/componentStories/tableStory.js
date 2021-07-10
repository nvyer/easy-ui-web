import React from "react";
import { TableContainer } from "easy-ui-react-lib";
import { Table } from "easy-ui-react-lib";
import { TableHead } from "easy-ui-react-lib";
import { TableBody } from "easy-ui-react-lib";
import { TableRow } from "easy-ui-react-lib";
import { TableCell } from "easy-ui-react-lib";
import { TableFooter } from "easy-ui-react-lib";
import { TablePagination } from "easy-ui-react-lib";
import "./styles.css";

const TableStory = () => {
  const table = `
  <TableContainer >
    <Table size="medium" >
         <TableHead >
             <TableRow selected>
                <TableCell>Dessert(100g)</TableCell>
                <TableCell >Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
                <TableCell >Carbs&nbsp;(g)</TableCell>
                <TableCell>Protein&nbsp;(g)</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
             {rows.map((row) => (
                 <TableRow hover key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                 </TableRow>
                  ))}
         </TableBody>
            <TableFooter>
                <TablePagination
                  onPrevPageonClick={() => console.log("prev")}
                  nextPageIconClick={() => console.log("next")}
                  rowsPerPageOptions={[5]} />
            </TableFooter>
    </Table>
</TableContainer>
`;

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          TableContainer props: className, onClick
          <br />
          <br />
          Table props: className, size(small, large), onClick
          <br />
          <br />
          TableHead props: className, onClick
          <br />
          <br />
          TableBody props: className, onClick
          <br />
          <br />
          TableRow props: className, onClick, hover, selected
          <br />
          <br />
          TableCell props: className, onClick
          <br />
          <br />
          Table pagination props: className, rowsPerPageOptions,
          nextPageIconClick, onPrevPageonClick
        </p>
        <p className="component-title">Basic Table</p>
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow selected>
                <TableCell>Dessert(100g)</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
                <TableCell>Carbs&nbsp;(g)</TableCell>
                <TableCell>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TablePagination
                onPrevPageonClick={() => console.log("prev")}
                nextPageIconClick={() => console.log("next")}
                rowsPerPageOptions={[5, 2]}
              ></TablePagination>
            </TableFooter>
          </Table>
        </TableContainer>
        <pre style={{ marginTop: "60px" }} className="component-code long">
          {table}
        </pre>
      </div>
    </>
  );
};

export default TableStory;
