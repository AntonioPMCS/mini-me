import ChatWindow from "./ChatWindow"
import ChatInput from "./ChatInput"
import { useState, useEffect } from "react"
import MessageType from "../types/MessageType"
import "../styles/Chat.css"
import useAI from "../hooks/useAI"

const OPENAI_API_KEY = "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"

const Chat = () => {
  const [msgCounter, setMsgCounter] = useState<number>(1)
  const [messages, setMessages] = useState<Array<MessageType>>([{
    id:0,
    generated: true,
    content: "Hey stranger. How can I help?"
  }])
  const { data, sendRequest } = useAI(OPENAI_API_KEY, messages)

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
    
    sendRequest( (lastMsg).content );
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
      <div className="chat-container">
        <ChatWindow msgs = {messages}/>
      </div>
      <ChatInput onSend={onSend}/>
    </div>

  )
}

export default Chat
