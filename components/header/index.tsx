import React from 'react'

export default function Header() {
    return (
        <header className="px-4 bg-[#232536]">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex text-2xl text-white font-bold items-center p-2">
                    Wasif
                </a>
                <ul className="items-center text-white hidden space-x-3 md:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex font-light items-center px-4 -mb-1  dark:border-transparent">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" target='_blank' href="https://portfoliowebsites-git-main-wasifali22.vercel.app" className="flex font-light items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400">About Us</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/contact-us" className="flex font-light items-center px-4 -mb-1  dark:border-transparent">Contact Us</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="dark:bg-gray-100 bg-white dark:text-gray-800 text-[#232536] py-2 px-4 font-medium text-xl dark:border-transparent">Subscribe</a>
                    </li>

                </ul>
                <button className="flex justify-end p-4 text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
