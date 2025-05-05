import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/components/Header.module.scss';

const Header = () => {
    return (
        <header className={Style.header}>
            <Link href='/'>
                <Image src='/assets/Dweba-logo-black.svg' alt="logo" width={150} height={50} />
            </Link>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#gallery">Gallery</Link></li>
                    <li><Link href="#cafe">Cafe</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;