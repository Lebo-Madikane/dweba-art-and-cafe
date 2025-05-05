import Image from 'next/image';
import Style from '../styles/components/Cafe.module.scss';
import Link from 'next/link';

const Cafe = () => {

    return (
        <div className={Style["cafe"]}>
            <div className={Style["cafe-content"]}>
                <h2>The Cafe: All-Day Breakfast & Artful Experiences</h2>
                <p>
                    At Dweba Cafe, we believe that art and flavours belong together. Whether you're looking for a hearty breakfast, a quick
                    artisan pastry, or a richly brewed cup of coffee, our menu is crafted to complement the creative energy that fills our
                    space.
                </p>
                <p>Visit us for a unique fusion of culinary and creative indulgence.</p>
                <Link href="/cafePage">
                    <button className={Style["view-menu-btn"]}>VIEW MENU</button>
                </Link>
            </div>
            <div className={Style["cafe-img-container"]}>
                <Image src='/assets/All-Day-Breakfast.svg' alt="logo" width={150} height={50} className={Style["cafe-img"]} />
            </div>
        </div>
    );

}

export default Cafe;