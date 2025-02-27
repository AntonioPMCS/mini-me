import MessageType from '../types/MessageType'

const ChatWindow = ({msgs} : { msgs:Array<MessageType>} ) => {
  return (
    <div>
      {msgs.map( (msg) => 
        <p key={msg.id}>{`${msg.generated ? "<Mini-me> " : "<Visitor> "} 
                          ${msg.content}`}
        </p>
      )}
    </div>
  )
}

export default ChatWindow
