import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/pages/galleryPage.module.scss';

const GalleryGrid = () => (
    <div className={styles.galleryContainer}>
        <div className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
                <h3>Inside = Outside</h3>
                <h4>Now Showing - Until 6 June 2025</h4>
                <p>A solo exhibition by Refiloe Mnisi</p>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
            </div>
            <div className={styles.galleryShowMoreBtn}>Show More</div>
        </div>
        <div className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
                <h3>Inside = Outside</h3>
                <h4>Now Showing - Until 6 June 2025</h4>
                <p>A solo exhibition by Refiloe Mnisi</p>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
            </div>
            <div className={styles.galleryShowMoreBtn}>Show More</div>
            <div className={styles.galleryHeader}>
                <h3>Inside = Outside</h3>
                <h4>Now Showing - Until 6 June 2025</h4>
                <p>A solo exhibition by Refiloe Mnisi</p>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
            </div>
            <div className={styles.galleryShowMoreBtn}>Show More</div>
        </div>
        <div className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
                <h3>Inside = Outside</h3>
                <h4>Now Showing - Until 6 June 2025</h4>
                <p>A solo exhibition by Refiloe Mnisi</p>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
                <div className={styles["artwork"]}></div>
            </div>
            <div className={styles.galleryShowMoreBtn}>Show More</div>
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