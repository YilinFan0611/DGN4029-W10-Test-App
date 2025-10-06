'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';// Add hamburger menu state if needed

export default function TopNav() {
    const pathname = usePathname(); // Get current path
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For hamburger menu toggle
    const navigationItems = [
        { name: 'HOME', path: '/' },
        { name: 'DISCOGRAPHY', path: '/DISCOGRAPHY' },
        { name: 'AWARDS', path: '/AWARDS' },
        { name: 'GALLERY', path: '/GALLERY' }
    ];
    const isActive = (path) => pathname === path;

    return (
    <div className="fixed top-0 left-0 right-0 w-full z-100">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6 h-24">
            {/* Back to Home Page */}
            <Link href="/">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[#F5F5F5]/80 font-deco font-bold text-4xl">
                        Soulboy
                    </div>
                    <div className="text-[#F5F5F5]/80 font-deco font-bold text-base">
                        2025-∞
                    </div>
                </div>
            </Link>

            {/* Hamburger Menu */}
            <button 
                onClick={() => setIsMenuOpen(true)} 
                className="flex flex-col space-y-1.5 focus:outline-none"
            >
                <span className={`transition-all duration-300 block w-9 h-0.5 bg-[#F5F5F5]/80 ${isMenuOpen ? 'translate-y-2' : ''}`}></span>
                <span className={`block w-9 h-0.5 bg-[#F5F5F5]/80`}></span>
                <span className={`transition-all duration-300 block w-9 h-0.5 bg-[#F5F5F5]/80 ${isMenuOpen ? '-translate-y-2' : ''}`}></span>
            </button>
        </div>

        {/* Overlay Menu Page */}
        <div
            className={`
                fixed inset-0 z-60 flex items-center justify-center
                bg-[#111111]/25
                transition-opacity duration-500 ease-out
                ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={() => setIsMenuOpen(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                className={`
                    relative bg-[#f5f1eb]
                    w-[61.8vw] h-[61.8vh]
                    max-w-[1200px] max-h-[820px]
                    min-w-[320px] min-h-[360px]
                    flex flex-col items-center justify-center
                    transform transition-all duration-500 ease-out origin-top
                    ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
                `}
            >
                <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="absolute top-4 right-4 text-[20px] font-light font-sans leading-[1] text-[#261606]/80"
                >
                    ✕
                </button>

                <div className={`
                    font-sans font-light text-[16px] mb-8 tracking-widest text-[#261606]/80
                    transition-all duration-1500 ease-out
                    ${isMenuOpen ? 'opacity-100 -translate-y-2 delay-1000' : 'opacity-0 translate-y-2 delay-0'}
                `}>
                    NAVIGATION
                </div>
                
                {/* Text hover animation will also apply to delay, which I don't want to */}
                <div className="flex flex-col text-center space-y-4">
                    {navigationItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.path}
                            onClick={() => setIsMenuOpen(false)} 
                            className={`text-[36px] md:text-[48px] leading-[1] font-sans font-extrabold 
                                ${isActive(item.path) 
                                    ? 'text-[#261606]/80' 
                                    : 'text-[#261606]/40 transition hover:text-[#261606]/80 duration-300'
                                }
                                ${isMenuOpen ? 'opacity-100 scale-y-100 duration-500 delay-500 ease-out origin-bottom' : 'opacity-0 scale-y-0 delay-0'}
                            `}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className={`
                    flex flex-col items-center justify-center mt-8
                    transition-all duration-1500 ease-out
                    ${isMenuOpen ? 'opacity-100 -translate-y-2 delay-1000' : 'opacity-0 translate-y-2 delay-0'}
                `}>
                    <div className="text-[#261606]/80 font-deco font-bold text-4xl">
                        Soulboy
                    </div>
                    <div className="text-[#261606]/80 font-deco font-bold text-base">
                        2025-∞
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}