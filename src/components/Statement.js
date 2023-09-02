import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Statement() {
  const statement = useSelector((state) => state.statement);
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Account Statement
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Mode</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {statement.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.mode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate('/deposit')}>
            Deposit
          </Button>
          <Button size="small" onClick={() => navigate('/withdraw')}>
            Withdraw
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
