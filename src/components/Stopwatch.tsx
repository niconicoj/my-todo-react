import React from "react";
import { 
  Typography,
  Box} from '@material-ui/core';

interface Props {
  time: number,
}

interface State {}


class Stopwatch extends React.Component<Props, State> {

  render() {
    let seconds = ("0" + (Math.floor(this.props.time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(this.props.time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(this.props.time / 3600000)).slice(-2);
    return (
      <Typography variant="h4" component="h3">
        <Box fontFamily="Monospace">
          {hours+":"+minutes+":"+seconds}
        </Box>
      </Typography>
    );
  }
}
export default Stopwatch;