import { useState, useCallback, useEffect } from 'react';
import './App.css'
import { createClientUPProvider } from '@lukso/up-provider';
import { Address } from './types/Address';

const provider = createClientUPProvider();

function App() {
  // Track connected accounts
  const [accounts, setAccounts] = useState<Array<Address>>([]);
  const [contextAccounts, setContextAccounts] = useState<Array<Address>>(
    [],
  );
  const [profileConnected, setProfileConnected] = useState(false);

  // Helper to check connection status
  const updateConnected = useCallback(
    (_accounts: Array<Address>, _contextAccounts: Array<Address>) => {
      setProfileConnected(_accounts.length > 0 && _contextAccounts.length > 0);
    },[]);

  useEffect(() => {
    async function init() {
      try {
        const _accounts = provider.accounts as Array<Address>;
        setAccounts(_accounts);
  
        const _contextAccounts = provider.contextAccounts;
        updateConnected(_accounts, _contextAccounts);
      } catch (error) {
        console.error('Failed to initialize provider:', error);
      }
    }

    // Handle account changes
    const accountsChanged = (_accounts: Array<Address>) => {
      setAccounts(_accounts);
      updateConnected(_accounts, contextAccounts);
    };

    const contextAccountsChanged = (_accounts: Array<`0x${string}`>) => {
      setContextAccounts(_accounts);
      updateConnected(accounts, _accounts);
    };
  

    init();

    // Set up event listeners
    provider.on('accountsChanged', accountsChanged);
    provider.on('contextAccountsChanged', contextAccountsChanged);

    // Cleanup listeners
    return () => {
      provider.removeListener('accountsChanged', accountsChanged);
      provider.removeListener('contextAccountsChanged', contextAccountsChanged);
    };
  }, [accounts[0], contextAccounts[0], updateConnected]);

  return (
    <>
      <h2>
        Grid Host: {contextAccounts[0]}
      </h2>
      <h2>
        Connected Profile: {profileConnected? 'True' : 'False'} - {accounts[0]}
      </h2>
    </>
  )
}

export default App
