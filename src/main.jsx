import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import './style/main.scss';
import Theme from './providers/Theme.jsx';
import IsPlaying from './providers/IsPlaying.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <IsPlaying>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IsPlaying>
    </Theme>
  </StrictMode>,
)