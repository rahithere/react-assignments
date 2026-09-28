import React from "react";
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="w-full bg-[#F8C52E] text-[#111]">

            {/* Main footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-24 pt-7 pb-16">

                {/* Quick Links */}
                <div>
                    <h3 className="font-display text-xl mb-6">
                        Quick links
                    </h3>

                    <ul className="space-y-4 font-body text-sm">
                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-2 hover:font-bold hover:text-black text-[#2e2e2d]">
                                All Products
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-2 hover:font-bold hover:text-black text-[#2e2e2d]">
                                Track an Order
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-2 hover:font-bold hover:text-black text-[#2e2e2d]">
                                Return/Refund Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-2 hover:font-bold hover:text-black text-[#2e2e2d]">
                                All Policies
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-2 hover:font-bold hover:text-black text-[#2e2e2d]">
                                Contact us
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:underline hover:underline-offset-2 hover:font-bold hover:text-black text-[#2e2e2d]">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>


                {/* About Us */}
                <div>
                    <h3 className="font-display text-xl mb-6">
                        About us
                    </h3>

                    <p className="font-body text-sm leading-7 max-w-md">
                        Street Chic is an apparel store that delivers
                        high-quality clothing and everyday essentials at
                        prices that won’t break the bank. We focus on clean
                        as well as edgy designs, premium fabrics, and
                        timeless styles that are perfect for daily wear or
                        special occasions.
                    </p>
                </div>


                {/* Connect */}
                <div>
                    <h3 className="font-display text-xl mb-6">
                        Connect with us
                    </h3>

                    <ul className="font-body text-sm space-y-4 list-disc pl-5">
                        <li className="text-[#2e2e2d]">
                            <a
                                href="mailto:team.streetculture@gmail.com"
                                className="underline hover:underline-offset-2 hover:font-bold hover:text-black"
                            >
                                team.streetchic@gmail.com
                            </a>
                        </li>

                        <li className="text-[#2e2e2d]">
                            <a
                                className="underline hover:underline-offset-2 hover:font-bold hover:text-black"
                            >
                                +91 9163999798
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


            {/* Social icons */}
            <div className="flex justify-center gap-7 pb-16">

                {/* Instagram */}
                <a
                    href="#"
                    aria-label="Instagram"
                    className="text-xl hover:scale-110 transition-transform"
                >
                    ◎
                </a>

                {/* X */}
                <a
                    href="#"
                    aria-label="X"
                    className="text-xl hover:scale-110 transition-transform"
                >
                    𝕏
                </a>

            </div>


            {/* Bottom copyright */}
            <div className="border-t border-black/10 py-16 flex justify-center">

                <p className="font-body text-xs text-center">
                    © 2026, Street Culture
                    <span className="mx-2">·</span>
                    <a href="#" className="hover:underline">
                        Privacy policy
                    </a>
                    <span className="mx-2">·</span>
                    <a href="#" className="hover:underline">
                        Refund policy
                    </a>
                    <span className="mx-2">·</span>
                    <a href="#" className="hover:underline">
                        Terms of service
                    </a>
                </p>

            </div>

        </footer>
    );
}

export default Footer;