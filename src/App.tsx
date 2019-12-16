import React from 'react'
import {
  createMuiTheme,
  createStyles,
  ThemeProvider,
  makeStyles,
  Theme
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import AddTodoContainer from './containers/AddTodoContainer'
import TodoContainer from './containers/TodoContainer'

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#ab47bc' },
    secondary: { main: '#8bc34a' },
    error: { main: '#ef5350' }
  },
  typography: {
    fontFamily: [
      'Rubik',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Todo
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <TodoContainer/>
      </div>
      <AddTodoContainer />
    </ThemeProvider>
  )
}

export default App;