import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/pages/galleryPage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart  } from "react-icons/ci";
import { title } from 'process';
import Head from 'next/head';

const GalleryGrid = () => {

    const [showMore, setShowMore] = useState(false);
    const [showMoreMid, setShowMoreMid] = useState(false);
    const [showMoreMidTwo, setShowMoreMidTwo] = useState(false);
    const [showMoreBottom, setShowMoreBottom] = useState(false);

    const topSectionRef = useRef(null);
    const midSectionRef = useRef(null);
    const midTwoSectionRef = useRef(null);
    const bottomSectionRef = useRef(null);

    const handleToggle = () => {
        setShowMore((prev) => {
            const nextState = !prev;
            setTimeout(() => {
                if (topSectionRef.current) {
                    topSectionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 200);
            return nextState;
        });
    };

    const handleToggleMid = () => {
        setShowMoreMid((prev) => {
            const nextState = !prev;
            setTimeout(() => {
                if (midSectionRef.current) {
                    midSectionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 200);
            return nextState;
        });
    };

    const handleToggleMidTwo = () => {
        setShowMoreMidTwo((prev) => {
            const nextState = !prev;
            setTimeout(() => {
                if (midTwoSectionRef.current) {
                    midTwoSectionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 200);
            return nextState;
        });
    };

    const handleToggleBottom = () => {
        setShowMoreBottom((prev) => {
            const nextState = !prev;
            setTimeout(() => {
                if (bottomSectionRef.current) {
                    bottomSectionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 200);
            return nextState;
        });
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
        { src: '/assets/artworks/whyWeNeedMothers/throughRoseGlasses.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Through Rose Glasses', medium: 'Oil paint on canvas', size: '92 x 92 cm', year: '2025', price: 'R40 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/rose.webp', alt: 'Exhibition Artwork', artist: 'Nelson Okoh', title: 'The Rose', medium: 'Oil on canvas', size: '120 x 90 cm', year: '20219', price: 'R95 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/smilesAreFree.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Smiles Are Free', medium: 'Oil paint on canvas', size: '100 x 130 cm', year: '2025', price: 'R60 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/observingPresence.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Observing Presences', medium: 'Oil paint on canvas', size: '130 x 90 cm', year: '2025', price: 'R60 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/beauties1.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Beauties 1', medium: 'Oil paint on canvas', size: '100 x 100 cm', year: '2025', price: 'R60 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/beauties2.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Beauties 2', medium: 'Oil paint on canvas', size: '100 x 100 cm', year: '2025', price: 'R60 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/connectionWithTheGaze.webp', alt: 'Exhibition Artwork', artist: 'Kingdiah Kolapo', title: 'Connection With The Gaze', medium: 'Charcoal and acrylic', size: '100 x 60 cm', year: '2016', price: 'R40 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/connectionWithTheMind.webp', alt: 'Exhibition Artwork', artist: 'Kingdiah Kolapo', title: 'Connection With The Mind', medium: 'Charcoal and acrylic', size: '100 x 60 cm', year: '2016', price: 'R40 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/theGrandCannon.webp', alt: 'Exhibition Artwork', artist: 'Tinashe Mk', title: 'The Grand Canyon', medium: 'Acrylic on canvas', size: '120 x 100 cm', year: '2025', price: 'R25 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/fearOverFaith.webp', alt: 'Exhibition Artwork', artist: 'Tinashe Mk', title: 'Devine Breakthrough', medium: 'Acrylic on canvas', size: '120 x 100 cm', year: '2025', price: 'R25 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/faith.webp', alt: 'Exhibition Artwork', artist: 'Tinashe Mk', title: 'F A I TH', medium: 'Acrylic on canvas', size: '120 x 100 cm', year: '2025', price: 'R25 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/umhambiWendlela.webp', alt: 'Exhibition Artwork', artist: 'Luyanda Mkhuthungu', title: 'Umhambi Wendlela', medium: 'Mixed Media', size: '73 x 97 cm', year: '2025', price: 'R25 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/afroBluesKoraMeetsMaskandi.webp', alt: 'Exhibition Artwork', artist: 'Nico Phooko', title: 'Afro Blues', medium: 'Acrylic on canvas', size: '100 x 135 cm', year: '2022', price: 'R70 500 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/theKingsKingdom.webp', alt: 'Exhibition Artwork', artist: 'Cheryl Traub Adler', title: 'The Kings Kingdom', medium: 'Acrylic and oil paint', size: '170 x 110 cm', year: '2020', price: 'R74 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/messiahsDonkey.webp', alt: 'Exhibition Artwork', artist: 'Cheryl Traub Adler', title: 'Messiah`s Donkey', medium: 'Acrylic and oil paint', size: '93 x 64 cm', year: '2021', price: 'R42 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/tbc.webp', alt: 'Exhibition Artwork', artist: 'Cheryl Traub Adler', title: 'TBC', medium: 'Acrylic and oil paint', size: '54 x 78 cm', year: '2025', price: 'R40 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/untitledAbstract1.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Untitled Abstract 1', medium: 'Oil on canvas', size: '120 x 120 cm', year: '2023', price: 'R23 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/untitledAbstract2.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Untitled Abstract 2', medium: 'Oil on canvas', size: '120 x 125 cm', year: '2023', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/whyWeNeedMothers/untitledAbstract3.webp', alt: 'Exhibition Artwork', artist: 'Julius Badatu', title: 'Untitled Abstract 3', medium: 'Oil on canvas', size: '152 x 122 cm', year: '2023', price: 'R23 000 ex VAT' },
        { src: 'assets/artworks/Storeroom/ART3.webp', alt: 'Exhibition Artwork', artist: 'Ndikhumbule Ngqinambi', title: 'Yintengiso Yobomi', medium: 'Oil on paper', size: '51 x 69 cm', year: '2024', price: 'R42 000 ex VAT' },
    ];

    // Storeroom artworks
    const storeroomArtworks = [
        { src: '/assets/artworks/Storeroom/ART17.webp', alt: 'The Storeroom Artwork', artist: 'Ditiro Mashigo', title: 'Misty Blues', medium: 'Fabric Paint', size: '145 x 106 cm', year: '2024', price: 'R53 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART14.webp', alt: 'The Storeroom Artwork', artist: 'Ditiro Mashigo', title: 'Duvha (Sun)', medium: 'Fabric Paint', size: '145 x 106 cm', year: '2024', price: 'R53 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART4.webp', alt: 'The Storeroom Artwork', artist: 'Cheryl Traub Adler', title: 'Chimera II', medium: 'Monotype and paint', size: '62 X 82 cm', year: '2025', price: 'R24 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART16.webp', alt: 'The Storeroom Artwork', artist: 'Cheryl Traub Adler', title: 'Chimera III', medium: 'Monotype and paint', size: '62 X 82 cm', year: '2025', price: 'R24 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART10.webp', alt: 'The Storeroom Artwork', artist: 'Samson Mnisi', title: 'Abstract I', medium: 'Mixed Media', size: '55 X 100 cm', year: '2022', price: 'R150 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART13.webp', alt: 'The Storeroom Artwork', artist: 'Samson Mnisi', title: 'The Last One', medium: 'Mixed Media', size: '185 X 88 cm', year: '2022', price: 'R240 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART2.webp', alt: 'The Storeroom Artwork', artist: 'Funeka Shuping', title: 'Untitled (Bee Series)', medium: 'Mixed Media', size: '141 X 102 cm', year: '2024', price: 'R28 000 ex VAT' },
        { src: '/assets/artworks/Storeroom/ART6.webp', alt: 'The Storeroom Artwork', artist: 'Ziyanda Majozi', title: 'Nozimvo', medium: 'Mosaic', size: '60 X 40 cm', year: '2018', price: 'R36 000 ex VAT' },
    ];

    // The Reading Man artworks
    const theReadingMan = [
        { src: '/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-I.webp', alt: 'The Reading Man', artist: 'Julius Badatu', title: 'The Reading Man I', medium: 'Mixed Media', size: '100 x 80 cm', year: '2025', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.webp', alt: 'The Reading Man', artist: 'Julius Badatu', title: 'The Reading Man II', medium: 'Mixed Media', size: '60 x 45 cm', year: '2025', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIII.webp', alt: 'The Reading Man', artist: 'Julius Badatu', title: 'The Reading Man III', medium: 'Mixed Media', size: '50 x 50 cm', year: '2025', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/TheReadingManIV.webp', alt: 'The Reading Man', artist: 'Julius Badatu', title: 'The Reading Man IV', medium: 'Mixed Media', size: '100 x 80 cm', year: '2025', price: 'R20 000 ex VAT' },
    ];

    // Golden Kings Code artworks
    const goldenKingsCode = [
        { src: '/assets/artworks/Downstairs/KevinWurffel/LHASTRA.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'LHASTRA', medium: 'Mixed Media', size: '64 X 45 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/LHUNAH.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'LHUNAH', medium: 'Mixed Media', size: '64 X 45 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/THE-INFI.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'THE INFI', medium: 'Mixed Media', size: '70 X 60 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/THENITUS.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'THE NITUS', medium: 'Mixed Media', size: '70 X 60 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/King-Lukeni-lua-Nimi.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'King Lukeni lua Nimi', medium: 'Mixed Media', size: '45 X 45 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/KingMansaMusa.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'King Mansa Musa', medium: 'Mixed Media', size: '111 X 89 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'King Yankuru', medium: 'Mixed Media', size: '55 X 45 cm', year: '2012', price: 'R20 000 ex VAT' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/Golden-King.webp', alt: 'Golden Kings Code', artist: 'Kevin Wurffel', title: 'Golden King', medium: 'Mixed Media', size: '60.6 X 45 cm', year: '2012', price: 'R20 000 ex VAT' },
    ];

    // Build slides (1 per slide in your current code)
    const slides = [];
    for (let i = 0; i < allArtworks.length; i += 1) {
        slides.push(allArtworks.slice(i, i + 1));
    }

    // Build slides for storeroomArtworks
    const storeroomSlides = [];
    for (let i = 0; i < storeroomArtworks.length; i += 1) {
        storeroomSlides.push(storeroomArtworks.slice(i, i + 1));
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

    // Add to your component state
    const [showComingSoon, setShowComingSoon] = useState(false);

    // Handler for the cart button
    const handleAddToCart = () => {
        setShowComingSoon(true);
        // Auto-hide after 6 seconds
        setTimeout(() => setShowComingSoon(false), 6000);
    };

    // Existing state...
    const [likedArtworks, setLikedArtworks] = useState(new Set());

    // Load likes from localStorage on component mount
    useEffect(() => {
        const savedLikes = localStorage.getItem('likedArtworks');
        if (savedLikes) {
            setLikedArtworks(new Set(JSON.parse(savedLikes)));
        }
    }, []);

    // Handle like toggle with GA tracking
    const handleLike = (artwork) => {
        const artworkId = artwork.title; // Use title as unique ID
        const newLikedArtworks = new Set(likedArtworks);

        let action;
        if (newLikedArtworks.has(artworkId)) {
            // Unlike
            newLikedArtworks.delete(artworkId);
            action = 'unlike';
        } else {
            // Like
            newLikedArtworks.add(artworkId);
            action = 'like';
        }

        // Update local state and localStorage
        setLikedArtworks(newLikedArtworks);
        localStorage.setItem('likedArtworks', JSON.stringify([...newLikedArtworks]));

        // Track in Google Analytics
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', action, {
                event_category: 'artwork_engagement',
                event_label: artworkId,
                artwork_artist: artwork.artist,
                artwork_price: artwork.price,
                custom_parameter_1: artwork.medium,
                value: 1
            });
        }
    };


    return (
        <>
            <Head>
                <title>Gallery - Dweba Art & Cafe | Contemporary African Art</title>
                <meta name="description" content="Explore our curated collection of contemporary African art. Current exhibitions include works by Julius Badatu, Kevin Wurffel, and more." />
            </Head>
            <div className={styles.galleryContainer}>
                <div ref={topSectionRef} className={styles.gallerySection}>
                    <div className={styles.wallHeader}>
                        <h3>Why We Need Mothers</h3>
                        <h4>Group Exhibition</h4>
                        <p>Now Showing</p>
                    </div>

                    {/* DESKTOP */}
                    {!isMobile && (
                        <div className={styles.carouselGrid}>
                            <div className={styles.wallGrid}>
                                {allArtworks.slice(0, 3).map((artwork, index) => (
                                    <div key={index} className={styles.artwork}>
                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} placeholder="empty" priority />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.wallGrid}>
                                {allArtworks.slice(3, 6).map((artwork, index) => (
                                    <div key={index} className={styles.artwork}>
                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} placeholder="empty" priority />
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
                                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={200} className={styles.artworkImage} placeholder="empty" priority />
                                                        <div className={styles["carousel-artwork-details"]}>
                                                            <p><span>Artist:</span> {artwork.artist}</p>
                                                            <p><span>Title:</span> {artwork.title}</p>
                                                            <p><span>Medium:</span> {artwork.medium}</p>
                                                            <p><span>Size:</span> {artwork.size}</p>
                                                            <p><span>Year:</span> {artwork.year}</p>
                                                            <p><span>Price:</span> {artwork.price}</p>
                                                        </div>
                                                        <div className={styles.btnsContainer}>
                                                            <button
                                                                className={`${styles.likeBtn} ${likedArtworks.has(artwork.title) ? styles.liked : ''}`}
                                                                onClick={() => handleLike(artwork)}
                                                                title={likedArtworks.has(artwork.title) ? 'Unlike this artwork' : 'Like this artwork'}
                                                            >
                                                                <CiHeart
                                                                    size={24}
                                                                    className={styles.heartIcon}
                                                                    style={{
                                                                        fill: likedArtworks.has(artwork.title) ? '#ff4757' : '#000000',
                                                                        color: likedArtworks.has(artwork.title) ? '#ff4757' : '#333'
                                                                    }}
                                                                />
                                                            </button>
                                                            <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                                        </div>
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
                        <h3>Why We Need Mothers</h3>
                        <h4>Group Exhibition</h4>
                        <p>Now Showing</p>
                    </div>
                    <div className={`${styles.galleryGrid} ${styles.removeMobile}`}>
                        <div className={styles["artwork"]}>
                            <Image src={allArtworks[0].src} alt={allArtworks[0].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" priority />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {allArtworks[0].artist}</p>
                                <p><span>Title:</span> {allArtworks[0].title}</p>
                                <p><span>Medium:</span> {allArtworks[0].medium}</p>
                                <p><span>Size:</span>{allArtworks[0].size}</p>
                                <p><span>Year:</span> {allArtworks[0].year}</p>
                                <p><span>Price:</span> {allArtworks[0].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[0].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(allArtworks[0])}
                                    title={likedArtworks.has(allArtworks[0].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(allArtworks[0].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(allArtworks[0].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={allArtworks[1].src} alt={allArtworks[1].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" priority />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {allArtworks[1].artist}</p>
                                <p><span>Title:</span> {allArtworks[1].title}</p>
                                <p><span>Medium:</span> {allArtworks[1].medium}</p>
                                <p><span>Size:</span> {allArtworks[1].size}</p>
                                <p><span>Year:</span> {allArtworks[1].year}</p>
                                <p><span>Price:</span> {allArtworks[1].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[1].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(allArtworks[1])}
                                    title={likedArtworks.has(allArtworks[1].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(allArtworks[1].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(allArtworks[1].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={allArtworks[2].src} alt={allArtworks[2].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" priority />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {allArtworks[2].artist}</p>
                                <p><span>Title:</span> {allArtworks[2].title}</p>
                                <p><span>Medium:</span> {allArtworks[2].medium}</p>
                                <p><span>Size:</span> {allArtworks[2].size}</p>
                                <p><span>Year:</span> {allArtworks[2].year}</p>
                                <p><span>Price:</span> {allArtworks[2].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[2].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(allArtworks[2])}
                                    title={likedArtworks.has(allArtworks[2].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(allArtworks[2].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(allArtworks[2].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={allArtworks[3].src} alt={allArtworks[3].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" priority />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {allArtworks[3].artist}</p>
                                <p><span>Title:</span> {allArtworks[3].title}</p>
                                <p><span>Medium:</span> {allArtworks[3].medium}</p>
                                <p><span>Size:</span> {allArtworks[3].size}</p>
                                <p><span>Year:</span> {allArtworks[3].year}</p>
                                <p><span>Price:</span> {allArtworks[3].price}</p>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[3].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[3])}
                                        title={likedArtworks.has(allArtworks[3].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[3].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[3].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.showMoreArtwork} ${showMore ? styles.active : ""}`}>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[4].src} alt={allArtworks[4].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[4].artist}</p>
                                    <p><span>Title:</span> {allArtworks[4].title}</p>
                                    <p><span>Medium:</span> {allArtworks[4].medium}</p>
                                    <p><span>Size:</span> {allArtworks[4].size}</p>
                                    <p><span>Year:</span> {allArtworks[4].year}</p>
                                    <p><span>Price:</span> {allArtworks[4].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[4].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[4])}
                                        title={likedArtworks.has(allArtworks[4].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[4].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[4].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[5].src} alt={allArtworks[5].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[5].artist}</p>
                                    <p><span>Title:</span> {allArtworks[5].title}</p>
                                    <p><span>Medium:</span> {allArtworks[5].medium}</p>
                                    <p><span>Size:</span> {allArtworks[5].size}</p>
                                    <p><span>Year:</span> {allArtworks[5].year}</p>
                                    <p><span>Price:</span> {allArtworks[5].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[5].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[5])}
                                        title={likedArtworks.has(allArtworks[5].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[5].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[5].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[6].src} alt={allArtworks[6].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[6].artist}</p>
                                    <p><span>Title:</span> {allArtworks[6].title}</p>
                                    <p><span>Medium:</span> {allArtworks[6].medium}</p>
                                    <p><span>Size:</span> {allArtworks[6].size}</p>
                                    <p><span>Year:</span> {allArtworks[6].year}</p>
                                    <p><span>Price:</span> {allArtworks[6].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[6].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[6])}
                                        title={likedArtworks.has(allArtworks[6].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[6].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[6].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[7].src} alt={allArtworks[7].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[7].artist}</p>
                                    <p><span>Title:</span> {allArtworks[7].title}</p>
                                    <p><span>Medium:</span> {allArtworks[7].medium}</p>
                                    <p><span>Size:</span> {allArtworks[7].size}</p>
                                    <p><span>Year:</span> {allArtworks[7].year}</p>
                                    <p><span>Price:</span> {allArtworks[7].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[7].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[7])}
                                        title={likedArtworks.has(allArtworks[7].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[7].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[7].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[8].src} alt={allArtworks[8].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[8].artist}</p>
                                    <p><span>Title:</span> {allArtworks[8].title}</p>
                                    <p><span>Medium:</span> {allArtworks[8].medium}</p>
                                    <p><span>Size:</span> {allArtworks[8].size}</p>
                                    <p><span>Year:</span> {allArtworks[8].year}</p>
                                    <p><span>Price:</span> {allArtworks[8].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[8].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[8])}
                                        title={likedArtworks.has(allArtworks[8].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[8].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[8].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[9].src} alt={allArtworks[9].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[9].artist}</p>
                                    <p><span>Title:</span> {allArtworks[9].title}</p>
                                    <p><span>Medium:</span> {allArtworks[9].medium}</p>
                                    <p><span>Size:</span> {allArtworks[9].size}</p>
                                    <p><span>Year:</span> {allArtworks[9].year}</p>
                                    <p><span>Price:</span> {allArtworks[9].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[9].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[9])}
                                        title={likedArtworks.has(allArtworks[9].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[9].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[9].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[10].src} alt={allArtworks[10].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[10].artist}</p>
                                    <p><span>Title:</span> {allArtworks[10].title}</p>
                                    <p><span>Medium:</span> {allArtworks[10].medium}</p>
                                    <p><span>Size:</span> {allArtworks[10].size}</p>
                                    <p><span>Year:</span> {allArtworks[10].year}</p>
                                    <p><span>Price:</span> {allArtworks[10].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[10].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[10])}
                                        title={likedArtworks.has(allArtworks[10].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[10].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[10].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[11].src} alt={allArtworks[11].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[11].artist}</p>
                                    <p><span>Title:</span> {allArtworks[11].title}</p>
                                    <p><span>Medium:</span> {allArtworks[11].medium}</p>
                                    <p><span>Size:</span> {allArtworks[11].size}</p>
                                    <p><span>Year:</span> {allArtworks[11].year}</p>
                                    <p><span>Price:</span> {allArtworks[11].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[11].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[11])}
                                        title={likedArtworks.has(allArtworks[11].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[11].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[11].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[12].src} alt={allArtworks[12].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[12].artist}</p>
                                    <p><span>Title:</span> {allArtworks[12].title}</p>
                                    <p><span>Medium:</span> {allArtworks[12].medium}</p>
                                    <p><span>Size:</span> {allArtworks[12].size}</p>
                                    <p><span>Year:</span> {allArtworks[12].year}</p>
                                    <p><span>Price:</span> {allArtworks[12].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[12].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[12])}
                                        title={likedArtworks.has(allArtworks[12].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[12].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[12].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[13].src} alt={allArtworks[13].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[13].artist}</p>
                                    <p><span>Title:</span> {allArtworks[13].title}</p>
                                    <p><span>Medium:</span> {allArtworks[13].medium}</p>
                                    <p><span>Size:</span> {allArtworks[13].size}</p>
                                    <p><span>Year:</span> {allArtworks[13].year}</p>
                                    <p><span>Price:</span> {allArtworks[13].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[13].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[13])}
                                        title={likedArtworks.has(allArtworks[13].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[13].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[13].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[14].src} alt={allArtworks[14].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[14].artist}</p>
                                    <p><span>Title:</span> {allArtworks[14].title}</p>
                                    <p><span>Medium:</span> {allArtworks[14].medium}</p>
                                    <p><span>Size:</span> {allArtworks[14].size}</p>
                                    <p><span>Year:</span> {allArtworks[14].year}</p>
                                    <p><span>Price:</span> {allArtworks[14].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[14].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[14])}
                                        title={likedArtworks.has(allArtworks[14].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[14].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[14].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[15].src} alt={allArtworks[15].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[15].artist}</p>
                                    <p><span>Title:</span> {allArtworks[15].title}</p>
                                    <p><span>Medium:</span> {allArtworks[15].medium}</p>
                                    <p><span>Size:</span> {allArtworks[15].size}</p>
                                    <p><span>Year:</span> {allArtworks[15].year}</p>
                                    <p><span>Price:</span> {allArtworks[15].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[15].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[15])}
                                        title={likedArtworks.has(allArtworks[15].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[15].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[15].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[16].src} alt={allArtworks[16].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[16].artist}</p>
                                    <p><span>Title:</span> {allArtworks[16].title}</p>
                                    <p><span>Medium:</span> {allArtworks[16].medium}</p>
                                    <p><span>Size:</span> {allArtworks[16].size}</p>
                                    <p><span>Year:</span> {allArtworks[16].year}</p>
                                    <p><span>Price:</span> {allArtworks[16].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[16].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[16])}
                                        title={likedArtworks.has(allArtworks[16].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[16].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[16].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[17].src} alt={allArtworks[17].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[17].artist}</p>
                                    <p><span>Title:</span> {allArtworks[17].title}</p>
                                    <p><span>Medium:</span> {allArtworks[17].medium}</p>
                                    <p><span>Size:</span> {allArtworks[17].size}</p>
                                    <p><span>Year:</span> {allArtworks[17].year}</p>
                                    <p><span>Price:</span> {allArtworks[17].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[17].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[17])}
                                        title={likedArtworks.has(allArtworks[17].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[17].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[17].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[18].src} alt={allArtworks[18].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[18].artist}</p>
                                    <p><span>Title:</span> {allArtworks[18].title}</p>
                                    <p><span>Medium:</span> {allArtworks[18].medium}</p>
                                    <p><span>Size:</span> {allArtworks[18].size}</p>
                                    <p><span>Year:</span> {allArtworks[18].year}</p>
                                    <p><span>Price:</span> {allArtworks[18].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[18].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[18])}
                                        title={likedArtworks.has(allArtworks[18].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[18].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[18].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={allArtworks[19].src} alt={allArtworks[19].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {allArtworks[19].artist}</p>
                                    <p><span>Title:</span> {allArtworks[19].title}</p>
                                    <p><span>Medium:</span> {allArtworks[19].medium}</p>
                                    <p><span>Size:</span> {allArtworks[19].size}</p>
                                    <p><span>Year:</span> {allArtworks[19].year}</p>
                                    <p><span>Price:</span> {allArtworks[19].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(allArtworks[19].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(allArtworks[19])}
                                        title={likedArtworks.has(allArtworks[19].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(allArtworks[19].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(allArtworks[19].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleToggle} className={`${styles.galleryShowMoreBtn} ${styles.removeMobile}`}>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
                <div ref={midSectionRef} className={`${styles.gallerySection} ${styles.gallerySectionMid}`}>
                    <div className={`${styles.galleryHeader} ${styles.galleryHeaderMid}`}>
                        <h3>Now Showing</h3>
                        <h4>The Reading Man: <span>Julius Badatu</span></h4>
                    </div>
                    <div className={`${styles.galleryGrid} ${styles.galleryGridMid}`}>
                        <div className={styles["artwork"]}>
                            <Image src={theReadingMan[0].src} alt={theReadingMan.alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {theReadingMan[0].artist}</p>
                                <p><span>Title:</span> {theReadingMan[0].title}</p>
                                <p><span>Medium:</span> {theReadingMan[0].medium}</p>
                                <p><span>Size:</span> {theReadingMan[0].size}</p>
                                <p><span>Year:</span> {theReadingMan[0].year}</p>
                                <p><span>Price:</span> {theReadingMan[0].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(theReadingMan[0].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(theReadingMan[0])}
                                    title={likedArtworks.has(theReadingMan[0].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(theReadingMan[0].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(theReadingMan[0].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={theReadingMan[1].src} alt={theReadingMan[1].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {theReadingMan[1].artist}</p>
                                <p><span>Title:</span> {theReadingMan[1].title}</p>
                                <p><span>Medium:</span> {theReadingMan[1].medium}</p>
                                <p><span>Size:</span> {theReadingMan[1].size}</p>
                                <p><span>Year:</span> {theReadingMan[1].year}</p>
                                <p><span>Price:</span> {theReadingMan[1].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(theReadingMan[1].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(theReadingMan[1])}
                                    title={likedArtworks.has(theReadingMan[1].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(theReadingMan[1].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(theReadingMan[1].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={theReadingMan[2].src} alt={theReadingMan[2].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {theReadingMan[2].artist}</p>
                                <p><span>Title:</span> {theReadingMan[2].title}</p>
                                <p><span>Medium:</span> {theReadingMan[2].medium}</p>
                                <p><span>Size:</span> {theReadingMan[2].size}</p>
                                <p><span>Year:</span> {theReadingMan[2].year}</p>
                                <p><span>Price:</span> {theReadingMan[2].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(theReadingMan[2].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(theReadingMan[2])}
                                    title={likedArtworks.has(theReadingMan[2].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(theReadingMan[2].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(theReadingMan[2].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={theReadingMan[3].src} alt={theReadingMan[3].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {theReadingMan[3].artist}</p>
                                <p><span>Title:</span> {theReadingMan[3].title}</p>
                                <p><span>Medium:</span> {theReadingMan[3].medium}</p>
                                <p><span>Size:</span> {theReadingMan[3].size}</p>
                                <p><span>Year:</span> {theReadingMan[3].year}</p>
                                <p><span>Price:</span> {theReadingMan[3].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(theReadingMan[3].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(theReadingMan[3])}
                                    title={likedArtworks.has(theReadingMan[3].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(theReadingMan[3].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(theReadingMan[3].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        {/*
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
                            <div className={styles.btnsContainer}>
                                <button className={styles.likeBtn}><CiHeart size={24} className={styles.heartIcon} /></button>
                                <button className={styles.addToCartBtn}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                    </div>
                    */}
                    </div>
                    {/*
                <button onClick={handleToggleMid} className={styles.galleryShowMoreBtn}>
                    {showMoreMid ? "Show Less" : "Show More"}
                </button>
                */}
                    <div className={`${styles.galleryHeader} ${styles.galleryHeaderMid}`}>
                        <h3>Now Showing</h3>
                        <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                    </div>
                    <div className={`${styles.galleryGrid} ${styles.galleryGridMid}`}>
                        <div className={styles["artwork"]}>
                            <Image src={goldenKingsCode[0].src} alt={goldenKingsCode[0].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {goldenKingsCode[0].artist}</p>
                                <p><span>Title:</span> {goldenKingsCode[0].title}</p>
                                <p><span>Medium:</span> {goldenKingsCode[0].medium}</p>
                                <p><span>Size:</span> {goldenKingsCode[0].size}</p>
                                <p><span>Year:</span> {goldenKingsCode[0].year}</p>
                                <p><span>Price:</span> {goldenKingsCode[0].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[0].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(goldenKingsCode[0])}
                                    title={likedArtworks.has(goldenKingsCode[0].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(goldenKingsCode[0].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(goldenKingsCode[0].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={goldenKingsCode[1].src} alt={goldenKingsCode[1].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {goldenKingsCode[1].artist}</p>
                                <p><span>Title:</span> {goldenKingsCode[1].title}</p>
                                <p><span>Medium:</span> {goldenKingsCode[1].medium}</p>
                                <p><span>Size:</span> {goldenKingsCode[1].size}</p>
                                <p><span>Year:</span> {goldenKingsCode[1].year}</p>
                                <p><span>Price:</span> {goldenKingsCode[1].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[1].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(goldenKingsCode[1])}
                                    title={likedArtworks.has(goldenKingsCode[1].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(goldenKingsCode[1].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(goldenKingsCode[1].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src={goldenKingsCode[2].src} alt={goldenKingsCode[2].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {goldenKingsCode[2].artist}</p>
                                <p><span>Title:</span> {goldenKingsCode[2].title}</p>
                                <p><span>Medium:</span> {goldenKingsCode[2].medium}</p>
                                <p><span>Size:</span> {goldenKingsCode[2].size}</p>
                                <p><span>Year:</span> {goldenKingsCode[2].year}</p>
                                <p><span>Price:</span> {goldenKingsCode[2].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[2].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(goldenKingsCode[2])}
                                    title={likedArtworks.has(goldenKingsCode[2].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(goldenKingsCode[2].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(goldenKingsCode[2].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div ref={midTwoSectionRef} className={styles["artwork"]}>
                            <Image src={goldenKingsCode[3].src} alt={goldenKingsCode[3].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {goldenKingsCode[3].artist}</p>
                                <p><span>Title:</span> {goldenKingsCode[3].title}</p>
                                <p><span>Medium:</span> {goldenKingsCode[3].medium}</p>
                                <p><span>Size:</span> {goldenKingsCode[3].size}</p>
                                <p><span>Year:</span> {goldenKingsCode[3].year}</p>
                                <p><span>Price:</span> {goldenKingsCode[3].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[3].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(goldenKingsCode[3])}
                                    title={likedArtworks.has(goldenKingsCode[3].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(goldenKingsCode[3].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(goldenKingsCode[3].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={`${styles.showMoreArtwork} ${showMoreMidTwo ? styles.active : ""}`}>
                            <div className={styles["artwork"]}>
                                <Image src={goldenKingsCode[4].src} alt={goldenKingsCode[4].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {goldenKingsCode[4].artist}</p>
                                    <p><span>Title:</span> {goldenKingsCode[4].title}</p>
                                    <p><span>Medium:</span> {goldenKingsCode[4].medium}</p>
                                    <p><span>Size:</span> {goldenKingsCode[4].size}</p>
                                    <p><span>Year:</span> {goldenKingsCode[4].year}</p>
                                    <p><span>Price:</span> {goldenKingsCode[4].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[4].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(goldenKingsCode[4])}
                                        title={likedArtworks.has(goldenKingsCode[4].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(goldenKingsCode[4].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(goldenKingsCode[4].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={goldenKingsCode[5].src} alt={goldenKingsCode[5].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {goldenKingsCode[5].artist}</p>
                                    <p><span>Title:</span> {goldenKingsCode[5].title}</p>
                                    <p><span>Medium:</span> {goldenKingsCode[5].medium}</p>
                                    <p><span>Size:</span> {goldenKingsCode[5].size}</p>
                                    <p><span>Year:</span> {goldenKingsCode[5].year}</p>
                                    <p><span>Price:</span> {goldenKingsCode[5].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[5].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(goldenKingsCode[5])}
                                        title={likedArtworks.has(goldenKingsCode[5].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(goldenKingsCode[5].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(goldenKingsCode[5].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={goldenKingsCode[6].src} alt={goldenKingsCode[6].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {goldenKingsCode[6].artist}</p>
                                    <p><span>Title:</span> {goldenKingsCode[6].title}</p>
                                    <p><span>Medium:</span> {goldenKingsCode[6].medium}</p>
                                    <p><span>Size:</span> {goldenKingsCode[6].size}</p>
                                    <p><span>Year:</span> {goldenKingsCode[6].year}</p>
                                    <p><span>Price:</span> {goldenKingsCode[6].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[6].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(goldenKingsCode[6])}
                                        title={likedArtworks.has(goldenKingsCode[6].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(goldenKingsCode[6].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(goldenKingsCode[6].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src={goldenKingsCode[7].src} alt={goldenKingsCode[7].alt} width={150} height={150} className={`${styles.soloImgs}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {goldenKingsCode[7].artist}</p>
                                    <p><span>Title:</span> {goldenKingsCode[7].title}</p>
                                    <p><span>Medium:</span> {goldenKingsCode[7].medium}</p>
                                    <p><span>Size:</span> {goldenKingsCode[7].size}</p>
                                    <p><span>Year:</span> {goldenKingsCode[7].year}</p>
                                    <p><span>Price:</span> {goldenKingsCode[7].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(goldenKingsCode[7].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(goldenKingsCode[7])}
                                        title={likedArtworks.has(goldenKingsCode[7].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(goldenKingsCode[7].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(goldenKingsCode[7].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleToggleMidTwo} className={styles.galleryShowMoreBtn}>
                        {showMoreMidTwo ? "Show Less" : "Show More"}
                    </button>
                </div>
                <div className={`${styles.gallerySection} ${styles.gallerySectionStoreroom}`}>
                    <div className={styles.wallHeader}>
                        <h3>EXPLORE OUR STOREROOM</h3>
                    </div>

                    {/* DESKTOP */}
                    {!isMobile && (
                        <div className={styles.carouselGrid}>
                            <div className={styles.wallGrid}>
                                {allArtworks.slice(0, 3).map((artwork, index) => (
                                    <div key={index} className={styles.artwork}>
                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} placeholder="empty" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.wallGrid}>
                                {allArtworks.slice(3, 6).map((artwork, index) => (
                                    <div key={index} className={styles.artwork}>
                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={styles.untitledIndlela} placeholder="empty" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* MOBILE CAROUSEL */}
                    {isMobile && (
                        <div className={`${styles.mobileCarousel} ${styles.storeroomMobileCarousel}`}>
                            <div className={styles.carouselWrapper}>
                                <div className={styles.carousel} ref={carouselRef}>
                                    {storeroomSlides.map((slideArtworks, slideIndex) => (
                                        <div key={slideIndex} className={styles.carouselSlide}>
                                            <div className={styles.slideContent}>
                                                {slideArtworks.map((artwork, artIndex) => (
                                                    <div key={artIndex} className={styles.artworkCard}>
                                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={200} className={styles.artworkImage} placeholder="empty" loading="lazy" />
                                                        <div className={styles["carousel-artwork-details"]}>
                                                            <p><span>Artist:</span> {artwork.artist}</p>
                                                            <p><span>Title:</span> {artwork.title}</p>
                                                            <p><span>Medium:</span> {artwork.medium}</p>
                                                            <p><span>Size:</span> {artwork.size}</p>
                                                            <p><span>Year:</span> {artwork.year}</p>
                                                            <p><span>Price:</span> {artwork.price}</p>
                                                        </div>
                                                        <div className={styles.btnsContainer}>
                                                            <button
                                                                className={`${styles.likeBtn} ${likedArtworks.has(artwork.title) ? styles.liked : ''}`}
                                                                onClick={() => handleLike(artwork)}
                                                                title={likedArtworks.has(artwork.title) ? 'Unlike this artwork' : 'Like this artwork'}
                                                            >
                                                                <CiHeart
                                                                    size={24}
                                                                    className={styles.heartIcon}
                                                                    style={{
                                                                        fill: likedArtworks.has(artwork.title) ? '#ff4757' : '#000000',
                                                                        color: likedArtworks.has(artwork.title) ? '#ff4757' : '#333'
                                                                    }}
                                                                />
                                                            </button>
                                                            <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.dots}>
                                {storeroomSlides.map((_, index) => (
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
                        <p>Discover a curated selection of works now available for viewing and purchase in the storeroom.</p>
                    </div>
                    <div ref={bottomSectionRef} className={`${styles.galleryGrid} ${styles.removeMobile}`}>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART17.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {storeroomArtworks[0].artist}</p>
                                <p><span>Title:</span> {storeroomArtworks[0].title}</p>
                                <p><span>Medium:</span> {storeroomArtworks[0].medium}</p>
                                <p><span>Size:</span>{storeroomArtworks[0].size}</p>
                                <p><span>Year:</span> {storeroomArtworks[0].year}</p>
                                <p><span>Price:</span> {storeroomArtworks[0].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[0].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(storeroomArtworks[0])}
                                    title={likedArtworks.has(storeroomArtworks[0].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(storeroomArtworks[0].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(storeroomArtworks[0].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART14.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {storeroomArtworks[1].artist}</p>
                                <p><span>Title:</span> {storeroomArtworks[1].title}</p>
                                <p><span>Medium:</span> {storeroomArtworks[1].medium}</p>
                                <p><span>Size:</span>{storeroomArtworks[1].size}</p>
                                <p><span>Year:</span> {storeroomArtworks[1].year}</p>
                                <p><span>Price:</span> {storeroomArtworks[1].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[1].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(storeroomArtworks[1])}
                                    title={likedArtworks.has(storeroomArtworks[1].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(storeroomArtworks[1].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(storeroomArtworks[1].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART4.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {storeroomArtworks[2].artist}</p>
                                <p><span>Title:</span> {storeroomArtworks[2].title}</p>
                                <p><span>Medium:</span> {storeroomArtworks[2].medium}</p>
                                <p><span>Size:</span>{storeroomArtworks[2].size}</p>
                                <p><span>Year:</span> {storeroomArtworks[2].year}</p>
                                <p><span>Price:</span> {storeroomArtworks[2].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[2].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(storeroomArtworks[2])}
                                    title={likedArtworks.has(storeroomArtworks[2].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(storeroomArtworks[2].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(storeroomArtworks[2].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={styles["artwork"]}>
                            <Image src='/assets/artworks/Storeroom/ART16.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                            <div className={styles["artwork-details"]}>
                                <p><span>Artist:</span> {storeroomArtworks[3].artist}</p>
                                <p><span>Title:</span> {storeroomArtworks[3].title}</p>
                                <p><span>Medium:</span> {storeroomArtworks[3].medium}</p>
                                <p><span>Size:</span>{storeroomArtworks[3].size}</p>
                                <p><span>Year:</span> {storeroomArtworks[3].year}</p>
                                <p><span>Price:</span> {storeroomArtworks[3].price}</p>
                            </div>
                            <div className={styles.btnsContainer}>
                                <button
                                    className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[3].title) ? styles.liked : ''}`}
                                    onClick={() => handleLike(storeroomArtworks[3])}
                                    title={likedArtworks.has(storeroomArtworks[3].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                >
                                    <CiHeart
                                        size={24}
                                        className={styles.heartIcon}
                                        style={{
                                            fill: likedArtworks.has(storeroomArtworks[3].title) ? '#ff4757' : '#000000',
                                            color: likedArtworks.has(storeroomArtworks[3].title) ? '#ff4757' : '#333'
                                        }}
                                    />
                                </button>
                                <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                            </div>
                        </div>
                        <div className={`${styles.showMoreArtwork} ${showMoreBottom ? styles.active : ""
                            }`}>
                            <div className={styles["artwork"]}>
                                <Image src='/assets/artworks/Storeroom/ART10.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {storeroomArtworks[4].artist}</p>
                                    <p><span>Title:</span> {storeroomArtworks[4].title}</p>
                                    <p><span>Medium:</span> {storeroomArtworks[4].medium}</p>
                                    <p><span>Size:</span>{storeroomArtworks[4].size}</p>
                                    <p><span>Year:</span> {storeroomArtworks[4].year}</p>
                                    <p><span>Price:</span> {storeroomArtworks[4].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[4].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(storeroomArtworks[4])}
                                        title={likedArtworks.has(storeroomArtworks[4].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(storeroomArtworks[4].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(storeroomArtworks[4].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src='/assets/artworks/Storeroom/ART13.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {storeroomArtworks[5].artist}</p>
                                    <p><span>Title:</span> {storeroomArtworks[5].title}</p>
                                    <p><span>Medium:</span> {storeroomArtworks[5].medium}</p>
                                    <p><span>Size:</span>{storeroomArtworks[5].size}</p>
                                    <p><span>Year:</span> {storeroomArtworks[5].year}</p>
                                    <p><span>Price:</span> {storeroomArtworks[5].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[5].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(storeroomArtworks[5])}
                                        title={likedArtworks.has(storeroomArtworks[5].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(storeroomArtworks[5].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(storeroomArtworks[5].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src='/assets/artworks/Storeroom/ART2.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {storeroomArtworks[6].artist}</p>
                                    <p><span>Title:</span> {storeroomArtworks[6].title}</p>
                                    <p><span>Medium:</span> {storeroomArtworks[6].medium}</p>
                                    <p><span>Size:</span>{storeroomArtworks[6].size}</p>
                                    <p><span>Year:</span> {storeroomArtworks[6].year}</p>
                                    <p><span>Price:</span> {storeroomArtworks[6].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[6].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(storeroomArtworks[6])}
                                        title={likedArtworks.has(storeroomArtworks[6].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(storeroomArtworks[6].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(storeroomArtworks[6].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                            <div className={styles["artwork"]}>
                                <Image src='/assets/artworks/Storeroom/ART6.webp' alt='The Storeroom Artwork' width={150} height={150} className={`${styles.storeroomImg}`} placeholder="empty" loading="lazy" />
                                <div className={styles["artwork-details"]}>
                                    <p><span>Artist:</span> {storeroomArtworks[7].artist}</p>
                                    <p><span>Title:</span> {storeroomArtworks[7].title}</p>
                                    <p><span>Medium:</span> {storeroomArtworks[7].medium}</p>
                                    <p><span>Size:</span>{storeroomArtworks[7].size}</p>
                                    <p><span>Year:</span> {storeroomArtworks[7].year}</p>
                                    <p><span>Price:</span> {storeroomArtworks[7].price}</p>
                                </div>
                                <div className={styles.btnsContainer}>
                                    <button
                                        className={`${styles.likeBtn} ${likedArtworks.has(storeroomArtworks[7].title) ? styles.liked : ''}`}
                                        onClick={() => handleLike(storeroomArtworks[7])}
                                        title={likedArtworks.has(storeroomArtworks[7].title) ? 'Unlike this artwork' : 'Like this artwork'}
                                    >
                                        <CiHeart
                                            size={24}
                                            className={styles.heartIcon}
                                            style={{
                                                fill: likedArtworks.has(storeroomArtworks[7].title) ? '#ff4757' : '#000000',
                                                color: likedArtworks.has(storeroomArtworks[7].title) ? '#ff4757' : '#333'
                                            }}
                                        />
                                    </button>
                                    <button className={styles.addToCartBtn} onClick={handleAddToCart}><IoCartOutline size={24} color='#ffffff' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleToggleBottom} className={`${styles.galleryShowMoreBtn} ${styles.removeMobile}`}>
                        {showMoreBottom ? "Show Less" : "Show More"}
                    </button>
                </div>

                {/* Coming Soon Modal */}
                {showComingSoon && (
                    <div className={styles.modalOverlay} onClick={() => setShowComingSoon(false)}>
                        <div className={styles.comingSoonCard} onClick={(e) => e.stopPropagation()}>
                            <h3>Coming Soon!</h3>
                            <p>Online purchasing will be available soon. Please visit us in-store or contact us directly.</p>
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowComingSoon(false)}
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </>
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