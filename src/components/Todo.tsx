import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Typography, 
  CardContent, 
  Card,
  Zoom} from '@material-ui/core';

import ITodo from '../models/Todo';
import TodoActionGroup from './TodoActionGroup'
import Stopwatch from './Stopwatch';

const useStyles = makeStyles((theme: Theme) => createStyles({
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
}));

interface Props {
  todo: ITodo,
  onDelete: React.MouseEventHandler
  onStart: React.MouseEventHandler
  display: boolean
}

const Todo: FunctionComponent<Props> = ({...props}) => {
  const classes = useStyles();
  const {todo, onDelete, onStart, display} = props

  return (
    <Zoom in={display}>
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
              <TodoActionGroup onStart={onStart} onDelete={onDelete}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Zoom>
  );
}

export default Todo;