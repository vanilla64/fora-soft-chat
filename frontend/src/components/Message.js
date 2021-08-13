import React, { useContext } from 'react'
import { Box, Paper, Typography } from "@material-ui/core"
import GlobalContext from "../contexts/GlobalContext"
import useStyles from "../utils/styles"

function Message({ data }) {
  const { id, name, lastName, createAt, text, isRobot } = data
  const { user } = useContext(GlobalContext) // context
  const { message, userMessage, robotMessage, messageHeading, messageTitle, messageText } = useStyles() // styles

  const robotMessageRender = (
    // <Box style={{
    //   display:"flex",
    //   justifyContent: "space-between",
    //   width: '100%'
    // }}>
      <Typography className={robotMessage} align={"center"} variant={"subtitle2"} component={"h3"}>{ text }</Typography>
    // </Box>

  )

  const userMessageRender = (
    <Paper
      elevation={2}
      className={id === user.id
        ?`${message} ${userMessage}`
        :`${message}`
      }
    >
      <Box className={messageHeading}>
        <Typography
          className={messageTitle}
          variant={"h5"}
          component={"h5"}>
          {name + ' ' + lastName}
        </Typography>
        <Typography>{ createAt }</Typography>
      </Box>
      <Typography
        className={messageText}
        variant={"subtitle1"}
        component={"p"} >
        {text}
      </Typography>
    </Paper>
  )

  return isRobot ? robotMessageRender : userMessageRender
    // <Paper
    //   elevation={3}
    //   className={id === user.id
    //     ?`${message} ${userMessage}`
    //     :`${message}`
    //   }
    // >
    //   <Box className={messageHeading}>
    //     <Typography
    //       className={messageTitle}
    //       variant={"h5"}
    //       component={"h5"}>
    //       {name + ' ' + lastName}
    //     </Typography>
    //     <Typography>{ createAt }</Typography>
    //   </Box>
    //   <Typography
    //     className={messageText}
    //     variant={"subtitle1"}
    //     component={"p"} >
    //     {text}
    //   </Typography>
    // </Paper>
  // )
}

export default Message
