import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UpProvider from './context/UpProvider.tsx'
import AuthProvider from './context/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <UpProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </UpProvider>,
)
