import ChatWindow from "./ChatWindow"
import ChatInput from "./ChatInput"
import { useState, useEffect, useContext } from "react"
import MessageType from "../types/MessageType"
import "../styles/Chat.css"
import useAI from "../hooks/useAI"
import AuthContext from "../context/AuthContext"
import ApiKeyInput from "./ApiKeyInput"

const Chat = () => {
  const [msgCounter, setMsgCounter] = useState<number>(1)
  const [messages, setMessages] = useState<Array<MessageType>>([{
    id:0,
    generated: true,
    content: "Hey stranger. How can I help?"
  }])
  const { data, sendRequest } = useAI(messages)
  const { apiKey } = useContext(AuthContext)

  const onSend = (msgContent: string) => {
    const newMessage: MessageType = {
      id: msgCounter, 
      generated: false, 
      content: msgContent
    }

    setMessages([...messages, newMessage]);
    setMsgCounter(msgCounter + 1);
  }

  useEffect(() => {
    if (messages.length < 2) return;
    const lastMsg = messages[messages.length-1];
    if (lastMsg.generated === true) return;
    
    sendRequest( (lastMsg).content, apiKey );
  }, [messages]);

  useEffect(() => {
    if (data) {
      const newMessage: MessageType = {
        id: msgCounter, 
        generated: true, 
        content: data
      }
      setMessages([...messages, newMessage]); // Append AI response to chat
      setMsgCounter(msgCounter + 1);
    }
  }, [data]); // Runs when AI responds

  return (
    <div >
      <ApiKeyInput />
      <h4>Api Key: {apiKey} </h4>
      <div className="chat-container">
        <ChatWindow msgs = {messages}/>
      </div>
      <ChatInput onSend={onSend}/>
    </div>

  )
}

export default Chat
