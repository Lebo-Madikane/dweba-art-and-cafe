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
                <meta name="description" content="Dweba Art & Cafe is a contemporary art gallery and cafe in Cape Town, showcasing bold African artists. Visit our exhibitions, enjoy artisan coffee, and explore unique artworks." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ArtGallery",
                            "name": "Dweba Art & Cafe",
                            "description": "Contemporary art gallery and cafe in Cape Town",
                            "url": "https://www.dwebaart.com",
                            "telephone": "+27710517574",
                            "email": "hello@dwebaart.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "167 Longmarket Street",
                                "addressLocality": "Cape Town",
                                "addressCountry": "ZA"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "opens": "09:00",
                                "closes": "17:00"
                            },
                            "sameAs": [
                                "https://www.instagram.com/dweba_art_cafe/",
                                "https://www.tiktok.com/@_dwebaartcpt_"
                            ]
                        })
                    }}
                />
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