import './App.css'
import { useContext } from 'react'
import UpProviderContext from './context/UpProviderContext'
import Chat from './components/Chat'

function App() {
   // Track connected accounts
   const {
    accounts, 
    contextAccounts, 
    walletConnected,
    chainId
  } = useContext(UpProviderContext)


  return (
    <div className="bg-white text-2xl flex flex-col items-center justify-center w-full mx-0 ">
      <h4>
        chainId: {chainId}
      </h4>
      <h4>
        Context Address (Grid host): {contextAccounts[0]}
      </h4>
      <h4>
        Wallet Connected: {walletConnected ? `true | Connected account: ${accounts[0]}` : 'false '} 
      </h4>
      <Chat />
    </div>
  )
}

export default App
