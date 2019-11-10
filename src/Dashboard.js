import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import World from "./World";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {classes: props.classes, student: props.student};
  }
  render() {
    return (
    <div className="App">
      <div className="container">
        <Grid container justify="center" className={this.state.classes.container}>
          <Grid item xs>
            <Paper className={`paper ${ this.state.classes.paper }`}>Credit Score: <p>{this.state.student.creditScore}</p></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`paper ${ this.state.classes.paper }`}>Account Balance: <p>${this.state.student.accountBalance}</p></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`paper ${ this.state.classes.paper }`}>Yearly Tuition Rate: <p>${this.state.student.yearlyTuitionRate}</p></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={`paper ${ this.state.classes.paper }`}>
              Date:
              <World event="test"></World>
              <Button variant="contained" color="primary">Next Month</Button>
            </Paper>
          </Grid>
          <GridList className={this.state.classes.feed} cellHeight={160} cols={1}>
            <GridListTile>
            <Paper className={this.state.classes.newsItem}>
              <h2>Hello</h2>
              <p>Event Description</p>
            </Paper>
            </GridListTile>
            <GridListTile>
              <Paper className={this.state.classes.newsItem}>
              <h2>Hello</h2>
              <p>Event Description</p>
              </Paper>
            </GridListTile>
          </GridList>
        </Grid>
      </div>
    </div>);
  }
}

export default Dashboard;
