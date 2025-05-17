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
                        <h3>UPSTAIRS - NOW SHOWING:</h3>
                        <h4>Solo Show: Inside = Outside</h4>
                        <p>Artist: Refiloe Mnisi</p>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}></div>
                        <div className={Style["artwork"]}></div>
                        <div className={Style["artwork"]}></div>
                    </div>
                </div>
                <div className={Style["walls"]}>
                    <div className={Style["wall-header"]}>
                        <h3>DOWNSTAIRS - NOW SHOWING:</h3>
                        <h4>The Reading Man: <span>Julius Badatu</span></h4>
                        <h4>Golden Kings Code: <span>Kevin Wurffel</span></h4>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}></div>
                        <div className={Style["artwork"]}></div>
                        <div className={Style["artwork"]}></div>
                    </div>
                    <div className={Style["wall-grid"]}>
                        <div className={Style["artwork"]}></div>
                        <div className={Style["artwork"]}></div>
                        <div className={Style["artwork"]}></div>
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