import { useState, useEffect, useContext } from 'react';
import './App.css'
import UpProviderContext from './context/UpProviderContext';

// Import the LUKSO web-components library
let promise: Promise<unknown> | null = null;
if (typeof window !== "undefined") {
  promise = import("@lukso/web-components");
}

function App() {
  // Track connected accounts
  const {
    accounts, 
    contextAccounts, 
    walletConnected,
    chainId
  } = useContext(UpProviderContext)

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load web component here if needed
    promise?.then(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) {
    return null; // or a loading placeholder
  }

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
