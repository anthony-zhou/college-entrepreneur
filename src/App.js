import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import World from "./World";

const useStyles = makeStyles(theme => ({
  container: {
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
    height: 140,
    width: 100
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function App() {
  const classes = useStyles();
  const student = new Student();
  //const world = new World();
  return (
    <div className="App">
      <div>
        <Grid class="container">
          <Grid item xs={3}>
            <Paper className={classes.paper}>Credit Score: {student.creditScore}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Account Balance: {student.accountBalance}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Yearly Tuition Rate: {student.yearlyTuitionRate}</Paper>
          </Grid>
          <Grid item>
            <Paper>
              <World event="test"></World>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}



export default App;
