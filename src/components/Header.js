import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Style from '../styles/components/Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const router = useRouter();
    const path = router.pathname;

    // Define dynamic link destinations based on current path
    const navLinks = {
        '/': {
            gallery: '/#gallery',
            cafe: '/#cafe',
            contact: '/#contact'
        },
        '/galleryPage': {
            gallery: '/galleryPage',
            cafe: '/cafePage',
            contact: '/#contact'
        },
        '/cafePage': {
            gallery: '/galleryPage',
            cafe: '/cafe',
            contact: '/#contact'
        },
        '/eventsPage': {
            gallery: '/galleryPage',
            cafe: '/cafePage',
            contact: '/#contact'
        }
    };

    // Default fallback (if path doesn't match explicitly)
    const links = navLinks[path] || {
        gallery: '/gallery',
        cafe: '/cafe',
        contact: '#contact'
    };

    // Helper function to handle smooth scroll or route
    const handleClick = () => setIsMenuOpen(false);

    return (
        <header className={Style.header}>
            <Link href='/' onClick={handleClick}>
                <Image src='/assets/Dweba-Logo-White.svg' alt="logo" width={150} height={50} />
            </Link>

            <div className={`${Style.hamburger} ${isMenuOpen ? Style.active : ''}`} onClick={toggleMenu}>
                <div className={Style.bar}></div>
                <div className={Style.bar}></div>
                <div className={Style.bar}></div>
            </div>

            <nav className={`${Style.navMenu} ${isMenuOpen ? Style.active : ''}`}>
                <ul>
                    <li><Link href="/" onClick={handleClick}>Home</Link></li>

                    <li>
                        <Link href={links.gallery} onClick={handleClick}>Gallery</Link>
                    </li>

                    <li>
                        <Link href={links.cafe} onClick={handleClick}>Cafe</Link>
                    </li>

                    <li>
                        <Link href={links.contact} onClick={handleClick}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;