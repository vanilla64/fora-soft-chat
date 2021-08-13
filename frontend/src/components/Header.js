import React, { useContext } from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from "@material-ui/core"
import GlobalContext from "../contexts/GlobalContext"
import useStyles from "../utils/styles"

function Header() {
  const { user, isSidebarOpen, handlers } = useContext(GlobalContext) // context
  const { name } = user
  const { handleDrawerToggle, handleExitClick } = handlers // get needed handlers
  const { appBar, appBarShift, toolbar } = useStyles() // styles

  return (
    <AppBar
      className={isSidebarOpen ? `${appBar} ${appBarShift}`: appBar}
      position="fixed"
      color="secondary"
    >
      <Toolbar className={toolbar}>
        <Typography variant="h5" noWrap>Привет, {name}!</Typography>
        <Box>
          <Button variant="contained" onClick={handleExitClick}>
            Exit chat
          </Button>
          <Button style={{marginLeft: 10}} variant="contained" onClick={handleDrawerToggle}>
            { isSidebarOpen ? ' Close menu' : 'Open menu' }
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
