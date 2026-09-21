import React from 'react'

function TicketDetails({ ticket }) {

    if (!ticket) {
        return (
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm text-black-400">
                    Select a ticket to view details
                </p>
            </div>
        )
    }
    return (
        <div className="w-full max-w-md rounded-xl border border-black-500 bg-white p-6 shadow-sm h-fit sticky top-4 ">

            <p className="text-xs text-gray-400">
                Ticket #{ticket.id}
            </p>

            <h2 className="mt-2 text-lg font-semibold text-gray-900">
                {ticket.subject}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                Customer: {ticket.customer}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
                {ticket.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
                <div>
                    <p className="text-xs text-gray-400">
                        Priority
                    </p>

                    <p className="mt-1 text-sm font-medium">
                        {ticket.priority}
                    </p>
                </div>
                <div>
                    <p className="text-xs text-gray-400">
                        Status
                    </p>

                    <p className="mt-1 text-sm font-medium">
                        {ticket.status}
                    </p>
                </div>
            </div>
            <p className="mt-5 text-xs text-gray-400">
                Created: {ticket.createdAt}
            </p>
        </div>
    )

}

export default TicketDetails