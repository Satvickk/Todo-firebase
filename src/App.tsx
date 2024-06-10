import React from 'react'
import Authentication from '@/components/UserAuthentication/Authentication'
import Dashboard from './components/Dashboard/Dashboard'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <div>
      {localStorage.getItem("uid") ? <Dashboard /> : <Authentication />}
      <Toaster />
    </div>
  )
}

export default App
