import React, { useContext } from 'react'
import { List } from "@material-ui/core"
import GlobalContext from "../contexts/GlobalContext"
import useStyles from "../utils/styles"

function MessageList({ children }) {
  const { isSidebarOpen, messageListRef } = useContext(GlobalContext) // context
  const { messagesContainer, messagesContainerShift } = useStyles() // styles

  return (
    <List
      component="ul"
      ref={messageListRef}
      className={
        isSidebarOpen
          ? `${messagesContainerShift} ${messagesContainer}`
          : messagesContainer}
    >
      { children }
    </List>
  )
}

export default MessageList
