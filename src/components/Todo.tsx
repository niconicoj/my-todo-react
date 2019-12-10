import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TodoProps } from '../types/Todo';
import { 
  IconButton, 
  Grid, 
  Typography, 
  CardContent, 
  CardActions, 
  Card } from '@material-ui/core';
import { PlayCircleOutline } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Todo: FunctionComponent<TodoProps> = ({...todo}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={11}>
            <Typography variant="h5" component="h2">
              {todo.title}
            </Typography>
          </Grid>
          <Grid item sm={1}>
            <IconButton aria-label="start">
              <PlayCircleOutline fontSize='large'/>
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Todo;