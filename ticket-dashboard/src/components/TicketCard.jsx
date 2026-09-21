import React from 'react'

function TicketCard({ ticket, setSelectedTicket }) {

    const statusColor = {
        "Open": "bg-yellow-400",
        "In Progress": "bg-red-400",
        "Resolved": "bg-green-400"
    }
    return (
        <div className="w-[300px] rounded-xl p-4 shadow-sm border border-gray-100 bg-gray-200 bg-whiteborder border-gray-200 rounded-xl p-4 shadow-sm"
            onClick={() => (setSelectedTicket(ticket))}
        >
            <p className="text-xs font-medium text-gray-400">
                #{ticket.id}
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-900">
                {ticket.subject}
            </p>

            <div className="mt-4 flex items-center gap-2">
                <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${statusColor[ticket.status]}`}
                ></span>

                <span className="text-xs font-medium text-gray-500">
                    {ticket.status}
                </span>
            </div>
        </div>
    )
}

export default TicketCard