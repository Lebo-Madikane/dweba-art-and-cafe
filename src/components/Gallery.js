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
                <div className={Style["row"]}>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART14.png' alt="art1" width={150} height={50} className={Style["art14"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART2.png' alt="art2" width={150} height={50} className={Style["art2"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART12.png' alt="art12" width={150} height={50} className={Style["art12"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                </div>
                <div className={Style["row"]}>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART6.png' alt="art6" width={150} height={50} className={Style["art6"]} />
                        <div className={Style["art-details"]}>
                            <h4>Nozimvo</h4>
                            <p>Ziyanda Majozi</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART3.png' alt="art3" width={150} height={50} className={Style["art3"]} />
                        <div className={Style["art-details"]}>
                            <h4>Yintengiso Yobomi</h4>
                            <p>Ndikhumbule Ngqinambi</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART7.png' alt="art7" width={150} height={50} className={Style["art7"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                </div>
                <div className={Style["row"]}>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART4.png' alt="art4" width={150} height={50} className={Style["art4"]} />
                        <div className={Style["art-details"]}>
                            <h4>Chimera II</h4>
                            <p>Cheryl Traub Adler</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART10.png' alt="art10" width={150} height={50} className={Style["art10"]} />
                        <div className={Style["art-details"]}>
                            <h4>Abstract I</h4>
                            <p>Samson Mnisi</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART8.png' alt="art8" width={150} height={50} className={Style["art8"]} />
                        <div className={Style["art-details"]}>
                            <h4>Garbage Removal Snake Park,<br/> Soweto 1991</h4>
                            <p>Ruth Motau</p>
                        </div>
                    </div>
                </div>
                <div className={Style["row"]}>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART1.png' alt="art1" width={150} height={50} className={Style["art1"]} />
                        <div className={Style["art-details"]}>
                            <h4>Afro Blues - <br/>Kora Meets Maskandi</h4>
                            <span>Nico Phooko</span>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART11.png' alt="art11" width={150} height={50} className={Style["art11"]} />
                        <div className={Style["art-details"]}>
                            <h4>Faith Series</h4>
                            <p>Mario Macilau</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART13.png' alt="art13" width={150} height={50} className={Style["art13"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                </div>
                <div className={Style["row"]}>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART16.png' alt="art16" width={150} height={50} className={Style["art16"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART19.png' alt="art1" width={150} height={50} className={Style["art1"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                    <div className={Style["art-grid"]}>
                        <Image src='/assets/ART17.png' alt="art17" width={150} height={50} className={Style["art17"]} />
                        <div className={Style["art-details"]}>
                            <p>Category</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style["gallery-btn-container"]}>
                <button className={Style["gallery-btn"]}><Link href="/galleryPage">View Gallery</Link></button>
            </div>
       </div>
    );

};

export default Gallery;