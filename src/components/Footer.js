import Image from "next/image";
import Link from "next/link";
import Styles from '../styles/components/Footer.module.scss';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className={Styles["footer"]}>
            <div className={Styles["footer-logo"]}>
                <Image src='/assets/Dweba-logo-white.svg' alt="logo" width={150} height={50}/>
            </div>
            <div className={Styles["footer-details"]}>
                <p>The Dweba Art Gallery & Cafe is free to all visitors and open six days a week from 8am to 5pm mon-fri and 8am to 1pm Sat. Find us at<br/> 167 Longmarket Street, Cape Town, 8001, SA.  </p>
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