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
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Refiloe Mnisi</p>
                            <p><span>Title:</span> Okwethu I</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 87 x 70 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R50 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu2.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Refiloe Mnisi</p>
                            <p><span>Title:</span> Okwethu II</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 100 x 70 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R70 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu3.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Refiloe Mnisi</p>
                            <p><span>Title:</span> Okwethu III</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 86 x 70 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R50 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu4.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Refiloe Mnisi</p>
                            <p><span>Title:</span> Okwethu IV</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 96 x 70 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R70 000</p>
                        </div>
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMore ? styles.active : ""}`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Ijuba Elingafi I</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 33 x 24 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R18 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi2.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Ijuba Elingafi II</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 33 x 24 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R18 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi3.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Ijuba Elingafi III</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 33 x 24 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R18 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMadeItDance.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Untitled</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 33 x 24 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R15 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3198.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Untitled</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 123 x 56 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R180 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG6659.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Untitled</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 128 x 64 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R180 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/KancaneKancane1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Kancane Kancane I</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 140 x 78 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R285 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/KancaneKancane2.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> Kancane Kancane II</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 135 x 90 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R255 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3191.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> TBD</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 158 X 72 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R160 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3192.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> TBD</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 158 X 72 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R160 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3193.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> TBD</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 117 x 120 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R160 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3194.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Refiloe Mnisi</p>
                                <p><span>Title:</span> TBD</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 158 X 72 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R210 000</p>
                            </div>
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
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Julius Badatu</p>
                            <p><span>Title:</span> The Reading Man I</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 100 X 80 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Julius Badatu</p>
                            <p><span>Title:</span> The Reading Man II</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 60 X 45 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIII.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Julius Badatu</p>
                            <p><span>Title:</span> The Reading Man III</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 50 X 50 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIV.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Julius Badatu</p>
                            <p><span>Title:</span> The Reading Man IV</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 100 X 80 cm</p>
                            <p><span>Year:</span> 2025</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMoreMid ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/JuliusBadatu/Brothers-Embrace.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Julius Badatu</p>
                                <p><span>Title:</span> Brother's Embrace</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 85 X 60 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
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
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Kevin Wurffel</p>
                            <p><span>Title:</span> L'HASTRA</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 64 X 45 cm</p>
                            <p><span>Year:</span> 2012</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/LHUNAH.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Kevin Wurffel</p>
                            <p><span>Title:</span> L'HUNAH</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 64 X 45 cm</p>
                            <p><span>Year:</span> 2012</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/THE-INFI.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Kevin Wurffel</p>
                            <p><span>Title:</span> THE INFI</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 70 X 60 cm</p>
                            <p><span>Year:</span> 2012</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/THENITUS.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Kevin Wurffel</p>
                            <p><span>Title:</span> THE NITUS</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 70 X 60 cm</p>
                            <p><span>Year:</span> 2012</p>
                            <p><span>Price:</span> R20 000</p>
                        </div>
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMoreMidTwo ? styles.active : ""}`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Lukeni-lua-Nimi.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Kevin Wurffel</p>
                                <p><span>Title:</span> King Lukeni lua Nimi</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 45 X 45 cm</p>
                                <p><span>Year:</span> 2012</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/KingMansaMusa1.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Kevin Wurffel</p>
                                <p><span>Title:</span> King Mansa Musa</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 111 X 89 cm</p>
                                <p><span>Year:</span> 2012</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Kevin Wurffel</p>
                                <p><span>Title:</span> King Yankuru</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 55 X 45 cm</p>
                                <p><span>Year:</span> 2012</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/Golden-King.jpg' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Kevin Wurffel</p>
                                <p><span>Title:</span> Golden King</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 60.5 X 45 cm</p>
                                <p><span>Year:</span> 2012</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/TheGoldMineCoordinate.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Kevin Wurffel</p>
                                <p><span>Title:</span> The Gold Mine Coordinate</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 108 X 80 cm</p>
                                <p><span>Year:</span> 2012</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/TheKingsPostCard.png' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Kevin Wurffel</p>
                                <p><span>Title:</span> The King's Post Card</p>
                                <p><span>Medium:</span> Mixed Media</p>
                                <p><span>Size:</span> 48 X 38 cm</p>
                                <p><span>Year:</span> 2012</p>
                                <p><span>Price:</span> R20 000</p>
                            </div>
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
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Ditiro Mashigo</p>
                            <p><span>Title:</span> Duvha (Sun)</p>
                            <p><span>Medium:</span> Fabric Paint, Pastel Merino Wool On Board Paper</p>
                            <p><span>Size:</span> 145 x 106 cm</p>
                            <p><span>Year:</span> 2024</p>
                            <p><span>Price:</span> R53 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART14.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Ditiro Mashigo</p>
                            <p><span>Title:</span> Misty Blues</p>
                            <p><span>Medium:</span> Fabric Paint, Pastel Merino Wool On Board Paper</p>
                            <p><span>Size:</span> 145 X 106 cm</p>
                            <p><span>Year:</span> 2024</p>
                            <p><span>Price:</span> R53 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART10.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Samson Mnisi</p>
                            <p><span>Title:</span> Abstract I</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 55 X 100 cm</p>
                            <p><span>Year:</span> 2022</p>
                            <p><span>Price:</span> R150 000</p>
                        </div>
                    </div>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART2.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                        <div className={styles["artwork-details"]}>
                            <p><span>Artist:</span> Funeka Shuping</p>
                            <p><span>Title:</span> Untitled (Bee Series)</p>
                            <p><span>Medium:</span> Mixed Media</p>
                            <p><span>Size:</span> 141 X 102 cm</p>
                            <p><span>Year:</span> 2024</p>
                            <p><span>Price:</span> R28 000</p>
                        </div>
                    </div>
                    <div className={`${styles.showMoreArtwork} ${showMoreBottom ? styles.active : ""
                        }`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART4.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Cheryl Traub Adler</p>
                                <p><span>Title:</span> Chimera II</p>
                                <p><span>Medium:</span> Monotype and paint on fabriano acadenia</p>
                                <p><span>Size:</span> 62 X 82 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R24 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART16.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Cheryl Traub Adler</p>
                                <p><span>Title:</span> Chimera III</p>
                                <p><span>Medium:</span> Monotype and paint on fabriano acadenia</p>
                                <p><span>Size:</span> 62 X 82 cm</p>
                                <p><span>Year:</span> 2025</p>
                                <p><span>Price:</span> R24 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART9.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Ruth Motau</p>
                                <p><span>Title:</span> The King's Post Card</p>
                                <p><span>Medium:</span> Inkjet print on german etching</p>
                                <p><span>Size:</span> 44 X 57 cm</p>
                                <p><span>Year:</span> 1997</p>
                                <p><span>Price:</span> R130 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART6.png' alt='Golden-King' width={150} height={150} className={`${styles.storeroomImg}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Ziyanda Majozi</p>
                                <p><span>Title:</span> Nozimvo</p>
                                <p><span>Medium:</span> Mosaic</p>
                                <p><span>Size:</span> 60 X 40 cm</p>
                                <p><span>Year:</span> 2018</p>
                                <p><span>Price:</span> R36 000</p>
                            </div>
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