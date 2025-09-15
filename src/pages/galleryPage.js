import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/pages/galleryPage.module.scss';
import { useState, useEffect, useRef } from 'react';

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


    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [mounted, setMounted] = useState(false);
    const carouselRef = useRef(null);

    // mark mounted (avoid SSR mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    // window width
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = mounted && windowWidth <= 768 && windowWidth > 0;

    // All artworks
    const allArtworks = [
        { src: '/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-I.webp', alt: 'The-Reading-Man-I' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/Brothers-Embrace.webp', alt: 'Brothers-Embrace' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.webp', alt: 'The-Reading-Man-II' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/THE-INFI.webp', alt: 'THE-INFI' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.webp', alt: 'King-Yankuru' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/Golden-King.webp', alt: 'Golden-King' }
    ];

    // Build slides (1 per slide in your current code)
    const slides = [];
    for (let i = 0; i < allArtworks.length; i += 1) {
        slides.push(allArtworks.slice(i, i + 1));
    }

    // helper to measure slide width (accounts for margins)
    const getSlideWidth = () => {
        const carousel = carouselRef.current;
        if (!carousel) return 0;
        const slide = carousel.children[0];
        if (!slide) return carousel.clientWidth;
        const rect = slide.getBoundingClientRect();
        const style = window.getComputedStyle(slide);
        const marginLeft = parseFloat(style.marginLeft || '0');
        const marginRight = parseFloat(style.marginRight || '0');
        return rect.width + marginLeft + marginRight;
    };

    // scroll tracking — attach only when mobile carousel exists
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel || !isMobile) return;

        let rafId = null;
        const onScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const width = getSlideWidth() || carousel.clientWidth;
                const rawIndex = width > 0 ? Math.round(carousel.scrollLeft / width) : 0;
                const index = Math.max(0, Math.min(rawIndex, carousel.children.length - 1));
                setCurrentSlide(index);
            });
        };

        // initial sync (in case user landed in the middle)
        onScroll();

        carousel.addEventListener('scroll', onScroll, { passive: true });
        // also re-sync on resize (slides could change size)
        const onResize = () => onScroll();
        window.addEventListener('resize', onResize);

        return () => {
            carousel.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isMobile, mounted, slides.length]);

    // Dot navigation
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
        const carousel = carouselRef.current;
        if (!carousel) return;
        const width = getSlideWidth() || carousel.clientWidth;
        carousel.scrollTo({
            left: slideIndex * width,
            behavior: 'smooth',
        });
    };



    return (
        <div className={styles.galleryContainer}>
            <div className={styles.gallerySection}>
                <div className={styles.wallHeader}>
                    <h3>DOWNSTAIRS - NOW SHOWCASING:</h3>
                    <h4>The Reading Man: <span>Julius Badatu</span></h4>
                    <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                </div>

                {/* DESKTOP */}
                {!isMobile && (
                    <div className={styles.carouselGrid}>
                        <div className={styles.wallGrid}>
                            {allArtworks.slice(0, 3).map((artwork, index) => (
                                <div key={index} className={styles.artwork}>
                                    <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} />
                                </div>
                            ))}
                        </div>
                        <div className={styles.wallGrid}>
                            {allArtworks.slice(3, 6).map((artwork, index) => (
                                <div key={index} className={styles.artwork}>
                                    <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* MOBILE CAROUSEL */}
                {isMobile && (
                    <div className={styles.mobileCarousel}>
                        <div className={styles.carouselWrapper}>
                            <div className={styles.carousel} ref={carouselRef}>
                                {slides.map((slideArtworks, slideIndex) => (
                                    <div key={slideIndex} className={styles.carouselSlide}>
                                        <div className={styles.slideContent}>
                                            {slideArtworks.map((artwork, artIndex) => (
                                                <div key={artIndex} className={styles.artworkCard}>
                                                    <Image src={artwork.src} alt={artwork.alt} width={150} height={200} className={styles.artworkImage} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
                <div className={`${styles.galleryHeader} ${styles.removeMobile}`}>
                    <h3>Inside = Outside</h3>
                    <h4>Now Showing - Until 6 June 2025</h4>
                    <p>A solo exhibition by Refiloe Mnisi</p>
                </div>
                <div className={`${styles.galleryGrid} ${styles.removeMobile}`}>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu1.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu2.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu3.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/RefiloeMnisiSolo/Okwethu4.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi1.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi2.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IjubaElingafi3.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMadeItDance.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3198.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG6659.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/KancaneKancane1.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/KancaneKancane2.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3191.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3192.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3193.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/IMG3194.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                <button onClick={handleToggle} className={`${styles.galleryShowMoreBtn} ${styles.removeMobile}`}>
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
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-I.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIII.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIV.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/JuliusBadatu/Brothers-Embrace.webp' alt='SoloShowImg' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/LHASTRA.webp' alt='Lhastra Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/LHUNAH.webp' alt='Lhunah Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/THE-INFI.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                        <Image src='/assets/artworks/Downstairs/KevinWurffel/THENITUS.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Lukeni-lua-Nimi.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/KingMansaMusa.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/Golden-King.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/TheGoldMineCoordinate.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/TheKingsPostCard.webp' alt='The Golden Code Image' width={150} height={150} className={`${styles.soloImgs}`} />
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
                <div className={styles.wallHeader}>
                    <h3>DOWNSTAIRS - NOW SHOWCASING:</h3>
                    <h4>The Reading Man: <span>Julius Badatu</span></h4>
                    <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                </div>

                {/* DESKTOP */}
                {!isMobile && (
                    <div className={styles.carouselGrid}>
                        <div className={styles.wallGrid}>
                            {allArtworks.slice(0, 3).map((artwork, index) => (
                                <div key={index} className={styles.artwork}>
                                    <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} />
                                </div>
                            ))}
                        </div>
                        <div className={styles.wallGrid}>
                            {allArtworks.slice(3, 6).map((artwork, index) => (
                                <div key={index} className={styles.artwork}>
                                    <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* MOBILE CAROUSEL */}
                {isMobile && (
                    <div className={styles.mobileCarousel}>
                        <div className={styles.carouselWrapper}>
                            <div className={styles.carousel} ref={carouselRef}>
                                {slides.map((slideArtworks, slideIndex) => (
                                    <div key={slideIndex} className={styles.carouselSlide}>
                                        <div className={styles.slideContent}>
                                            {slideArtworks.map((artwork, artIndex) => (
                                                <div key={artIndex} className={styles.artworkCard}>
                                                    <Image src={artwork.src} alt={artwork.alt} width={150} height={200} className={styles.artworkImage} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.dots}>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className={`${styles.galleryHeader} ${styles.removeMobile}`}>
                    <h3>EXPLORE OUR STOREROOM</h3>
                    <p>Discover a curated selection of works from our debut group show, “And Just Like That...”, now available for viewing and purchase in the storeroom.</p>
                </div>
                <div className={`${styles.galleryGrid} ${styles.removeMobile}`}>
                    <div className={styles["artwork"]}>
                        <Image src='/assets/artworks/Storeroom/ART17.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
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
                        <Image src='/assets/artworks/Storeroom/ART14.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
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
                        <Image src='/assets/artworks/Storeroom/ART10.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
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
                        <Image src='/assets/artworks/Storeroom/ART2.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
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
                            <Image src='/assets/artworks/Storeroom/ART4.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
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
                            <Image src='/assets/artworks/Storeroom/ART3.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Ndikhumbule Ngqinambi</p>
                                <p><span>Title:</span> Yintengiso Yobomi</p>
                                <p><span>Medium:</span> Oil on paper</p>
                                <p><span>Size:</span> 51 X 69 cm</p>
                                <p><span>Year:</span> 2024</p>
                                <p><span>Price:</span> R42 000</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART1.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> Nico Phooko</p>
                                <p><span>Title:</span> Afro Blues - Kora Meets Maskandi</p>
                                <p><span>Medium:</span> Acrylic on canvas</p>
                                <p><span>Size:</span> 110 X 135 cm</p>
                                <p><span>Year:</span> 2022</p>
                                <p><span>Price:</span> R70 500</p>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART6.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} />
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
                <button onClick={handleToggleBottom} className={`${styles.galleryShowMoreBtn} ${styles.removeMobile}`}>
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