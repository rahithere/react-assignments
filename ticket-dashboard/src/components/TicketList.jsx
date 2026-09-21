import React, { useState } from 'react'
import tickets from '../tickets'
import TicketCard from './TicketCard'
import TicketStats from './TicketStats'
import TicketDetails from './TicketDetails'

function TicketList() {

    const [selectedTicket, setSelectedTicket] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    console.log(selectedTicket)
    return (
        <div className='main-container'>

            <TicketStats setSelectedCategory={setSelectedCategory} />
            <div className='content-wrapper flex justify-center w-full grid grid-cols-[1.5fr_1fr] gap-6 pl-10'>
                <div className='card-wrapper flex flex-wrap  grid grid-cols-2 gap-4'>

                    {selectedCategory
                        ? tickets.filter(ticket => (ticket.status === selectedCategory))
                            .map(ticket => (
                                <TicketCard
                                    key={ticket.id}
                                    ticket={ticket}
                                    setSelectedTicket={setSelectedTicket}
                                />
                            )) :
                        tickets.map(ticket => (
                            <TicketCard
                                key={ticket.id}
                                ticket={ticket}
                                setSelectedTicket={setSelectedTicket}
                            />
                        ))}
                </div>
                <TicketDetails ticket={selectedTicket} />
            </div>
        </div>


    )
}

export default TicketList