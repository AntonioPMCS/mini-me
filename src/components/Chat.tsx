import ChatWindow from "./ChatWindow"
import ChatInput from "./ChatInput"
import { useState } from "react"
import MessageType from "../types/MessageType"
import "../styles/Chat.css"

const Chat = () => {
  const [msgCounter, setMsgCounter] = useState<number>(1)
  const [messages, setMessages] = useState<Array<MessageType>>([{
    id:0,
    generated: true,
    content: "Hey stranger. How can I help?"
  }])

  const onSend = (msgContent: string) => {
    const newMessage: MessageType = {
      id:1, 
      generated: false, 
      content:msgContent
    }

    setMessages([...messages, newMessage]);
    setMsgCounter(msgCounter + 1);

  }

  return (
    <div >
      <div className="chat-container">
        <ChatWindow msgs = {messages}/>
      </div>
      <ChatInput onSend={onSend}/>
    </div>

  )
}

export default Chat
