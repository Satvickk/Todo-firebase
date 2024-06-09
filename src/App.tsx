import React from 'react'
import Authentication from '@/components/UserAuthentication/Authentication'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <div>
      <Toaster />
      <Authentication />
    </div>
  )
}

export default App
