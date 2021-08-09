import React, { useState } from "react"
import './App.css'
import GlobalContext from "./contexts/GlobalContext"
import {
  AppBar,
  Button,
  Drawer,
  makeStyles,
  useTheme,
  Toolbar,
  Typography,
  Paper,
  Divider,
  TextField
} from "@material-ui/core";

function App() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    appBar: {
      display: "flex",
      justifyContent: "space-between",
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    form: {
      background: '#fafafa',
      position: "fixed",
      bottom: 0,
      left: 0,
      width: '100%',
      padding: '4px 20px',
      boxSizing: "border-box",
      display: 'flex',
      alignItems: 'center',
    },
    formShift: {
      background: '#fafafa',
      position: "fixed",
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    input: {
      // marginLeft: theme.spacing(1),
      // flex: 1,
      width: '400px'
    },
    divider: {
      height: 28,
      margin: 4,
    },
    messagesContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      padding: '30px 4%',
      boxSizing: "border-box",
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginTop: 64,
      background: '#a6d4fa',
      width: '100%',
      height: `calc(100vh - 80px - 64px)`,
      overflow: "scroll"
    },
    messagesContainerShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // overflow: "scroll"
    },
    message: {
      margin:'0 0 20px',
      padding: '10px 20px',
      width: '55%',
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    userMessage: {
      alignSelf: "flex-end",
      background: '#64b5f6'
    },
    messageTitle: {
      marginBottom: '10px'
    },
    messageText: {
      textAlign: "left"
    }
  }))

  const classes = useStyles();
  const theme = useTheme();

//////////
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => setIsOpen(prev => !prev)

  return (
    <div className="App">
      <GlobalContext.Provider>
        <AppBar
          className={isOpen ? `${classes.appBar, classes.appBarShift}`: classes.appBar}
          position="fixed"
          color="secondary"
        >
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" noWrap>
              Chats
            </Typography>
            <Button
              variant="contained"
              onClick={handleDrawerToggle}
            >
              { isOpen ? ' Close' : 'Open' }
            </Button>
          </Toolbar>
        </AppBar>
        <div
          className={isOpen ? `${classes.messagesContainerShift} ${classes.messagesContainer}`: classes.messagesContainer}
        >
          <Paper className={`${classes.message}`} elevation={3}  >
            <Typography className={classes.messageTitle} variant={"h5"} component={"h5"}>Name</Typography>
            <Typography className={classes.messageText} variant={"subtitle1"} component={"p"} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Paper>
          <Paper className={`${classes.message}`} elevation={3}  >
            <Typography className={classes.messageTitle} variant={"h5"} component={"h5"}>Name</Typography>
            <Typography className={classes.messageText} variant={"subtitle1"} component={"p"} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Paper>
          <Paper className={`${classes.message} ${classes.userMessage}`} elevation={3}  >
            <Typography className={classes.messageTitle} variant={"h5"} component={"h5"}>Name</Typography>
            <Typography className={classes.messageText} variant={"subtitle1"} component={"p"} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Paper>
          <Paper className={`${classes.message}`} elevation={3}  >
            <Typography className={classes.messageTitle} variant={"h5"} component={"h5"}>Name</Typography>
            <Typography className={classes.messageText} variant={"subtitle1"} component={"p"} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Paper>
          <Paper className={`${classes.message}`} elevation={3}  >
            <Typography className={classes.messageTitle} variant={"h5"} component={"h5"}>Name</Typography>
            <Typography className={classes.messageText} variant={"subtitle1"} component={"p"} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Paper>
          <Paper className={`${classes.message} ${classes.userMessage}`} elevation={3}  >
            <Typography className={classes.messageTitle} variant={"h5"} component={"h5"}>Name</Typography>
            <Typography className={classes.messageText} variant={"subtitle1"} component={"p"} >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Paper>
        </div>
        <Paper
          component="form"
          className={isOpen ? `${classes.form} ${classes.formShift}`: classes.form}
        >
          <TextField
            variant={"outlined"}
            // id="standard-full-width"
            label="Введите сообщение"
            style={{ margin: 8 }}
            placeholder="Message"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type={"submit"} variant={"text"} size={"large"} color={"primary"}>Send</Button>
        </Paper>
        <Drawer
          open={isOpen}
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          variant="persistent"
        >
          <Typography variant={"h2"} component={"h2"}>RTTTTT</Typography>
          <Typography variant={"h2"} component={"h2"}>RTTTTT</Typography>
          <Typography variant={"h2"} component={"h2"}>RTTTTT</Typography>
          <Typography variant={"h2"} component={"h2"}>RTTTTT</Typography>
          <Typography variant={"h2"} component={"h2"}>RTTTTT</Typography>
          <Typography variant={"h2"} component={"h2"}>RTTTTT</Typography>
        </Drawer>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
