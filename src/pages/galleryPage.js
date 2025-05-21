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
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu2.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu3.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu4.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMore ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi2.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi3.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMadeItDance.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3198.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG6659.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/KancaneKancane1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/KancaneKancane2.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3191.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3192.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3193.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3194.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
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
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-I.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIII.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIV.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMoreMid ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/JuliusBadatu/Brothers-Embrace.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
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
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/LHASTRA.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/LHUNAH.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/THE-INFI.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/THENITUS.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMoreMidTwo ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Lukeni-lua-Nimi.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/KingMansaMusa1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/Golden-King.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/TheGoldMineCoordinate.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/TheKingsPostCard.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        </div>
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
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART17.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART14.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART10.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART2.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMoreBottom ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART4.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART16.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART9.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART6.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        </div>
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