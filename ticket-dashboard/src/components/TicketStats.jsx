import React from 'react'
import tickets from '../tickets'

function TicketStats({ setSelectedCategory }) {

    return (
        <div className="w-[500px] flex items-center justify-between rounded-xl bg-white p-5">

            {/* open  */}
            <div className="text-center shadow-sm border border-gray-100 w-fit pl-10 pr-10 pt-2 pb-2 rounded-lg"
                onClick={() => setSelectedCategory("Open")}
            >
                <p className="text-sm text-gray-500">Open</p>
                <p className="mt-1 text-2xl font-bold text-yellow-500">{tickets.filter(ticket => (ticket.status.toLowerCase() === "open")).length}</p>


            </div>

            {/* inprogress */}
            <div className="text-center shadow-sm border border-gray-100 w-fit pl-10 pr-10 pt-2 pd-2 rounded-lg"
                onClick={() => setSelectedCategory("In Progress")}
            >
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="mt-1 text-2xl font-bold text-red-500">{tickets.filter(ticket => (ticket.status.toLowerCase() === "in progress")).length}</p>
            </div>

            {/* resolved */}
            <div className="text-center shadow-sm border border-gray-100 w-fit pl-10 pr-10 pt-2 pd-2 rounded-lg"
                onClick={() => setSelectedCategory("Resolved")}
            >
                <p className="text-sm text-gray-500">Resolved</p>
                <p className="mt-1 text-2xl font-bold text-green-500">{tickets.filter(ticket => (ticket.status.toLowerCase() === "resolved")).length}</p>
            </div>

        </div>
    )
}

export default TicketStats