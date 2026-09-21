import { useState } from 'react'
import "./index.css"
import TicketList from './components/TicketList'
function App() {


  return (
    <>
      <div>
        <h2 className='text-2xl font-bold inline-block p-4'>Customer Support Ticket Viewer</h2>
      </div>
      <TicketList />
    </>
  )
}

export default App
