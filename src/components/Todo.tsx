import React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Typography, 
  CardContent, 
  Card,
  Zoom} from '@material-ui/core';

import ITodo from '../models/Todo';
import TodoActionGroup from './TodoActionGroup'
import Stopwatch from './Stopwatch';

const styles = createStyles({
  card: {
    minWidth: 275,
    margin: 10
  },
  cardContent: {
    padding: '20px !important',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    margin: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

interface Props extends WithStyles<typeof styles> {
  todo: ITodo
  dispatchStart: (todoId: string) => void
  dispatchStop: (todoId: string, elapsed: number) => void
  dispatchDelete: (todoId: string) => void
}

interface State {
  timerId: number
  time: number
}

class Todo extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      timerId: 0,
      time: props.todo.elapsed
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  handleStart = () => {
    this.props.dispatchStart(this.props.todo.id);
    let now = Date.now() - this.props.todo.elapsed;
    let timer = window.setInterval(() => {
      this.setState({
        ...this.state,
        time: Date.now() - now
      });
    }, 1000, now);
    this.setState({
      ...this.state,
      timerId: timer
    })
  }

  handleStop = () => {
    console.log(this.props.todo.elapsed)
    this.props.dispatchStop(this.props.todo.id, this.state.time)
    clearInterval(this.state.timerId);
  };

  render() {
    const { classes }= this.props;
    const { todo, dispatchDelete } = this.props
  
    return (
      <Zoom in={true}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5" component="h2" className={classes.title}>
                  {todo.title}
                </Typography>
              </Grid>
              <Grid item>
                <Stopwatch time={this.state.time}/>
              </Grid>
              <Grid item>
                <TodoActionGroup active={todo.active !== undefined}
                onStart={() => this.handleStart()}
                onDelete={() => dispatchDelete(todo.id)}
                onStop={() => {this.handleStop()}}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Zoom>
    );
  }
}

export default withStyles(styles)(Todo);