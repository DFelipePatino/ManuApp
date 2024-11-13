import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AudioPlayer from './AudioPlayer';

const AboutPage = () => {

    let song =
        <div className='playerApp'>
            <AudioPlayer />
        </div>

    const photos = [
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
        '/img6.jpg',
        '/img7.jpg',
        '/img8.jpg',
    ];

    const bioText = 'Mi Mangü 🥭 Mangüelita, mi baby beef bonita, no me desampares ni de noche ni de día... jiji 😊. Mi hermosa bebé, zarrapatreichon, marsu, rats... Hoy quiero desearte el más feliz de los cumpleaños 🎉. Estás en un lugar y momento hermoso de tu vida, y sé que, como yo lo estoy por ti, tú también estás muy feliz, y... amo que seas feliz!. Quiero seguir sabiendo de tus logros y nuevas aventuras en Europeichon 🌍, que estoy seguro serán aún más lindas de recordar que aquellas que, aunque retadoras, nos sacan de nuestra zona de confort y nos ponene a aprender. Pero yo sé, bebé, que tú eres la más poderosa del mundo y puedes con todo 💪✨. Te extraño todos los días y quiero verte pronto 🥹. Este año la vida me dejó sin WhatsApp en tu cumple, así que, en vez de enviarte un mensaje... te hice una app ❤️. Te ciero... y te amo.';

    const songLink = "https://youtube.com/shorts/frJpybfc8so";

    return (
        <Container style={{ marginTop: "3%" }}>
            {song}
            <Carousel
                className="carousel"
                navButtonsAlwaysInvisible={false}
                animation="fade"
                autoPlay={true}
                stopAutoPlayOnHover={true}
                interval={7000}
                indicators={false}
                cycleNavigation={true}
                swipe={true}
                navButtonsProps={{
                    style: { backgroundColor: 'transparent', color: '#fff' } // Adjust as needed
                }}
                navButtonsWrapperProps={{
                    style: { top: '50%', transform: 'translateY(-50%)' } // Adjust as needed
                }}
            >
                {photos.map((item, i) => (
                    <Paper style={{ display: 'flex', justifyContent: 'center' }} key={i}>
                        <img
                            src={item}
                            alt={`Carousel image ${i + 1}`}
                            style={{ width: 'auto', height: '500px', display: 'flex', justifyContent: 'center' }}
                        />
                    </Paper>
                ))}
            </Carousel>
            <Typography style={{ marginTop: "30px", marginRight: "50px", marginLeft: "50px" }} variant="body1">
                {bioText}
                <br />
                <br />
                <Link href={songLink} target="_blank" rel="noopener noreferrer">
                    Ahh. y tambien te hice esta creisi song jiji
                </Link>
            </Typography>
        </Container>
    );
};

export default AboutPage;
