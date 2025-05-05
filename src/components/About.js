import Image from 'next/image';
import Style from '../styles/components/About.module.scss';

const About = () => {

    return (
        <div className={Style['container']}>
            <div className={Style['row-one']}>
                <div className={Style['row-one-col-left']}>
                    <h2>YOUR DAY<br /> AT THE GALLERY</h2>
                    <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                </div>
                <div className={Style['row-one-col-one']}>
                    <Image src='/assets/About-us-one.svg' alt="logo" width={150} height={50} />
                </div>
                <div className={Style['row-one-col-two']}>
                    <Image src='/assets/About-us-two.png' alt="logo" width={150} height={50} />
                </div>
            </div>
            <div className={Style['row-two']}>
                <div className={Style['row-two-col-one']}>
                    <Image src='/assets/About-Couch.svg' alt="logo" width={150} height={50} />
                </div>
                <div className={Style['row-two-col-two']}>
                    <div className={Style['row-two-col-two-row-one']}>
                        <Image src='/assets/About-street-sign.svg' alt="logo" width={150} height={50} />
                    </div>
                    <div className={Style['row-two-col-two-row-two']}>
                        <h2>COME & BE<br/>INSPIRED</h2>
                        <p>We're excited to welcome you to our gallery and cafe, come and see how our collections influence you.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;