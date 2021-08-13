import React, { useContext } from 'react'
import { Button, Paper, TextField } from "@material-ui/core"
import GlobalContext from "../contexts/GlobalContext"
import useStyles from "../utils/styles"

function MessageForm() {
  const { user, messageFormValue, isSidebarOpen, handlers } = useContext(GlobalContext) // context
  const { handleFormMessageChange, handleFormMessageSubmit } = handlers // get needed handlers
  const { form, formShift } = useStyles() // styles

  return (
    <Paper
      onChange={handleFormMessageChange}
      onSubmit={handleFormMessageSubmit}
      component="form"
      className={isSidebarOpen ? `${form} ${formShift}`: form}
    >
      <TextField
        required
        variant={"outlined"}
        id="text"
        name="text"
        value={messageFormValue.text}
        label={user.name}
        style={{ margin: 8 }}
        placeholder="Введите сообщение"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button type={"submit"} variant={"text"} size={"large"} color={"primary"}>Send</Button>
    </Paper>
  )
}

export default MessageForm
