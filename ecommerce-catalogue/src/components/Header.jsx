import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className='bg-[#F8C52E] h-fit w-full flex flex-col items-center pb-2'>

            {/* advertisement banner  */}
            <div className='bg-[#E2B327] h-fit w-full text-[14px] text-center pt-1 pb-1'> <span className='hover:underline'>Follow us on Instagram @streetchic_wb</span></div>

            {/* logo container  */}
            <div className='w-full h-fit font-body font-bold text-center pt-7'><span>STREET CHIC</span></div>

            {/* nav links */}
            <div className="flex items-center justify-center mt-8">
                <nav>
                    <ul className="flex items-center gap-7 text-[14px]">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline underline-offset-4"
                                        : "hover:underline underline-offset-4"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/bottomwear"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline underline-offset-4"
                                        : "hover:underline underline-offset-4"
                                }
                            >
                                Bottomwear
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/topwear"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline underline-offset-4"
                                        : "hover:underline underline-offset-4"
                                }
                            >
                                Topwear
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/accessories"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline underline-offset-4"
                                        : "hover:underline underline-offset-4"
                                }
                            >
                                Accessories
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/clearance"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline underline-offset-4"
                                        : "hover:underline underline-offset-4"
                                }
                            >
                                Clearance
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline underline-offset-4"
                                        : "hover:underline underline-offset-4"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header