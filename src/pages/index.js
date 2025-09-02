// This is the Homepage (e.g, / )

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Cafe from '../components/Cafe';
import Events from '../components/Events';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <div className='back-ground'>
            <Head>
                <title>Dweba Art & Café</title>
                <meta name="description" content="A space for creativity, connection, and coffee." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            <section id="home">
                <Hero />
            </section>
            <About />
            <section id="gallery">
                <Gallery />
            </section>
            <section id="cafe">
                <Cafe />
            </section>
            <Events />
            <Form />
            <section id="contact">
                <Footer />
            </section>
        </div>
    );

};

export default Home;