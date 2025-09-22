import Image from 'next/image';
import Style from '../styles/components/Events.module.scss';
import Link from 'next/link';
import React from "react";

const Events = () => {

    return (
        <div className={Style["events"]}>
            <div className={Style["event-one"]}>
                <div className={Style["marquee-track"]}>
                    <h4>
                        <span className={Style["event-name"]}> EXHIBITION WALKTHROUGH(INSIDE=OUTSIDE): BY REFILOE MNISI</span> ● 24 MAY 2025 ●
                        <span className={Style["event-location"]}>167 LONGMARKET ST. CAPE TOWN</span> ● DWEBA ART & CAFE ●
                        <span className={Style["event-entry"]}>FREE ENTRANCE</span> ●
                    </h4>
                    <h4>
                        <span className={Style["event-name"]}>EXHIBITION WALKTHROUGH(INSIDE=OUTSIDE): BY REFILOE MNISI</span> ● 24 MAY 2025 ●
                        <span className={Style["event-location"]}>167 LONGMARKET ST. CAPE TOWN</span> ● DWEBA ART & CAFE ●
                        <span className={Style["event-entry"]}>FREE ENTRANCE</span>
                    </h4>
                </div>
            </div>
            <div className={Style["event-two"]}>
                <h4><span className={Style["event-name"]}>● FIRST THURSDAY : FROM 6PM TILL LATE ●</span><span className={Style["event-location"]}> 05 JUNE 2025 ● 167 LONGMARKET ST. CAPE TOWN ● DWEBA ART & CAFE ●</span><span className={Style["event-entry"]}> FREE ENTRANCE  ● </span></h4>
            </div>
            <div className={Style["event-memories"]}>
                <div className={Style["marquee-track"]}>
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img2.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img3.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img4.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img5.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img6.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img7.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img8.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img9.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img10.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img11.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img12.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img13.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img15.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img16.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img17.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events/events-img18.webp' alt="Events Image" width={150} height={50} className={Style["memory-img-1"]} placeholder="empty" priority />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {/* <div className={Style["event-three"]}></div> */}
            <div className={Style["event-four"]}>
                <div className={Style["marquee-track"]}>
                    <h4>
                        <span className={Style["event-name"]}> DWEBA WINE & DINE: 6 COURSE </span> ● 26 JUNE 2025 ●
                        <span className={Style["event-location"]}>167 LONGMARKET ST. CAPE TOWN</span> ● DWEBA ART & CAFE ●
                        <span className={Style["event-entry"]}> INVITATION </span> ●
                    </h4>
                    <h4>
                        <span className={Style["event-name"]}> DWEBA WINE & DINE: 6 COURSE </span> ● 26 JUNE 2025 ●
                        <span className={Style["event-location"]}>167 LONGMARKET ST. CAPE TOWN</span> ● DWEBA ART & CAFE ●
                        <span className={Style["event-entry"]}> INVITATION </span> ●
                    </h4>
                </div>
            </div>
            <button className={Style["view-events-btn"]}><Link href='/eventsPage'>VIEW EVENTS</Link></button>
        </div>
    );

}

export default Events;