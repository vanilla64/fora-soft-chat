import React from 'react'
import { Box, Typography } from "@material-ui/core"
import useStyles from "../utils/styles"
import LoginForm from "../components/LoginForm"

function StartPage() {
  const { startPage, startPageTitle } = useStyles() // styles

  return (
    <Box className={startPage} component={'section'}>
      <Typography className={startPageTitle} variant={"h1"} component={"h1"}>Добро пожаловать!</Typography>
      <LoginForm />
    </Box>
  )
}

export default StartPage
