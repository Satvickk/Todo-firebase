import React from 'react'
import Authentication from '@/components/UserAuthentication/Authentication'
import Dashboard from './components/Dashboard/Dashboard'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <div>
      <Toaster />
      {localStorage.getItem("token") ? <Dashboard /> : <Authentication />}
    </div>
  )
}

export default App
