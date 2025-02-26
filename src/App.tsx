import { useContext } from 'react';
import './App.css'
import UpProviderContext from './context/UpProviderContext';

function App() {
  // Track connected accounts
  const {
    accounts, 
    contextAccounts, 
    walletConnected,
    chainId
  } = useContext(UpProviderContext)

  return (
    <>
      <h2>
        chainId: {chainId}
      </h2>
      <h2>
        Grid Host (Context account): {contextAccounts[0]}
      </h2>
      <h2>
        Connected Profile: {walletConnected? 'True' : 'False'} - {accounts[0]}
      </h2>
    </>
  )
}

export default App
