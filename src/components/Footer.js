import Image from "next/image";
import Link from "next/link";
import Styles from '../styles/components/Footer.module.scss';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useState } from "react";

const Footer = () => {

    const [showNewsletterModal, setShowNewsletterModal] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSignupClick = () => {
        setShowNewsletterModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send to your email service
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setSubmitMessage('Thank you! You\'ve been subscribed to our newsletter.');
                setEmail('');
                // Auto-close after 2 seconds
                setTimeout(() => setShowNewsletterModal(false), 2000);
            } else {
                setSubmitMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('Please check your connection and try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className={Styles["footer"]}>
            <div className={Styles["footer-logo"]}>
                <Image className={Styles["logo"]} src='/assets/Dweba-Logo-White.svg' alt="logo" width={150} height={50} placeholder="empty" priority />
                <Image className={Styles["logo2"]} src='/assets/Dweba-logo-white.png' alt="logo" width={150} height={50} placeholder="empty" priority />
            </div>
            <div className={Styles["footer-details"]}>
                <p>Call: +2771 051 7574</p>
                <p>Email: hello@dwebaart.com</p>
                <p>
                    <span
                        className={Styles["signUp"]}
                        onClick={handleSignupClick}
                        style={{ cursor: 'pointer' }}
                    >
                        Sign-up
                    </span> to our Newsletter
                </p>
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

            {/* Newsletter Modal */}
            {showNewsletterModal && (
                <div className={Styles.modalOverlay} onClick={() => setShowNewsletterModal(false)}>
                    <div className={Styles.newsletterCard} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={Styles.closeBtn}
                            onClick={() => setShowNewsletterModal(false)}
                        >
                            ×
                        </button>

                        <h3>Stay Updated</h3>
                        <p>Get notified about new exhibitions, featured artists, and gallery events.</p>

                        {submitMessage ? (
                            <div className={Styles.successMessage}>
                                {submitMessage}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={Styles.emailInput}
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={Styles.subscribeBtn}
                                >
                                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

};

export default Footer;