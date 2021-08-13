import { makeStyles } from "@material-ui/core"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    background: 'cornflowerblue',
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
    // background: "lightcyan",
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
    boxShadow: '0px -2px 15px 0px rgba(50, 50, 50, 0.3)'
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
    overflow: "auto"
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
    minHeight: 90,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 0,
    /////
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  userMessage: {
    alignSelf: "flex-end",
    background: '#64b5f6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 15,
  },
  robotMessage: {
    marginBottom: 20,
    display:"flex",
      justifyContent: "center",
      width: '100%'
  },
  messageHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: '100%',
  },
  messageTitle: {
    marginBottom: '10px'
  },
  messageText: {
    textAlign: "left"
  },
  drawerTitle: {
    marginTop: 18
  },
  startPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100vw',
    height: '100vh',
  },
  startPageTitle: {
    margin: '0 0 50px',
  },
  loginForm: {
    padding: '20px 15px',
    display: "flex",
    flexDirection: "column",
    width: 400,
  },
  loginFormInput: {
    margin: '0 0 20px'
  },
  loginFormButton: {
    margin: '40px 0 0'
  },
  loginFormTitle: {
    alignSelf: "flex-start",
    margin: '0 0 40px'
  }
}))

// const classes = useStyles();

export default useStyles