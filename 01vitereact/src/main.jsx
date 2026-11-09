import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import App from './App.jsx'

// const reactElement=createElement(
// 'a',{href:'https://google.com',target:'_blank'},'click me to visit website'
// )
createRoot(document.getElementById('root')).render(
  <strictMode>
    <App/>
  </strictMode>
  
)
