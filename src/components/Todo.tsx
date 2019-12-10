import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { 
  IconButton, 
  Grid, 
  Typography, 
  CardContent, 
  Card,
  ButtonGroup,
  Divider} from '@material-ui/core';
import { PlayCircleOutline, MoreVertTwoTone, CheckCircleOutline } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

import { TodoProps } from '../types/Todo';

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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  divider: {
    alignSelf: 'stretch',
    height: 'auto',
    minWidth: '0px'
  },
  actionBox: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '50px'
  }
}));

const Todo: FunctionComponent<TodoProps> = ({...todo}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h2">
              {todo.title}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup size="large" aria-label="small outlined button group" className={classes.actionBox}>
              <IconButton aria-label="start">
                <PlayCircleOutline fontSize="large" color="secondary" />
              </IconButton>
              <Divider orientation="vertical" className={classes.divider}/>
              <IconButton aria-label="actions">
                <CheckCircleOutline fontSize="large" color="primary"/>
              </IconButton>
              <Divider orientation="vertical" className={classes.divider}/>
              <IconButton aria-label="actions">
                <MoreVertTwoTone fontSize="large"/>
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Todo;