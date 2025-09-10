import { useState } from 'react'
import './App.css'
import './css/main.css'
import AppRouter from './pages/appRouter/AppRouter'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <AppRouter />
      <ToastContainer /> 

    </>
  )
}

export default App
