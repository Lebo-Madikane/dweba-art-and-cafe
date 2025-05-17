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
                        <span className={Style["event-entry"]}>FREE ENTRANCE</span> ●
                    </h4>
                </div>
            </div>
            <div className={Style["event-two"]}>
                <h4> ● <span className={Style["event-name"]}>FIRST THURSDAY : FROM 6PM TILL LATE</span> ● 05 JUNE 2025 ● <span className={Style["event-location"]}>167 LONGMARKET ST. CAPE TOWN</span> ● DWEBA ART & CAFE ● <span className={Style["event-entry"]}> FREE ENTRANCE</span> ● </h4>
            </div>
            <div className={Style["event-memories"]}>
                <div className={Style["marquee-track"]}>
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img2.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img3.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img4.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img5.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img6.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img7.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img8.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img9.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img10.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img11.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img12.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img13.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img15.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img16.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img17.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
                            </div>
                            <div className={Style["event-memory-container"]}>
                                <Image src='/assets/events-img18.png' alt="logo" width={150} height={50} className={Style["memory-img-1"]} />
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