import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 1890, "10 OCT 2022", "Approved"),
  createData('Ice cream sandwich', 1237, "10 OCT 2022", "Pending"),
  createData('Eclair', 2262,"10 OCT 2022", "Approved"),
  createData('Cupcake', 2305,"10 OCT 2022", "Delivered"),
  createData('Gingerbread', 5356, "10 OCT 2022", "Approved"),
  createData('Vanilla IceCream', 3356, "10 OCT 2022", "Cancelled"),
];

const makeStyles = (status)=>{
    if(status === 'Approved')
    {
        return{
            background: "lightgreen",
            color : "white",
        }
    }
    else  if(status === 'Pending')
    {
        return{
            background: "yellow",
            color : "white",
        }
    }
    else  if(status === 'Delivered')
    {
        return{
            background: "green",
            color : "white",
        }
    }
    else {
        return{
            background: "red",
            color : "white",
        }
    }
}

export default function BasicTable() {
  return (
    <div className="Table">
    <h3>Recent Orders</h3>
    <TableContainer
        style={{boxShadow: " 0px 10px 20px 0px #4158D0 "}}
    component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Tracking-ID</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Status</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.trackingId}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
