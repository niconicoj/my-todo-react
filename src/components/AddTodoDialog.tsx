import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddTodoFAB from './AddtodoFAB';

interface Props {
  handleSubmit: (title: string) => void
}

interface State {
  open: boolean
  title: string
}

class AddTodoDialog extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {open: false, title: ''}
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClickOpen = () => {
    this.setState({open: true, title: ''})
  };

  handleClose = () => {
    this.setState({open: false, title: ''})
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!this.state.title.trim()) {
      return
    }
    this.props.handleSubmit(this.state.title)
    this.handleClose()
  }

  updateInput (value: string) {
    this.setState({...this.state, title: value})
  }

  render() {
    const { title } = this.state
    return (
      <div>
        <AddTodoFAB onClick={this.handleClickOpen}/>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a new Todo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Have something new you are working one ? create a new Todo here ! you just need to name it.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              value={title}
              onChange={e => this.updateInput(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary" variant="contained">
              Go !
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
 
}

export default AddTodoDialog