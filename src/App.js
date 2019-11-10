import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Dashboard from "./Dashboard";
import Student from "./Student";

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
    <Dashboard classes={classes} student={student}></Dashboard>
  );
}



export default App;
