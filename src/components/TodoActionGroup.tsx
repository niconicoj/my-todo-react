import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { 
  IconButton, 
  ButtonGroup,
  Divider,
  Tooltip,
  Zoom} from '@material-ui/core';
import { PlayCircleOutline, CheckCircleOutline, DeleteForeverOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
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

const TodoActionGroup: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <ButtonGroup size="large" aria-label="small outlined button group" className={classes.actionBox}>
      <Tooltip TransitionComponent={Zoom} title='start'>
        <IconButton aria-label="start">
          <PlayCircleOutline fontSize="large" color="primary" />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" className={classes.divider}/>
      <Tooltip TransitionComponent={Zoom} title='done'>
        <IconButton aria-label="actions">
          <CheckCircleOutline fontSize="large" color="secondary" />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" className={classes.divider}/>
      <Tooltip TransitionComponent={Zoom} title="Delete">
        <IconButton aria-label="actions">
          <DeleteForeverOutlined fontSize="large" color="error" />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
}

export default TodoActionGroup
            