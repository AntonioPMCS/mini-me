import './styles/App.css'
import { useContext } from 'react'
import UpProviderContext from './context/UpProviderContext'
import Chat from './components/Chat'
import StatusBar from './components/StatusBar'

function App() {
   // Track connected accounts
   const {
    accounts, 
    contextAccounts, 
    walletConnected,
    chainId
  } = useContext(UpProviderContext)


  return (
    <div className="app-container">
      <StatusBar />
      <Chat />
    </div>
  )
}

export default App
