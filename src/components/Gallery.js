import Image from 'next/image';
import Link from 'next/link';
import Style from '../styles/components/Gallery.module.scss';

const Gallery = () => {

    return (
        <div className={Style["gallery"]}>
            <div className={Style["gallery-heading"]}>
                <h2>Explore the Dweba Art Gallery</h2>
                <p>
                    Discover a curated collection of contemporary works by bold, expressive artists.<br/> Each piece invites you to experience storytelling through form, color, and culture — all under one roof.
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
                            <Image src='/assets/artworks/RefiloeMnisiSolo/Untitled-Indlela-1.svg' alt='Untitled Indlela 1' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/Untitled-Indlela-2.svg' alt='Untitled Indlela 1' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/RefiloeMnisiSolo/Untitled-Indlela-3.jpg' alt='Untitled Indlela 1' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                    </div>
                </div>
                <div className={Style["walls"]}>
                    <div className={Style["wall-header"]}>
                        <h3>DOWNSTAIRS - NOW SHOWCASING:</h3>
                        <h4>The Reading Man: <span>Julius Badatu</span></h4>
                        <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-I.jpg' alt='The-Reading-Man-I' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/JuliusBadatu/Brothers-Embrace.jpg' alt='Brothers-Embrace' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/JuliusBadatu/The-Reading-Man-II.jpg' alt='The-Reading-Man-II' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/THE-INFI.jpg' alt='THE-INFI' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/King-Yankuru.jpg' alt='King-Yankuru' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                        <div className={Style["artwork"]}>
                            <Image src='/assets/artworks/Downstairs/KevinWurffel/Golden-King.jpg' alt='Golden-King' width={150} height={150} className={`${Style.untitledIndlela}`} />
                        </div>
                    </div>
                </div>
            </div>
            {/*
                <div className={Style["art-grid"]}>
                        <Image src='/assets/ART6.png' alt="art6" width={150} height={50} className={Style["art6"]} />
                        <div className={Style["art-details"]}>
                            <h4>Nozimvo</h4>
                            <p>Ziyanda Majozi</p>
                        </div>
                </div>
            */}
            <div className={Style["gallery-btn-container"]}>
                <button className={Style["gallery-btn"]}><Link href="/galleryPage">View Gallery</Link></button>
            </div>
       </div>
    );

};

export default Gallery;