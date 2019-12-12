import React from 'react'
import { connect } from 'react-redux'
import { State } from './reducers'
import { getTodos } from './selectors/todos'
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

import Todo from './components/Todo'
import ITodo from './models/Todo'
import AddTodoDialog from './components/AddTodoDialog'

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


interface IProps {
  todos: ITodo[]
}

interface IState {}

class App extends React.Component<IProps, IState> {

  todos = [
    {
      id: '5dee4c10b1dadd22102a0c6d',
      status: 'planned',
      title: 'My 1st todo',
      elapsed: 0
    },
    {
      id: '5dee4d4cb1dadd22102a0c6f',
      status: 'inProgress',
      title: 'My 2nd todo',
      elapsed: 0
    },
  ];

  render() {
    const classes = useStyles()
    const { todos } = this.props
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
          {todos.map( todo => (
            <Todo key={todo.id} id={todo.id} status={todo.status} title={todo.title} elapsed={todo.elapsed}/>
          ))}
        </div>
        <AddTodoDialog />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

export default connect<any,any,any,any>(mapStateToProps)(App)
// export default withStyles(styles)(App);