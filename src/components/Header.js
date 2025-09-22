import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/components/Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Helper function to close menu when link is clicked
    const handleClick = () => setIsMenuOpen(false);

    return (
        <header className={Style.header}>
            <Link href='/' onClick={handleClick}>
                <Image src='/assets/Dweba-Logo-White.svg' alt="logo" width={150} height={50} placeholder="empty" priority />
            </Link>

            <div className={`${Style.hamburger} ${isMenuOpen ? Style.active : ''}`} onClick={toggleMenu}>
                <div className={Style.bar}></div>
                <div className={Style.bar}></div>
                <div className={Style.bar}></div>
            </div>

            <nav className={`${Style.navMenu} ${isMenuOpen ? Style.active : ''}`}>
                <ul>
                    <li><Link href="/" onClick={handleClick}>Home</Link></li>
                    <li><Link href="/galleryPage" onClick={handleClick}>Gallery</Link></li>
                    <li><Link href="/cafePage" onClick={handleClick}>Cafe</Link></li>
                    <li><Link href="/eventsPage" onClick={handleClick}>Events</Link></li>
                    <li><Link href="/#contact" onClick={handleClick}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;