import * as React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

 const BasicTable = ({ head, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              head.map((cell, index) => (
                <TableCell key={index}>{cell}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map((value, indexRow) => (
                indexRow === 0 ? (
                  <TableCell key={indexRow} component="th" scope="row">
                    <img src={row.image} alt={row.title} />
                  </TableCell>
                ) : (
                  <TableCell key={indexRow} align="right">{value}</TableCell>)
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable