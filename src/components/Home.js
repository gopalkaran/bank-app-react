import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const balance = useSelector((state) => state.balance);
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Hello User
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Your Balance is {balance}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate('/statement')}>
            Statement
          </Button>
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
