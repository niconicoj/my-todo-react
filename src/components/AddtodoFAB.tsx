import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) => createStyles({
  addFab: {
    position: 'fixed',
    left: '50%',
    bottom: '5vh',
    transform: 'translateX(-50%)'
  }
}));

const AddTodoFAB: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Fab variant="extended" color="primary" aria-label="add" className={classes.addFab}>
      <AddIcon />
      New Todo
    </Fab>
  )
}

export default AddTodoFAB;