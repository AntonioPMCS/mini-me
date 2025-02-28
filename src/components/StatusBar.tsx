import { useContext } from "react"
import UpProviderContext from "../context/UpProviderContext"
import { CheckCircle, XCircle } from "lucide-react"; // Import icons
import '../styles/StatusBar.css'

const StatusBar = ({}) => {
     // Track connected accounts
     const {
      accounts, 
      contextAccounts, 
      walletConnected,
      chainId
    } = useContext(UpProviderContext)

  return (
    <div className="status-bar">
      {walletConnected ? 
              <div>
                <CheckCircle size={18} color="green" style={{ marginRight: "6px" }}/>
                {accounts[0]} @ {chainId === 42 ? 'LUKSO Mainnet' : 'LUKSO Testnet'}
              </div> 
              :
              <div>
                <XCircle size={18} color="red" style={{ marginRight: "6px" }} />
                Not connected
              </div>
      }
      <span>
        Context (Grid host): {contextAccounts[0]}
      </span>
    </div>
  )
}

export default StatusBar
