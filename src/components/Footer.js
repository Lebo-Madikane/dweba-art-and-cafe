import Image from "next/image";
import Link from "next/link";
import Styles from '../styles/components/Footer.module.scss';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className={Styles["footer"]}>
            <div className={Styles["footer-logo"]}>
                <Image className={Styles["logo"]} src='/assets/Dweba-Logo-White.svg' alt="logo" width={150} height={50} />
                <Image className={Styles["logo2"]} src='/assets/Dweba-logo-white.png' alt="logo" width={150} height={50} />
            </div>
            <div className={Styles["footer-details"]}>
                <p>Call: +2771 051 7574</p>
                <p>Email: hello@dwebaart.com</p>
                <p>Sign-up: to our <span className={Styles["newsletter"]}>Newsletter</span> </p>
            </div>
            <div className={Styles["footer-icons"]}>
                <a
                    href="https://wa.me/27710517574" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles["whatsapp"]}>
                    <FaWhatsapp size={24} />
                </a>
                <a
                    href="https://www.instagram.com/dweba_art_cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles["instagram"]}>
                    <FaInstagram size={24} />
                </a>
                <a
                    href="https://www.tiktok.com/@_dwebaartcpt_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles["tiktok"]}>
                    <FaTiktok size={24} />
                </a>
            </div>
        </div>
    );

};

export default Footer;