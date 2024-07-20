import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Resume', path: '/resume'},
    {name: 'Project', path: '/project'},
    // {name: 'Blog', path: '/blog'},
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;


    return (
        <header className="bg-gray-50 shadow-sm sticky top-0 z-50 w-full font-sans">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                {/* Logo */}
                <Link to="/">
                    <div className="text-4xl font-sans font-bold text-green-400 whitespace-nowrap">
                        &#123;N&#125;
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-6 font-medium text-base">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`uppercase transition-colors duration-200 ${
                                isActive(item.path)
                                    ? 'text-green-400'
                                    : 'text-gray-900 hover:text-green-300'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile hamburger/X toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 !bg-white !border-white text-gray-950"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            <div
                className={`md:hidden px-4 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                }`}
            >
                <nav className="flex flex-col items-center space-y-3 text-base font-medium">

                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`uppercase transition-colors duration-200 ${
                                isActive(item.path)
                                    ? 'text-green-400'
                                    : 'text-gray-900 hover:text-green-300'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

        </header>
    );
};

export default Header;
