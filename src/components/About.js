"use client";
import Image from 'next/image';
import Style from '../styles/components/About.module.scss';
import { motion } from "motion/react";

const About = () => {

    return (
        <motion.div className={Style['container']}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
        >
            <div className={Style['row-one']}>
                <div className={Style['row-one-col-left']}>
                    <h2>YOUR DAY<br /> AT THE GALLERY</h2>
                    <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                </div>
                <div className={Style['row-one-col-one']}>
                    <Image src='/assets/about-section/aboutUpStairs.webp' alt="About us image" width={150} height={50} placeholder="empty" priority />
                </div>
                <div className={Style['row-one-col-two']}>
                    <Image src='/assets/about-section/aboutDownStairs.webp' alt="About us image" width={150} height={50} placeholder="empty" priority />
                </div>
            </div>
            <div className={Style['row-two']}>
                <div className={Style['row-two-col-one']}>
                    <Image className={Style['street-sign-img']} src='/assets/about-section/About-street-sign.webp' alt="Street sign image" width={150} height={50} placeholder="empty" priority />
                    <Image className={Style['couch-img']} src='/assets/about-section/aboutCouch.webp' alt="logo" width={150} height={50} placeholder="empty" priority />
                </div>
                <div className={Style['row-two-col-two']}>
                    <div className={Style['row-two-col-two-row-one']}>
                        <Image className={Style['upstairs-img']} src='/assets/about-section/aboutUpStairs.webp' alt="Gallery image" width={150} height={50} placeholder="empty" priority />
                        <Image className={Style['street-sign-img2']} src='/assets/about-section/aboutStreetSign-Two.webp' alt="Street sign image" width={150} height={50} placeholder="empty" priority />
                    </div>
                    <div className={Style['row-two-col-two-row-two']}>
                        <h2>COME & BE<br/>INSPIRED</h2>
                        <p>We're excited to welcome you to our gallery and cafe, come and see how our collections influence you.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );

}

export default About;