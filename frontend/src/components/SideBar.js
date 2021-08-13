import React, {Fragment, useContext} from 'react'
import { Divider, Drawer, Typography } from "@material-ui/core"
import GlobalContext from "../contexts/GlobalContext"
import useStyles from "../utils/styles"

function SideBar() {
  const { users, isSidebarOpen } = useContext(GlobalContext) // context
  const { drawer, drawerPaper, drawerTitle } = useStyles() //styles

  return (
    <Drawer
      open={isSidebarOpen}
      className={ drawer }
      classes={{ paper: drawerPaper }}
      variant="persistent"
    >
      <Typography
        className={ drawerTitle }
        variant={"h6"}
        component={"h6"}>
        Пользователи в сети
      </Typography>
      { users &&
        users.map((user, index) => (
          <Fragment key={index}>
            <Typography variant={"subtitle1"} component={"p"}>{ `${user.name} ${user.lastName}` }</Typography>
            <Divider />
          </Fragment>
        ))
      }
    </Drawer>
  )
}

export default SideBar
