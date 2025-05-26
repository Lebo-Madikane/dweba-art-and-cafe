import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/components/Hero.module.scss'

const Hero = () => {

    return (
        <div className={Style["hero-section"]}>
            <div className={Style["hero-img"]}>
                <Image src='/assets/hero-img-readingMan1.svg' alt="logo" width={150} height={50} />
            </div>
            <div className={Style["hero-text"]}>
                <h1>Art Meets<br/>Community & Coffee</h1>
                <p>Dweba Art and Café is where creativity, connection, and comfort meet - offering contemporary art, premium coffee, and an inspiring, inclusive atmosphere.</p>
                <div className={Style["hero-cta"]}> 
                    <Link href="/galleryPage">
                        <button className={Style["hero-btn"]}>View Gallery</button>
                    </Link>
                    <Link href="/cafePage">
                        <button className={Style["hero-btn"]} target="_blank">View Menu</button>
                    </Link>
                </div>
            </div>
            <div className={Style.mobileHero}>
                <div className={Style.mobileHeroText}>
                    <h1>Art Meets<br />Community & Coffee</h1>
                    <p>Dweba Art and Café is where creativity, connection, and comfort meet - offering contemporary art, premium coffee, and an inspiring, inclusive atmosphere.</p>
                </div>
                <div className={Style.mobileHeroCta}>
                    <Link href="/galleryPage">
                        <button className={Style["hero-btn-mobile"]}>View Gallery</button>
                    </Link>
                    <Link href="/cafePage">
                        <button className={Style["hero-btn-mobile"]} target="_blank">View Menu</button>
                    </Link>
                </div>
                <div className={Style.mobileHeroImg}>
                    <Image src='/assets/mobileHeroImg.svg' alt="logo" width={150} height={50} />
                </div>
            </div>
        </div>
    );

};
 
export default Hero;