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
      <h2>
        Inside the view
      </h2>
      <h2>
        chainId: {chainId}
      </h2>
      <h2>
        Context Address (Grid host): {contextAccounts[0]}
      </h2>
      <h2>
        Wallet Connected: {walletConnected ? 'true' : false}
      </h2>
      <h2>
        Connected account: {accounts[0]}
      </h2>
      <Chat />
    </div>
  )
}

export default App
