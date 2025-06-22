import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WordsProvider } from './context/wordsContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trivia from './component/Trivia.jsx'
import "./style.css"
createRoot(document.getElementById('root')).render(
    <WordsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </BrowserRouter>
    </WordsProvider>
)
