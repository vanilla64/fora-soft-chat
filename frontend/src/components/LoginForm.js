import React, { useContext } from 'react'
import { Button, Paper, TextField, Typography } from "@material-ui/core"
import useStyles from "../utils/styles"
import GlobalContext from "../contexts/GlobalContext"

function LoginForm() {
  const { loginForm, loginFormInput, loginFormButton, loginFormTitle } = useStyles() // styles
  const { loginFormValues, handlers } = useContext(GlobalContext)
  const { handleLoginFormChange, handleLoginFormSubmit } = handlers

  return (
    <Paper
      onSubmit={handleLoginFormSubmit}
      onChange={handleLoginFormChange}
      className={loginForm}
      component={'form'}
      elevation={3}>
      <Typography
        className={loginFormTitle}
        variant={"h5"}
        component={"h5"}>Введите данные</Typography>
      <TextField
        required
        className={loginFormInput}
        id="name"
        name="name"
        label="Имя"
        value={loginFormValues.name}
        placeholder="Введите имя"
        multiline
      />
      <TextField
        required
        className={loginFormInput}
        id="lastName"
        name="lastName"
        label="Фамилия"
        value={loginFormValues.lastName}
        placeholder="Введите фамилию"
        multiline
      />
      <Button className={loginFormButton} type={"submit"} variant="outlined" color="primary">Send</Button>
    </Paper>
  )
}

export default LoginForm
