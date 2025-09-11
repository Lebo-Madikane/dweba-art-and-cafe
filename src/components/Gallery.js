import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from '../styles/components/Gallery.module.scss';

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768 && windowWidth > 0;

    // All artworks
    const allArtworks = [
        { src: '/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-I.webp', alt: 'The-Reading-Man-I' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/Brothers-Embrace.webp', alt: 'Brothers-Embrace' },
        { src: '/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.webp', alt: 'The-Reading-Man-II' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/THE-INFI.webp', alt: 'THE-INFI' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.webp', alt: 'King-Yankuru' },
        { src: '/assets/artworks/Downstairs/KevinWurffel/Golden-King.webp', alt: 'Golden-King' }
    ];

    // Group artworks into slides (2 per slide)
    const slides = [];
    for (let i = 0; i < allArtworks.length; i += 2) {
        slides.push(allArtworks.slice(i, i + 2));
    }

    // Dot navigation handler
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
        if (carouselRef.current) {
            const slideWidth = carouselRef.current.children[0].offsetWidth;
            const gap = 16; // 1rem = 16px
            carouselRef.current.scrollTo({
                left: slideIndex * (slideWidth + gap),
                behavior: 'smooth'
            });
        }
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
                        <h3>UPSTAIRS - NOW SHOWCASING:</h3>
                        <h4>Solo Show: Inside = Outside</h4>
                        <p>Artist: Refiloe Mnisi</p>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/Untitled-Indlela-1.webp' alt='Untitled Indlela 1' width={150} height={150} className={Style.untitledIndlela} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/Untitled-Indlela-2.webp' alt='Untitled Indlela 2' width={150} height={150} className={Style.untitledIndlela} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/Untitled-Indlela-3.webp' alt='Untitled Indlela 3' width={150} height={150} className={Style.untitledIndlela} />
                        </div>
                    </div>
                </div>

                <div className={Style["walls"]}>
                    <div className={Style["wall-header"]}>
                        <h3>DOWNSTAIRS - NOW SHOWCASING:</h3>
                        <h4>The Reading Man: <span>Julius Badatu</span></h4>
                        <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                    </div>

                    {/* DESKTOP VERSION */}
                    {!isMobile && (
                        <div className={Style["carousel-grid"]}>
                            <div className={Style["wall-grid"]}>
                                {allArtworks.slice(0, 3).map((artwork, index) => (
                                    <div key={index} className={Style["artwork"]}>
                                        <Image
                                            src={artwork.src}
                                            alt={artwork.alt}
                                            width={150}
                                            height={150}
                                            className={Style.untitledIndlela}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={Style["wall-grid"]}>
                                {allArtworks.slice(3, 6).map((artwork, index) => (
                                    <div key={index} className={Style["artwork"]}>
                                        <Image
                                            src={artwork.src}
                                            alt={artwork.alt}
                                            width={150}
                                            height={150}
                                            className={Style.untitledIndlela}
                                        />
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
                                                        <Image
                                                            src={artwork.src}
                                                            alt={artwork.alt}
                                                            width={150}
                                                            height={200}
                                                            className={Style["artworkImage"]}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Dots */}
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