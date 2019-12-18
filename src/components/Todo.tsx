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
  handleStart: (todoId: string) => void
  handleStop: (todoId: string, elapsed: number) => void
  handleDelete: (todoId: string) => void
}

interface State {

}

class Todo extends React.Component<Props, State> {

  render() {
    const { classes }= this.props;
    const { todo, handleStart, handleStop, handleDelete } = this.props
  
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
                <Stopwatch timerStart={todo.active} />
              </Grid>
              <Grid item>
                <TodoActionGroup active={todo.active !== undefined}
                onStart={() => handleStart(todo.id)}
                onDelete={() => handleDelete(todo.id)}
                onStop={() => {handleStop(todo.id, 1)}}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Zoom>
    );
  }
}

export default withStyles(styles)(Todo);