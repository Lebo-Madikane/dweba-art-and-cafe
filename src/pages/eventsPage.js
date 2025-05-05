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
                <h4>Upcoming events at Dweba Art & Cafe: April 2025 - May 2025</h4>
            </div>
            <div className={styles["events"]}>
                <div className={styles["events1"]}>
                    <h3>28 April - 01 May: Dweba Art & Cafe x TFAG/Africa Present: “Expressions Exhibition”</h3>
                    <div className={styles["events1Contents"]}>
                        <div className={styles["events1details"]}>
                            <h4>A 4-day celebration of creativity, identity & liberation.</h4>
                            <p>This Exhibition steps into a vibrant world of creativity, culture and connection as <span>Dweba Art & Cafe</span> in partnership with <span>TFAG/Africa</span> brings you a remote gallery experience at <span>TimeOut Market, Cape Town</span>.</p>
                            <p>Expressions Exhibition is more than an art showcase — it's a living tribute to the unspoken, the bold, and the deeply personal voices of our time.</p>
                            <p>From 28 April to 01 May 2025, visitors will journey through an immersive collection of contemporary global works that challenge, comfort, and spark conversation.</p>
                            <p>Don't Miss Opening Day: Join us on 28 April for Live Painting by <span>Refiloe Mnisi</span>, where the brush tells the story.</p>
                        </div>
                        <div className={styles["events1img"]}>
                            <Image src='/assets/ExpressionsExhibition.png' alt="EventOne Img" width={400} height={500} className={styles["eventOneImg"]} />
                        </div>
                    </div>
                </div>
                <div className={styles["events2"]}>
                    <h3>Thursday, 01 May 2025: Refiloe Mnisi(As Above, So below) x First Thursday</h3>
                    <div className={styles["events2Contents"]}>
                        <div className={styles["events2-1container"]}>
                            <div className={styles["events2-1img"]}>
                                <Image src='/assets/RefiloeMnisi-OpeningShow.png' alt="EventTwo-One Img" width={400} height={500} className={styles["eventTwo-OneImg"]} />
                            </div>
                            <div className={styles["events2-1details"]}>
                                <h4>Refiloe Mnisi: Opening Show</h4>
                                <p>We are proud to present Refiloe Mnisi’s Opening Show — an intimate unveiling of his latest visual stories. Refiloe brings raw emotion, vibrant colour, and deeply expressive layers that speak to both the present and ancestral memory.</p>
                                <p>Join us for an evening of art, conversation, and culture. This marks Refiloe’s first solo showcase since joining the Dweba studio, and we cannot wait to share this moment with our growing creative community</p>
                                <p>Come through, sip something warm, and witness the beginning of something beautiful.</p>
                            </div>
                        </div>
                        <div className={styles["events2container"]}>
                            <div className={styles["events2img"]}>
                                <Image src='/assets/FirstFriday.png' alt="EventTwo Img" width={400} height={500} className={styles["eventTwoImg"]} />
                            </div>
                            <div className={styles["events2details"]}>
                                <h4>First Thursday: From 5PM till late</h4>
                                <p>Dweba Art & Café is back in the heart of Cape Town’s First Thursday groove! Step into a night where art meets energy, and creativity flows from canvas to cup.</p>
                                <p>This month, we’ll be showcasing new works from resident artist Refiloe Mnisi, alongside spontaneous sketches, live music, and conversations worth keeping. Whether you're here to connect, reflect, or simply unwind — Dweba promises something fresh and soulful.</p>
                                <p>Expect warm lights, vibrant sights, and the smell of good coffee. No tickets. Just good vibes and open doors.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["events3"]}>
                    <h3>Friday, 02 May 2025: Ixesha Lixhatshwe Zizinja Awakening</h3>
                    <div className={styles["events3Contents"]}>
                        <div className={styles["events3details"]}>
                            <h4>Ixesha Lixhatshwe Zizinja Awakening: 6pm - 9pm</h4>
                            <p>We host Ixesha Lixhatshwe Zizinja Awakening, a live performance by the bold and inspiring Qaqamba Ntshinka</p>
                            <p>This is more than just a show, this experience is a wake-up call—a poetic reminder that time is precious and dreams deserve action. With a stunning all-white stage design, immersive sound, and live instrumentation, every moment will be captured.</p>
                            <p>Early Bird Tickets are now available at a special discounted rate!
                                But hurry—these limited tickets won't last long.</p>
                            <button className={styles["purchase-btn"]}><Link href="https://www.quicket.co.za/events/307400-ixesha-lixhatshwe-zizinja-awakening/?preview=t#/">Buy Ticket</Link></button>
                        </div>
                        <div className={styles["events3img"]}>
                            <Image src='/assets/IxeshaLixhatshweZizinja.jpeg' alt="EventTwo Img" width={400} height={500} className={styles["eventThreeImg"]} />
                        </div>
                    </div>
                </div>
            </div>
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
        </div>  
    </div>
);

const eventsPage = () => {
    return (
        <section>
            <Header />
            <EventsContent />
        </section>
    );
};

export default eventsPage;