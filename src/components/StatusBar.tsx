import { useContext } from "react"
import UpProviderContext from "../context/UpProviderContext"
import { CheckCircle, XCircle } from "lucide-react"; // Import icons
import { truncateMiddle } from '../utils/string'
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
    <div className="status-bar status-text">
      {walletConnected ? 
              <div>
                <CheckCircle size={14} color="green" style={{ marginRight: "6px" }}/>
                truncateMiddle({accounts[0]}) @ {chainId === 42 ? 'LUKSO Mainnet' : 'LUKSO Testnet'}
              </div> 
              :
              <div>
                <XCircle size={14} color="red" style={{ marginRight: "6px" }} />
                Not connected
              </div>
      }
      <span>
        Context (Grid host): {contextAccounts[0] ?
                                truncateMiddle(contextAccounts[0]) :
                                null
                              }
      </span>
    </div>
  )
}

export default StatusBar
