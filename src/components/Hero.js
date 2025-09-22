import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/components/Hero.module.scss'

const Hero = () => {

    return (
        <div className={Style["hero-section"]}>
            <div className={Style["hero-img"]}>
                <Image src='/assets/hero/hero-img-readingMan1.webp' alt="logo" width={150} height={50} placeholder="empty" priority />
            </div>
            <div className={Style["hero-text"]}>
                <h1>Art Meets<br/>Community & Coffee</h1>
                <p>Dweba Art & Café is a platform where local and international artists spark dialogue, challenge norms, and inspire creativity toward a kinder society.</p>
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
                    <p>Dweba Art & Café is a platform where local and international artists spark dialogue, challenge norms, and inspire creativity toward a kinder society.</p>
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
                    <Image src='/assets/mobileHeroImg.svg' alt="logo" width={150} height={50} placeholder="empty" priority />
                </div>
            </div>
        </div>
    );

};
 
export default Hero;