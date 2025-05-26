import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/components/Header.module.scss';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={Style.header}>
            <Link href='/'>
                <Image src='/assets/Dweba-Logo-White.svg' alt="logo" width={150} height={50} />
            </Link>
            {/* Hamburger Icon */}
            <div className={`${Style.hamburger} ${isMenuOpen ? Style.active : ''}`}
                onClick={toggleMenu}>
                <div className={Style.bar}></div>
                <div className={Style.bar}></div>
                <div className={Style.bar}></div>
            </div>
            <nav className={`${Style.navMenu} ${isMenuOpen ? Style.active : ''}`}>
                <ul>
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="#gallery">Gallery</Link></li>
                    <li><Link href="#cafe">Cafe</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;