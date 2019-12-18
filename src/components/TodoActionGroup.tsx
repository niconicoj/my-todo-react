import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { 
  IconButton,
  Tooltip,
  Zoom} from '@material-ui/core';
import { PlayCircleOutline,
  CheckCircleOutline,
  DeleteForeverOutlined,
PauseCircleOutline } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => createStyles({
  actionBox: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '50px',
    display: 'inline-flex'
  }
}));

interface Props {
  active: boolean
  onDelete: React.MouseEventHandler
  onStart: React.MouseEventHandler
  onStop: React.MouseEventHandler
}

const TodoActionGroup: FunctionComponent<Props> = ({...props}) => {
  const classes = useStyles();
  const { active, onDelete, onStart, onStop } = props

  return (
    <div className={classes.actionBox}>
      <Tooltip TransitionComponent={Zoom} title='start'>
        <IconButton aria-label="start" onClick={active ? onStop : onStart}>
          { active ? <PauseCircleOutline fontSize="large" color="primary" /> : <PlayCircleOutline fontSize="large" color="primary" /> }
        </IconButton>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title='done'>
        <IconButton aria-label="actions">
          <CheckCircleOutline fontSize="large" color="secondary" />
        </IconButton>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="delete">
        <IconButton aria-label="delete" onClick={onDelete}>
          <DeleteForeverOutlined fontSize="large" color="error" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default TodoActionGroup
            