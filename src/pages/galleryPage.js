import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/pages/galleryPage.module.scss';
import { useState } from "react";

const GalleryGrid = () => {

    const [showMore, setShowMore] = useState(false);
    const [showMoreMid, setShowMoreMid] = useState(false);
    const [showMoreMidTwo, setShowMoreMidTwo] = useState(false);
    const [showMoreBottom, setShowMoreBottom] = useState(false);

    const handleToggle = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    const handleToggleMid = () => {
        setShowMoreMid((prev) => !prev);
    };

    const handleToggleMidTwo = () => {
        setShowMoreMidTwo((prev) => !prev);
    };

    const handleToggleBottom = () => {
        setShowMoreBottom((prev) => !prev);
    };



    return (
        <div className={styles.galleryContainer}>
            <div className={styles.gallerySection}>
                <div className={styles.galleryHeader}>
                    <h3>Inside = Outside</h3>
                    <h4>Now Showing - Until 6 June 2025</h4>
                    <p>A solo exhibition by Refiloe Mnisi</p>
                </div>
                <div className={styles.galleryGrid}>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={`${styles.showMoreArtwork} ${showMore ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                    </div>
                </div>
                <button onClick={handleToggle} className={styles.galleryShowMoreBtn}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
            <div className={`${styles.gallerySection} ${styles.gallerySectionMid}`}>
                <div className={`${styles.galleryHeader} ${styles.galleryHeaderMid}`}>
                    <h4>Now Showing - Until 6 June 2025</h4>
                    <h3>The Reading Man: <span>Julius Badatu</span></h3>
                </div>
                <div className={`${styles.galleryGrid} ${styles.galleryGridMid}`}>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={`${styles.showMoreArtwork} ${showMoreMid ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                    </div>
                </div>
                <button onClick={handleToggleMid} className={styles.galleryShowMoreBtn}>
                    {showMoreMid ? "Show Less" : "Show More"}
                </button>
                <div className={`${styles.galleryHeader} ${styles.galleryHeaderMid}`}>
                    <h4>Now Showing - Until 6 June 2025</h4>
                    <h3>Golden Kings Code: <span>Kevin Wurffel</span></h3>
                </div>
                <div className={`${styles.galleryGrid} ${styles.galleryGridMid}`}>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={`${styles.showMoreArtwork} ${showMoreMidTwo ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                    </div>
                </div>
                <button onClick={handleToggleMidTwo} className={styles.galleryShowMoreBtn}>
                    {showMoreMidTwo ? "Show Less" : "Show More"}
                </button>
            </div>
            <div className={styles.gallerySection}>
                <div className={styles.galleryHeader}>
                    <h3>EXPLORE OUR STOREROOM</h3>
                    <p>Discover a curated selection of works from our debut group show, “And Just Like That...”, now available for viewing and purchase in the storeroom.</p>
                </div>
                <div className={styles.galleryGrid}>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={styles["artwork"]}></div>
                    <div className={`${styles.showMoreArtwork} ${showMoreBottom ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                        <div className={styles["artwork"]}></div>
                    </div>
                </div>
                <button onClick={handleToggleBottom} className={styles.galleryShowMoreBtn}>
                    {showMoreBottom ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

const GalleryPage = () => {
    return (
        <section>
            <Header />
            <GalleryGrid />
            <Footer />
        </section>
    );
};

export default GalleryPage;