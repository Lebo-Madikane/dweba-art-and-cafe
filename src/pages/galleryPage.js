import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/pages/galleryPage.module.scss';

const GalleryGrid = () => (
    <div id='gallery-section' className={styles.gallerySection}>
        <div id='welcome-section' className={styles.welcomeSection}>
            <h1>AND JUST LIKE THAT</h1>
            <h2>A GROUP EXHIBITION</h2>
            <h3>20 FEBRUARY 2025 - 21 APRIL 2025</h3>
            <p>And Just Like That claims its space in the South African Art scene not merely as an exhibition, but as a vibrant declaration of the community building, resilience and testament to the transformative power of Art.</p>
            <p>The group exhibition showcases the dynamic works of ten diverse artists - Cheryl Traub Adler, Ditiro Mashigo, Funeka Shuping, Mario Macilau, Ndikhumbule Ngqinambi, Nico Phooko, Refiloe Mnisi, Ruth Motau, Samson Mnisi and Ziyanda Majozi - resonating a raw energy that speaks to the very core of human experience.</p>
        </div>
        <div id='gallery-page-grid' className={styles.galleryPageGrid}>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Ziyanda Majozi</p>
                        <p><span>Title:</span> Nozimvo</p>
                        <p><span>Medium:</span> Mosaic</p>
                        <p><span>Size:</span> 60 x 40 cm</p>
                        <p><span>Year:</span> 2018</p>
                        <p><span>Price:</span> R36 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART6.png" alt="Nozimvo" width={200} height={260} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART1.png" alt="Afro Blues - Kora Meets Maskandi" width={250} height={250} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Nico Phooko</p>
                        <p><span>Title:</span> Afro Blues -<br/> Kora Meets Maskandi</p>
                        <p><span>Medium:</span> Acrylic on Canvas</p>
                        <p><span>Size:</span> 110 x 135 cm</p>
                        <p><span>Year:</span> 2022</p>
                        <p><span>Price:</span> R70 500</p>
                    </div>
                </div>
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Ndikhumbule Ngqinambi</p>
                        <p><span>Title:</span> Yintengiso Yobomi</p>
                        <p><span>Medium:</span> Oil On Paper</p>
                        <p><span>Size:</span> 51 x 69 cm</p>
                        <p><span>Year:</span> 2024</p>
                        <p><span>Price:</span> R42 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART3.png" alt="Yintengiso Yobomi" width={320} height={250} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART2.png" alt="Untitled (Bee Series)" width={220} height={300} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Funeka Shuping</p>
                        <p><span>Title:</span> Untitled (Bee Series)</p>
                        <p><span>Medium:</span> Mixed Media</p>
                        <p><span>Size:</span> 141 x 102 cm</p>
                        <p><span>Year:</span> 2024</p>
                        <p><span>Price:</span> R28 000</p>
                    </div>
                </div>
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Cheryl Traub Adler</p>
                        <p><span>Title:</span> Chimera I</p>
                        <p><span>Medium:</span> Monotype and Paint<br/> on Fabriano Academia</p>
                        <p><span>Size:</span> 62 x 82 cm</p>
                        <p><span>Year:</span> 2025</p>
                        <p><span>Price:</span> R24 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART5.png" alt="Chimera I" width={210} height={250} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART4.png" alt="Chimera II" width={210} height={260} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Cheryl Traub Adler</p>
                        <p><span>Title:</span> Chimera II</p>
                        <p><span>Medium:</span> Monotype and Paint<br/> on Fabriano Academia</p>
                        <p><span>Size:</span> 62 x 82 cm</p>
                        <p><span>Year:</span> 2025</p>
                        <p><span>Price:</span> R24 000</p>
                    </div>
                </div>
                {/*
                <div className={styles.galleryPageRow}>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Cheryl Traub Adler</p>
                        <p><span>Title:</span> Chimera III</p>
                        <p><span>Medium:</span> Monotype and Paint on Fabriano Academia</p>
                        <p><span>Size:</span> 62 x 82 cm</p>
                        <p><span>Year:</span> 2025</p>
                        <p><span>Price:</span> R24 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART16.png" alt="Chimera II" width={300} height={350} className={styles.galleryPageImg} />
                    </div>
                </div> */}
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Samson Mnisi</p>
                        <p><span>Title:</span> Abstract I</p>
                        <p><span>Medium:</span> Mixed Media</p>
                        <p><span>Size:</span> 55 x 100 cm</p>
                        <p><span>Year:</span> 2022</p>
                        <p><span>Price:</span> R150 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART10.png" alt="Abstract I" width={250} height={290} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART7.png" alt="Abstract II" width={250} height={290} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Samson Mnisi</p>
                        <p><span>Title:</span> Abstract II</p>
                        <p><span>Medium:</span> Mixed Media</p>
                        <p><span>Size:</span> 136 x 205 cm</p>
                        <p><span>Year:</span> Unkown</p>
                        <p><span>Price:</span> SOLD</p>
                    </div>
                </div>
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Samson Mnisi</p>
                        <p><span>Title:</span> The Last One</p>
                        <p><span>Medium:</span> Mixed Media</p>
                        <p><span>Size:</span> 185 x 88 cm</p>
                        <p><span>Year:</span> 2022</p>
                        <p><span>Price:</span> R240 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART13.png" alt="The Last One" width={220} height={290} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART19.png" alt="Untitled Umuntu" width={90} height={250} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Refiloe Mnisi</p>
                        <p><span>Title:</span> Untitled Umuntu</p>
                        <p><span>Medium:</span> Mixed Media on Canvas</p>
                        <p><span>Size:</span> 30 x 100 cm<br/> (Edition of 10 unframed)</p>
                        <p><span>Year:</span> 2023</p>
                        <p><span>Price:</span> R15 000</p>
                    </div>
                </div>
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Ruth Motao</p>
                        <p><span>Title:</span> Garbage Removal <br/>Snake Park, Soweto 1991</p>
                        <p><span>Medium:</span> Inkjet on German Etching</p>
                        <p><span>Size:</span> 91 x 65 cm</p>
                        <p><span>Year:</span> 1991</p>
                        <p><span>Price:</span> R130 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART8.png" alt="Garbage Removal Snake Park, Soweto 1991" width={350} height={250} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART9.png" alt="Spiritual retreat for traditional healers and practitioner. Maotse, Free State" width={220} height={250} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Ruth Motao</p>
                        <p><span>Title:</span> Spiritual retreat for traditional healers<br /> and practitioner. Maotse, Free State</p>
                        <p><span>Medium:</span> Inkjet on German Etching</p>
                        <p><span>Size:</span> 44 x 57 cm</p>
                        <p><span>Year:</span> 1997</p>
                        <p><span>Price:</span> R130 000</p>
                    </div>
                </div>
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Mario Macilau</p>
                        <p><span>Title:</span> (Untitled) Faith Series</p>
                        <p><span>Medium:</span> Digital Print on Hahnemuhle Rag</p>
                        <p><span>Size:</span> 120 x 80 cm</p>
                        <p><span>Year:</span> 2022</p>
                        <p><span>Edition:</span> 1/6</p>
                        <p><span>Price:</span> $7600</p>
                    </div>
                    <div>
                        <Image src="/assets/ART12.png" alt="(Untitled) Faith Series" width={390} height={250} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART11.png" alt="Faith Series" width={390} height={250} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Mario Macilau</p>
                        <p><span>Title:</span> Faith Series</p>
                        <p><span>Medium:</span> Digital Print on Hahnemuhle Rag</p>
                        <p><span>Size:</span> 120 x 80 cm</p>
                        <p><span>Year:</span> 2022</p>
                        <p><span>Edition:</span> 1/6</p>
                        <p><span>Price:</span> $7600</p>
                    </div>
                </div>
            </div>
            <div className={styles["row"]}>
                <div className={styles.galleryPageRow}>
                    <div className={`${styles.galleryPageArtDetails} ${styles.leftText}`}>
                        <p><span>Artist:</span> Ditiro Mashingo</p>
                        <p><span>Title:</span> Duvha (Sun)</p>
                        <p><span>Medium:</span> Fabric Paint, Pastel Merino Wool On Board Paper</p>
                        <p><span>Size:</span> 145 x 106 cm</p>
                        <p><span>Year:</span> 2024</p>
                        <p><span>Price:</span> R53 000</p>
                    </div>
                    <div>
                        <Image src="/assets/ART17.png" alt="Duvha (Sun)" width={300} height={280} className={styles.galleryPageImg} />
                    </div>
                </div>
                <div className={styles.galleryPageRow}>
                    <div>
                        <Image src="/assets/ART14.png" alt="Misty Blues" width={300} height={280} className={styles.galleryPageImg} />
                    </div>
                    <div className={styles.galleryPageArtDetails}>
                        <p><span>Artist:</span> Ditiro Mashingo</p>
                        <p><span>Title:</span> Misty Blues</p>
                        <p><span>Medium:</span> Fabric Paint, Pastel Merino Wool On Board Paper</p>
                        <p><span>Size:</span> 145 x 106 cm</p>
                        <p><span>Year:</span> 2024</p>
                        <p><span>Price:</span> R53 000</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
);

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