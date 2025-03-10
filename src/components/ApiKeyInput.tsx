import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import "../styles/Auth.css"
import { truncateMiddle } from '../utils/string'

const ApiKeyInput = () => {
  const { apiKey, addApiKey } = useContext(AuthContext);
  const [ inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addApiKey(inputValue);
    setInputValue("");
  }

  return (
    <>
      <span>Api Key: {truncateMiddle(apiKey)}</span>
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
