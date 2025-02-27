import { createContext } from "react";

interface AuthContextType {
  apiKey: string,
  addApiKey: (newKey:string) => void,
}

const AuthContext = createContext<AuthContextType>({
  apiKey: "",
  addApiKey: () => {}
})

export default AuthContext