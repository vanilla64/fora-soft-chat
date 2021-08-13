import React, { useEffect, useState, useRef, useCallback } from "react"
import './App.css'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import io from "socket.io-client"
import GlobalContext from "./contexts/GlobalContext"
import ROUTES_MAP from "./utils/ROUTES_MAP"
import ChatPage from "./pages/ChatPage"
import StartPage from "./pages/StartPage"
import { setDate } from "./utils/setDate"

const socket = io.connect("http://localhost:4000")

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    id: '',
  })
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [messageFormValue, setMessageFormValue] = useState({ text: '' })
  const [loginFormValues, setLoginFormValues] = useState({
    name: '',
    lastName: ''
  })

  const { MAIN, START, CHAT } = ROUTES_MAP

  const history = useHistory()

  useEffect(() => {
    socket.on('connection', (id) => {
      setUser(prev => {
        return { ...prev, id }
      })
    })

    socket.on('newUser', (data) => setUsers(data.users))
    socket.on('userLeave', (data) => setUsers(data.users))
    socket.on('newMessage', (data) => setMessages(prev => [...prev, data]))
    // eslint-disable-next-line
  }, [])

  const messageListRef = useRef() // message list

  const scrollToBottom = useCallback(() => { // scroll to bottom before add message in chat
    if (!isLoggedIn) return
    setTimeout(() => {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }, 200)
  }, [isLoggedIn])

  useEffect(() => {
    scrollToBottom()
    // eslint-disable-next-line
  }, [messages])

  const handleDrawerToggle = () => setIsSidebarOpen(prev => !prev) // drawer open toggle

  const handleExitClick = () => {
    socket.emit('userLeave', user, () => {
      setUsers(prev => prev.filter(u => u.id !== user.id))

      setUser({
        name: '',
        lastName: '',
        id: '',
      })

      history.push(START)
      setIsLoggedIn(false)
    })

    socket.emit('newMessage', {
      isRobot: true,
      text: `Пользователь ${user.name} ${user.lastName} сделал больно и покинул чат!`,
      createAt: setDate(),
    })
  }

  const handleLoginFormChange = evt => {
    const { name, value } = evt.target
    setLoginFormValues(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleLoginFormSubmit = evt => {
    evt.preventDefault()
    socket.emit('newUser', { ...loginFormValues }, (data) => {
      setUser(data.user)
      setUsers(data.users)

      setIsLoggedIn(true)
      history.push(MAIN)

      socket.emit('newMessage', {
        isRobot: true,
        text: `Пользователь ${loginFormValues.name} ${loginFormValues.lastName} сделал приятно и вошел в чат!`,
        createAt: setDate(),
      })

      setLoginFormValues({
        name: '',
        lastName: ''
      })
    })
  }

  const handleFormMessageChange = evt => {
    const { name, value } = evt.target

    setMessageFormValue(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleFormMessageSubmit = evt => {
    evt.preventDefault()

    socket.emit('newMessage', {
      name: user.name,
      lastName: user.lastName,
      createAt: setDate(),
      ...messageFormValue
    })

    setMessageFormValue({ text: '' })
  }

  const ctxValue = { // values for context provider
    user,
    users,
    isLoggedIn,
    isSidebarOpen,
    setIsSidebarOpen,
    loginFormValues,
    messageFormValue,
    messageListRef,
    handlers: {
      handleDrawerToggle,
      handleFormMessageChange,
      handleLoginFormChange,
      handleFormMessageSubmit,
      handleLoginFormSubmit,
      handleExitClick,
    }
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={ctxValue}>
        <Switch>
          <Route path={MAIN} exact>
            { isLoggedIn ? <Redirect to={CHAT} /> : <Redirect to={START} /> }
          </Route>
          <Route path={START} >
            <StartPage />
          </Route>
          <Route path={CHAT}>
            { isLoggedIn ? <ChatPage messages={messages}/> : <Redirect to={MAIN}/> }
          </Route>
        </Switch>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
