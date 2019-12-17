import React from "react";
import { 
  Typography,
  Box} from '@material-ui/core';

interface Props {
  timerStart?: number,
}

interface State { 
  timerTime: number
}


class Stopwatch extends React.Component<Props, State> {

  timer!: NodeJS.Timeout;

  constructor(props: Props) {
    super(props)
    this.state = {
      timerTime: 0
    };
    this.startTimer = this.startTimer.bind(this)

    if(props.timerStart !== undefined) {
      this.startTimer(props.timerStart)
    }
  }

  componentDidUpdate() {
    if (this.props.timerStart !== undefined) {
      this.startTimer(this.props.timerStart)
    } else {
      this.stopTimer()
    }
  }

  startTimer = (timerStart: number) => {
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - timerStart
      });
    }, 10, timerStart);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <Typography variant="h4" component="h3">
        <Box fontFamily="Monospace">
          {this.state.timerTime}
        </Box>
      </Typography>
    );
  }
}
export default Stopwatch;