import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import "../styles/Auth.css"

const ApiKeyInput = () => {
  const { apiKey, addApiKey } = useContext(AuthContext);
  const [ inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addApiKey(inputValue);
    setInputValue("");
  }

  const truncateMiddle = (text: string, startLength = 6, endLength = 6) => {
    if (text.length <= startLength + endLength) return text; // Don't truncate if not needed
    return `${text.slice(0, startLength)}...${text.slice(-endLength)}`;
  };
  

  return (
    <>
      <h4>Api Key: {truncateMiddle(apiKey)} </h4>
      <div className="key-input">
        <form onSubmit={handleSubmit} className="key-input">
          <label>OpenAI API Key: </label>
          <input 
            type="password" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="sk-..." 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ApiKeyInput
