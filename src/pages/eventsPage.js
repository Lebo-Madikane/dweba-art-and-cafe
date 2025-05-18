import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/pages/eventsPage.module.scss';

const EventsContent = () => (
    <div className={styles["eventsBackground"]}>
        <div className={styles["eventsContainer"]}>
            <div className={styles["eventsHeading"]}>
                <h1>Join Us!</h1>
                <h4>Upcoming events at Dweba Art & Cafe: May 2025 - June 2025</h4>
            </div>
            <div className={styles["events"]}>
                <div className={styles["events1"]}>
                    <h3>Saturday, 24 May: Exhibition Walkthrough("Inside=Outside") with Refiloe Mnisi</h3>
                    <div className={styles["events1Contents"]}>
                        <div className={styles["events1details"]}>
                            <h4>Step inside the story</h4>
                            <p>Join us Saturday, 24 May from 11AM – 12PM for the Inside = Outside Exhibition Walkthrough by Refiloe Mnisi — a guided journey through layers of colour, identity, and emotion.</p>
                            <p>Dweba Art & Café, 167 Longmarket Street, Cape Town</p>
                            <p>Don’t forget to stay for our signature all-day breakfast and soak in the gallery café experience.</p>
                            <p>Come for the art. Stay for the energy.</p>
                        </div>
                        <div className={styles["events1img"]}>
                            <Image src='/assets/walkthroughPoster.png' alt="EventOne Img" width={400} height={500} className={styles["eventOneImg"]} />
                        </div>
                    </div>
                </div>
                <div className={styles["events2"]}>
                    <h3>Thursday, 05 June: First Thursday</h3>
                    <div className={styles["events2Contents"]}>
                        {/* <div className={styles["events2-1container"]}>
                            <div className={styles["events2-1img"]}>
                                <Image src='/assets/RefiloeMnisi-OpeningShow.png' alt="EventTwo-One Img" width={400} height={500} className={styles["eventTwo-OneImg"]} />
                            </div>
                            <div className={styles["events2-1details"]}>
                                <h4>Refiloe Mnisi: Opening Show</h4>
                                <p>We are proud to present Refiloe Mnisi’s Opening Show — an intimate unveiling of his latest visual stories. Refiloe brings raw emotion, vibrant colour, and deeply expressive layers that speak to both the present and ancestral memory.</p>
                                <p>Join us for an evening of art, conversation, and culture. This marks Refiloe’s first solo showcase since joining the Dweba studio, and we cannot wait to share this moment with our growing creative community</p>
                                <p>Come through, sip something warm, and witness the beginning of something beautiful.</p>
                            </div>
                        </div> */}
                        <div className={styles["events2container"]}>
                            <div className={styles["events2img"]}>
                                <Image src='/assets/FirstFriday.png' alt="EventTwo Img" width={400} height={500} className={styles["eventTwoImg"]} />
                            </div>
                            <div className={styles["events2details"]}>
                                <h4>First Thursday, 05 June: From 5PM till late</h4>
                                <p>Join us for another spirited edition of First Thursday at Dweba — where art, music, and community collide in one of Cape Town’s most vibrant cultural spaces.</p>
                                <p>This month’s gathering promises an open-door celebration of creativity: warm light, soulful sounds, curated art moments, and the comforting aroma of freshly brewed coffee from our café.</p>
                                <p>No bookings. No barriers. Just come as you are.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["events3"]}>
                    <h3>Downstairs: Now Showcasing</h3>
                    <div className={styles["events3Contents"]}>
                        <div className={styles["events3details"]}>
                            <h4>Featured Artwork: The Reading Man III</h4>
                            <p>By Julius Badatu</p>
                            <p>Born in Tanzania and now based in Cape Town, Julius Badatu brings soulful intensity to his work.</p>
                            <p>The Reading Man III captures a quiet, powerful moment of reflection—rooted in Badatu’s mission to use art as a tool for spiritual growth, communication, and human connection. Through fine art and oil painting, he creates stories that speak directly to the soul.</p>
                            {/* <button className={styles["purchase-btn"]}><Link href="https://www.quicket.co.za/events/307400-ixesha-lixhatshwe-zizinja-awakening/?preview=t#/">Buy Ticket</Link></button> */}
                        </div>
                        <div className={styles["events3img"]}>
                            <Image src='/assets/theReadingMan.png' alt="EventTwo Img" width={400} height={500} className={styles["eventThreeImg"]} />
                        </div>
                    </div>
                </div>
            </div>
            {/*  
            
            EVENT SPONSOR/SUPPORTER FOOTER

            <div className={styles["eventsFooter"]}>
                <p>Dweba Art & Café, 167 Longmarket Street, Cape Town</p>
                <p>Follow us on <a href="https://www.instagram.com/dweba_art_cafe/" target="_blank">Instagram</a> |
                    <a href="https://www.tiktok.com/@_dwebaartcpt_?lang=en" target="_blank"> Tiktok</a>
                </p>
                <div className={styles["eventSponsor"]}>
                    <p>The Dweba Art & Cafe launch is proudly supported by Musgrave Spirits.</p>
                    <Image src='/assets/Musgrave.png' alt="EventTwo Img" width={100} height={50} className={styles["eventSponsorImg"]} />
                </div>
            </div>
            */}
        </div>  
    </div>
);

const eventsPage = () => {
    return (
        <section>
            <Header />
            <EventsContent />
            <Footer />
        </section>
    );
};

export default eventsPage;