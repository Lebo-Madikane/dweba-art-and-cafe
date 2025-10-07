import '../styles/global.scss'; // Import Global Styles
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>Dweba Art & Cafe - Contemporary Art Gallery in Cape Town</title>
                <meta name="description" content="Dweba Art & Cafe is a contemporary art gallery and cafe in Cape Town, showcasing bold African artists. Visit our exhibitions, enjoy artisan coffee, and explore unique artworks." />
                <meta name="keywords" content="art gallery Cape Town, contemporary art, African artists, cafe Cape Town, art exhibitions, Dweba Art, South African art, gallery coffee shop" />
                <meta name="author" content="Dweba Art & Cafe" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dwebaart.com/" />
                <meta property="og:title" content="Dweba Art & Cafe - Contemporary Art Gallery" />
                <meta property="og:description" content="Contemporary art gallery and cafe in Cape Town showcasing bold African artists." />
                <meta property="og:image" content="https://www.dwebaart.com/assets/Dweba-Logo-White.svg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.dwebaart.com/" />
                <meta property="twitter:title" content="Dweba Art & Cafe" />
                <meta property="twitter:description" content="Contemporary art gallery and cafe in Cape Town." />

                {/* Viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;