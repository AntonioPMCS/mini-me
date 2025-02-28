import './styles/App.css'
import Chat from './components/Chat'
import StatusBar from './components/StatusBar'

function App() {

  return (
    <div className="app-container">
      <StatusBar />
      <Chat />
    </div>
  )
}

export default App
