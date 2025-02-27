import AuthContext from "./AuthContext"
import { ReactNode, useState } from "react"

const AuthProvider = ({children}: {children:ReactNode}) => {
  const [apiKey, setApiKey] = useState<string>("");
  
  const addApiKey = (newKey: string) => {
    setApiKey(newKey);
  }

  return (
    <AuthContext.Provider value={{
      apiKey,
      addApiKey,
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;