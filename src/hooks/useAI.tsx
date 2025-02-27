import { useState } from "react"
import MessageType from "../types/MessageType";

const useAI = (prevMessages:MessageType[]) => {
  const [data, setData] = useState<string>("");

  const sendRequest = async (prompt:string, apiKey:string, model = "gpt-4o-mini-2024-07-18") => {
    const messages = [
      ...prevMessages.map(msg => ({ role: msg.generated ? 'assistant' : 'user', content: msg.content })), // Ensure correct structure
      { role: "user", content: prompt } // Add new user message
    ];

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer  ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
        }),
      }); 

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result.choices?.[0]?.message?.content || "") 

    } catch (error) {
      console.log(error);
    }
  }


  return {data, sendRequest}
}

export default useAI;
