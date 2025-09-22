import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from '../styles/components/Gallery.module.scss';

const Gallery = () => {
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
        { src: '/assets/artworks/Downstairs/KevinWurffel/THENITUS.webp', alt: 'Golden-King' }
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
        <div className={Style["gallery"]}>
            <div className={Style["gallery-heading"]}>
                <h2>Explore the Dweba Art Gallery</h2>
                <p>
                    Discover a curated collection of contemporary works by bold, expressive artists.<br /> Each piece invites you to experience storytelling through form, colour, and culture — all under one roof.
                </p>
            </div>

            <div className={Style["gallery-grid"]}>
                <div className={Style["walls"]}>
                    <div className={Style["wall-header"]}>
                        <h3>UPSTAIRS - SHOWING:</h3>
                        <h4>Why We Need Mothers</h4>
                        <p>Group Exhibition</p>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/whyWeNeedMothers/observingPresence.webp' alt='Untitled Indlela 1' width={150} height={150} className={Style.untitledIndlela} placeholder="empty" priority />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/whyWeNeedMothers/beauties2.webp' alt='Untitled Indlela 2' width={150} height={150} className={Style.untitledIndlela} placeholder="empty" priority />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/whyWeNeedMothers/throughRoseGlasses.webp' alt='Untitled Indlela 3' width={150} height={150} className={Style.untitledIndlela} placeholder="empty" priority />
                        </div>
                    </div>
                </div>

                <div className={Style["walls"]}>
                    <div className={Style["wall-header"]}>
                        <h3>DOWNSTAIRS - SHOWING:</h3>
                        <h4>The Reading Man: <span>Julius Badatu</span></h4>
                        <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                    </div>

                    {/* DESKTOP */}
                    {!isMobile && (
                        <div className={Style["carousel-grid"]}>
                            <div className={Style["wall-grid"]}>
                                {allArtworks.slice(0, 3).map((artwork, index) => (
                                    <div key={index} className={Style["artwork"]}>
                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={Style.untitledIndlela} placeholder="empty" priority />
                                    </div>
                                ))}
                            </div>
                            <div className={Style["wall-grid"]}>
                                {allArtworks.slice(3, 6).map((artwork, index) => (
                                    <div key={index} className={Style["artwork"]}>
                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={150} className={Style.untitledIndlela} placeholder="empty" priority />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* MOBILE CAROUSEL */}
                    {isMobile && (
                        <div className={Style["mobileCarousel"]}>
                            <div className={Style["carouselWrapper"]}>
                                <div className={Style["carousel"]} ref={carouselRef}>
                                    {slides.map((slideArtworks, slideIndex) => (
                                        <div key={slideIndex} className={Style["carouselSlide"]}>
                                            <div className={Style["slideContent"]}>
                                                {slideArtworks.map((artwork, artIndex) => (
                                                    <div key={artIndex} className={Style["artworkCard"]}>
                                                        <Image src={artwork.src} alt={artwork.alt} width={150} height={200} className={Style["artworkImage"]} placeholder="empty" priority />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={Style["dots"]}>
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${Style["dot"]} ${index === currentSlide ? Style["active"] : ''}`}
                                        onClick={() => goToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={Style["gallery-btn-container"]}>
                <button className={Style["gallery-btn"]}>
                    <Link href="/galleryPage">View Gallery</Link>
                </button>
            </div>
        </div>
    );
};

export default Gallery;
