import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

class Student {
  constructor() {
    this.creditScore = 700;
    this.accountBalance = 0;
    this.yearlyTuitionRate = 17000;
  }

}

function App() {
  const classes = useStyles();
  const student = new Student();
  return (
    <div className="App">
      <div>
        <Grid>
          <Grid item sm={5}>
            <Paper className={classes.paper}>Credit Score: {student.creditScore}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Account Balance: {student.accountBalance}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Yearly Tuition Rate: {student.yearlyTuitionRate}</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}



export default App;
