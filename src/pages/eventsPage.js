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
                <h4>Events at Dweba Art & Cafe</h4>
            </div>
            <div className={styles["events"]}>
                <div className={styles["events1"]}>
                    <h3>Emandulo: The Silent Sonic Experience</h3>
                    <div className={styles["events1Contents"]}>
                        <div className={styles["events1details"]}>
                            <h4>Emandulo: The Silent Sonic Experience</h4>
                            <p>Join us on the 31st of October for a truly unique celebration of sound, culture, and movement at Emandulo: The Silent Sonic Experience — a one-of-a-kind silent disco set in the heart of Dweba Art & Café.</p>
                            <p>In honour of Heritage Day, we invite you to journey through South Africa's rich and rhythmic history with live jazz music performed by Zintle 'NeAhtyah' Mbuyazwe and her band, along with Simanye Gxobole as our special guest.</p>
                            <p>This immersive experience also includes a taste of traditional South African cuisine, to nourish your body after the music has fed your soul — this will be included in your ticket.</p>
                            <button className={styles["purchase-btn"]} target="_blank"><Link href="https://www.quicket.co.za/events/332310-emandulo-the-silent-sonic-experience/#/" target='blank'>Buy Ticket</Link></button>
                        </div>
                        <div className={styles["events1img"]}>
                            <Image src='/assets/eventsPageImgs/eventPostponed.webp' alt="EventOne Img" width={400} height={500} className={styles["eventOneImg"]} placeholder="empty" priority />
                        </div>
                    </div>
                </div>
                <div className={styles["events2"]}>
                    <h3>Dweba Art & Cafe Artist Residency</h3>
                    <div className={styles["events2Contents"]}>
                        <div className={styles["events2container"]}>
                            <div className={styles["events2img"]}>
                                <Image src='/assets/eventsPageImgs/Ziyanda-M.png' alt="EventTwo Img" width={400} height={500} className={styles["eventTwoImg"]} placeholder="empty" priority />
                            </div>
                            <div className={styles["events2details"]}>
                                <h4>Resident Artist: Ziyanda Majozi</h4>
                                <p>Dweba Art & Cafe proudly welcomes Ziyanda Majozi as our current Resident Artist.</p>
                                <p>Known for her layered visual storytelling, Ziyanda’s work explores memory, heritage, and identity- transforming everyday narratives into powerful art.</p>
                                <p>Experience her journey with us this season.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["events3"]}>
                    <h3>ECHIBINI: Women of the well (with Qaqamba Ntshinka & Chosi)</h3>
                    <div className={styles["events3Contents"]}>
                        <div className={styles["events3details"]}>
                            <h4>"Wherever the river flows, everything will live."</h4>
                            <p>ECHIBINI is an intimate evening of healing, restoration, and soulful connection . A return to the well, where truth is revealed, burdens are released, and life begins again.</p>
                            <p>Inspired by the resilience and quiet strength of women, this gathering creates space for stories, reflection, music, and presence. It is a gentle invitation to come as you are and leave lighter, nourished, and renewed</p>
                            <p>A night to soften. A moment to be seen. A place to be filled.</p>
                        </div>
                        <div className={styles["events3img"]}>
                            <Image src='/assets/eventsPageImgs/echibini.jpeg' alt="EventTwo Img" width={400} height={500} className={styles["eventThreeImg"]} placeholder="empty" priority />
                        </div>
                    </div>
                </div>

                <div className={styles["events2"]}>
                    <h3>First Thursday</h3>
                    <div className={styles["events2Contents"]}>
                        <div className={styles["events2container"]}>
                            <div className={styles["events2img"]}>
                                <Image src='/assets/firstThursdayPoster.png' alt="EventTwo Img" width={400} height={500} className={styles["eventTwoImg"]} placeholder="empty" priority />
                            </div>
                            <div className={styles["events2details"]}>
                                <h4>First Thursday: From 5PM till late</h4>
                                <p>Spirited edition of First Thursday at Dweba — where art, music, and community collide in one of Cape Town’s most vibrant cultural spaces.</p>
                                <p>Every month’s gathering promises an open-door celebration of creativity: warm light, soulful sounds, curated art moments, and the comforting aroma of freshly brewed coffee from our café.</p>
                                <p>No bookings. No barriers. Just come as you are.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["events3"]}>
                    <h3>Dweba Art & Cafe Artist Residency</h3>
                    <div className={styles["events3Contents"]}>
                        <div className={styles["events3details"]}>
                            <h4>Inside = Outside: Solo Show</h4>
                            <p>By Refiloe Mnisi</p>
                            <p>We are proud to have presented Refiloe Mnisi’s Opening Show — an intimate unveiling of his latest visual stories. Refiloe brings raw emotion, vibrant colour, and deeply expressive layers that speak to both the present and ancestral memory.</p>
                            <p>An evening of art, conversation, and culture. This marked Refiloe’s first solo showcase since joining the Dweba studio.</p>
                        </div>
                        <div className={styles["events3img"]}>
                            <Image src='/assets/eventsPageImgs/R-Mnisi-Solo-Poster.png' alt="EventTwo Img" width={400} height={500} className={styles["eventThreeImg"]} placeholder="empty" priority />
                        </div>
                    </div>
                </div>
                <div className={styles["events2"]}>
                    <h3>Dweba Art & Cafe: Jazz Sunday</h3>
                    <div className={styles["events2Contents"]}>
                        <div className={styles["events2container"]}>
                            <div className={styles["events2img"]}>
                                <Image src='/assets/eventsPageImgs/Sunday-Jazz.png' alt="EventTwo Img" width={400} height={500} className={styles["eventTwoImg"]} placeholder="empty" priority />
                            </div>
                            <div className={styles["events2details"]}>
                                <h4>WEEKEND LAUNCH – DAY 3: JAZZ SUNDAY</h4>
                                <p>The perfect way to close off an incredible launch weekend—smooth jazz, soulful melodies, and an intimate gathering of art and music lovers.</p>
                                <p>Qaqamba Ntshinka took center stage, bringing the house down with a breathtaking performance that left us in awe.</p>
                                <p>This was just the beginning… because we have a special announcement coming soon! 👀🔥</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["events3"]}>
                    <h3>Dweba Art & Cafe: Weekend Launch</h3>
                    <div className={styles["events3Contents"]}>
                        <div className={styles["events3details"]}>
                            <h4>Official launch weekend.</h4>
                            <p>Dweba Art and Cafe aims to be Cape Town’s premier platform for local and international artists and collectors, who fearlessly confront contemporary issues through diverse visual languages, including humour and satire, dramaturgy, performance, music and Live Art, fostering a space where creativity challenges societal norms and ignites meaningful dialogue</p>
                            <p>167 Longmarket Street, Cape Town. South Africa.</p>
                        </div>
                        <div className={styles["events3img"]}>
                            <Image src='/assets/eventsPageImgs/Launch-Poster.png' alt="EventTwo Img" width={400} height={500} className={styles["eventThreeImg"]} placeholder="empty" priority />
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