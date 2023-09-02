import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { deposit } from '../actions/actions';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const validationSchema = Yup.object({
  amount: Yup.number()
    .typeError('Please type a number')
    .positive()
    .integer()
    .min(1)
    .required('Amount is required'),
});

export default function Deposit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { amount: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert('Rs ' + values.amount + ' is credited in your account');
      console.log(values.amount);
      dispatch(deposit(parseInt(values.amount)));
      console.log(values.amount);
      navigate('/');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Deposit Form
          </Typography>

          <TextField
            id="amount"
            name="amount"
            label="Amount to deposit"
            variant="standard"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" type="submit">
            Add Money
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
