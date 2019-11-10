import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Student from "./Student";
import World from "./World";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    textWrap: 'noWrap',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  feed: {
    textAlign: 'left'
  },
  newsItem: {
    padding: theme.spacing(1)
  }
}));

function App() {
  const classes = useStyles();
  const student = new Student();
  //const world = new World();
  return (
    <div className="App">
      <div className="container">
        <Grid container justify="center" className={classes.container}>
          <Grid item xs>
            <Paper className={`paper ${ classes.paper }`}>Credit Score: <p>{student.creditScore}</p></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`paper ${ classes.paper }`}>Account Balance: <p>${student.accountBalance}</p></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`paper ${ classes.paper }`}>Yearly Tuition Rate: <p>${student.yearlyTuitionRate}</p></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`paper ${ classes.paper }`}>
              Date:
              <World event="test"></World>
              <Button variant="contained" color="primary">Next Month</Button>
            </Paper>
          </Grid>
          <GridList className={classes.feed} cellHeight={160} cols={1}>
            <GridListTile>
            <Paper className={classes.newsItem}>
              <h2>Hello</h2>
              <p>Event Description</p>
            </Paper>
            </GridListTile>
            <GridListTile>
              <Paper className={classes.newsItem}>
              <h2>Hello</h2>
              <p>Event Description</p>
              </Paper>
            </GridListTile>
          </GridList>
        </Grid>
      </div>
    </div>
  );
}



export default App;
