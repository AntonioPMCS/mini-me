import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "../styles/Chat.css"; // Import the CSS file

export default function ChatInput({ onSend }: { onSend: (message: string) => void }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(""); // Clear input after sending
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents newline insertion
      handleSend();
    }
  };


  return (
    <div className="chat-container">
      <TextareaAutosize
        className="chat-input"
        minRows={1}
        maxRows={6}
        placeholder="Write a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key
      />
      <button className="send-btn" onClick={handleSend}>➤</button>
    </div>
  );
}