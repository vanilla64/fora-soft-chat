import React from 'react'
import Header from "../components/Header"
import MessageList from "../components/MessageList"
import Message from "../components/Message"
import MessageForm from "../components/MessageForm"
import SideBar from "../components/SideBar"

function ChatPage({ messages }) {
  return (
    <>
      <Header />
      <MessageList>
        { messages.map((msg, index) => <Message key={index} data={msg} />) }
      </MessageList>
      <MessageForm />
      <SideBar />
    </>
  )
}

export default ChatPage
