import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Styles from '../styles/pages/cafePage.module.scss';

const MenuItems = () => (
    <div id="menu-items" className={Styles['menu-items']}>
        <div id='menu-text' className={Styles['menu-text-container']} >
            <div className={Styles['menu-text-bg']}>
                <div id='menu-text' className={Styles['menu-text']} >
                    <h2>Savor Artistry in Every Sip</h2>
                    <p>At Dweba Art & Café, immerse yourself in a harmonious blend of rich coffee flavors and captivating local artistry. Whether you're seeking inspiration, connection, or a tranquil workspace, our café offers the perfect setting to savor creativity in every sip.</p>
                    <h4>Experience the harmony of taste and art.</h4>
                </div>
            </div>
        </div>
        <div id='menu-container' className={Styles['menu-container']}>
            <div id='breakfast' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/breakfast.png" alt='breakfast image' width={150} height={150} className={Styles['breakfastImg']} />
                </div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Breakfast</h3>
                    <hr />
                    <ul>
                        <li>Classic egg benedict - <span>R105</span></li>
                        <li>Loaded egg benedict - <span>R135</span></li>
                        <li>Cheese omelette basic - <span>R80</span></li>
                        <li>Classic english breakfast - <span>R75</span></li>
                        <li>Herby scramble on toast - <span>R95</span></li>
                        <li>Loaded avocado toast with boiled or poached egg - <span>R120</span></li>
                        <li>Loaded avocado toast - <span>R95</span></li>
                        <li>Masela poached - <span>R90</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}></div>
            </div>
            <div id='croissaints' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}></div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Croissaints</h3>
                    <hr />
                    <ul>
                        <li>Plain croissant - <span>R25</span></li>
                        <li>Croissant with butter & jam - <span>R50</span></li>
                        <li>Croissant french toast - <span>R85</span></li>
                        <li>Croissant with herby scramble - <span>R95</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/croissant.jpg" alt='croissaints image' width={150} height={150} className={Styles['croissaintImg']} />
                </div>
            </div>
            <div id='salads' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/salad.JPG" alt='salads image' width={150} height={150} className={Styles['saladsImg']} />
                </div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Salads</h3>
                    <hr />
                    <ul>
                        <li>Classic greek - <span>R70</span></li>
                        <li>Waldorf salad - <span>R95</span></li>
                        <li>Summer panzanella - <span>R75</span></li>
                        <li>Lemon broccoli & wild rocket - <span>R95</span></li>
                        <li>Fruit salad with yogurt - <span>R80</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}></div>
            </div>
            <div id='burgers' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}></div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Burgers</h3>
                    <hr />
                    <ul>
                        <li>Smash burger - <span>R165</span></li>
                        <li>Caprese style burger - <span>R95</span></li>
                        <li>Smash chicken burger - <span>R155</span></li>
                        <li>Spicy lamb burger - <span>R165</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/burger.png" alt='burger image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
            </div>
            <div id='extras' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/extras.png" alt='burger image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Extras</h3>
                    <hr />
                    <ul>
                        <li>Egg - <span>R25</span></li>
                        <li>Brie - <span>R25</span></li>
                        <li>Beacon - <span>R25</span></li>
                        <li>Cheddar - <span>R15</span></li>
                        <li>Gherkins - <span>R10</span></li>
                        <li>Avocado - <span>R25</span></li>
                        <li>Camembert - <span>R25</span></li>
                        <li>Mozzarella - <span>R25</span></li>
                        <li>Side salad - <span>R35</span></li>
                        <li>Chesse platter - <span>R98</span></li>
                        <li>Cherry tomatoes - <span>R10</span></li>
                        <li>Breakfast sausage - <span>R25</span></li>
                        <li>Crispy fresh fries - <span>R25</span></li>
                        <li>Smoked chicken - <span>R25</span></li>
                        <li>Sweet potatoe's - <span>R35</span></li>
                        <li>Sauteed greens - <span>R30</span></li>
                        <li>Artisanal/Country bread - <span>R15</span></li>
                        <li>Feta - <span>R20</span></li>
                        <li>Kale - <span>R15</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}></div>
            </div>
            <div id='juices' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}></div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Juices</h3>
                    <hr />
                    <ul>
                        <li>Apple zing - <span>R55</span></li>
                        <li>Apple juice - <span>R35</span></li>
                        <li>Berry juice - <span>R35</span></li>
                        <li>Orange juice - <span>R35</span></li>
                        <li>Spinach juice - <span>R50</span></li>
                        <li>Cranberry juice - <span>R35</span></li>
                        <li>Carrot juice - <span>R35</span></li>
                        <li>Celery juice - <span>R50</span></li>
                        <li>Ginger shot - <span>R25</span></li>
                        <li>Cucumber, lemon cooler - <span>R55/R70</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/juicez.jpg" alt='juice image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
            </div>
            <div id='cold-drinks' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/cold-drink.png" alt='cold drinks image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Cold Drinks</h3>
                    <hr />
                    <ul>
                        <li>Sprite - <span>R22</span></li>
                        <li>Lemonade - <span>R22</span></li>
                        <li>Ice coffee - <span>R45</span></li>
                        <li>Still water - <span>R15/R30</span></li>
                        <li>Sparkling water - <span>R15/R45</span></li>
                        <li>Coke(ligth, zero) - <span>R22</span></li>
                        <li>Appletizer(grape) - <span>R30</span></li>
                        <li>Cream soda - <span>R22</span></li>
                        <li>Ginger ale - <span>R22</span></li>
                        <li>Dry lemon - <span>R22</span></li>
                        <li>Fanta - <span>R22</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}></div>
            </div>
            <div id='hot-drinks' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}></div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Hot Drinks</h3>
                    <hr />
                    <ul>
                        <li>Tea - <span>R25</span></li>
                        <li>Espresso - <span>R28</span></li>
                        <li>Flat white - <span>R40</span></li>
                        <li>Macchiato - <span>R28</span></li>
                        <li>Americano - <span>R30</span></li>
                        <li>Dark hot chocolate - <span>R45</span></li>
                        <li>White hot chocolate - <span>R45</span></li>
                        <li>Cappuccino - <span>R45</span></li>
                        <li>Chai latte - <span>R54</span></li>
                        <li>Baby chino - <span>R5</span></li>
                        <li>Cortado - <span>R35</span></li>
                        <li>Latte - <span>R45</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/coffee.jpg" alt='coffee image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
            </div>
            <div id='mocktails' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/mocktail.png" alt='smoothie image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Mocktails</h3>
                    <hr />
                    <ul>
                        <li>Rock shandy - <span>R45</span></li>
                        <li>Cucumber lime - <span>R55</span></li>
                        <li>No tequila sunrise - <span>R45</span></li>
                        <li>Passionate lady - <span>R45</span></li>
                        <li>Virgin mojito - <span>R45</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}></div>
            </div>
            <div id='smoothies' className={Styles['menu-category']}>
                <div className={Styles["menu-category-img"]}></div>
                <div className={Styles["menu-category-detail"]}>
                    <h3>Smoothies</h3>
                    <hr />
                    <ul>
                        <li>Tropical breeze - <span>R55</span></li>
                        <li>Peanut butter bliss - <span>R55</span></li>
                        <li>Berry smoothie - <span>R70</span></li>
                    </ul>
                </div>
                <div className={Styles["menu-category-img"]}>
                    <Image src="/assets/smoothie.jpg" alt='mocktail image' width={150} height={150} className={Styles['menuImgs']} />
                </div>
            </div>
        </div>
    </div>
);

const MenuPage = () => {

    return (
        <section>
            <Header />
            <MenuItems />
            <Footer />
        </section>
    );

};

export default MenuPage;