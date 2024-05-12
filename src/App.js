import React from 'react'
import './App.css'
import QuizApp from './pages/QuizApp.js'
import Home from './pages/home.js'
import News from './pages/news.js'
import Contact from './pages/contact.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='quiz' element={<QuizApp />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
