import './styles/Home.css';
import eeg from "./assets/eeg.png"
import * as React from 'react';
import logo from './assets/logo.png';
import logoTextOnly from './assets/logoTextOnly.png';
import Button from '@mui/material/Button';
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"



const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });



const defaultTheme = createTheme({
    typography: {
        fontFamily: "'Quicksand', sans-serif",
        button: {
            textTransform: "none"
        }
    },
    palette: {
        anger: createColor('#F40B27'),
        apple: createColor('#5DBA40'),
        steelBlue: createColor('#5C76B7'),
        violet: createColor('#BC00A3'),
        cortx: createColor('#71BCC3'),
        cortxSecondary: createColor('#5B74B7'),
    },
});

export default function Home() {

    const variants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
    };

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Helmet>
                <title>Home | CORTX</title>
            </Helmet>
            <div >
                <div className="appBar">
                    <div className='LogoDivHome'>
                        <Link to='/'>
                            <div className="logoDiv">
                                <img className="logoHome" src={logo} alt="logo"></img>
                                <img className="logoTextHome" src={logoTextOnly} alt="logoText"></img>
                            </div>
                        </Link>
                    </div>
                    <div className='homeNav'>
                        <Link className='linkNav' to='/'><b>Home</b></Link>
                        <Link className='linkNav' to='/About'><b>About</b></Link>
                        <Link className='linkNav' to='/Health'><b>Health</b></Link>
                        <Link className='linkNav' to='/Contact'><b>Contact</b></Link>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="homeContent">
                    <motion.h1 initial='hidden' animate='visible' variants={variants} transition={{ stiffness: 50, duration: 1.5 }}
                        className='homeHeading'>Elevating Experiences, Unleashing Potential</motion.h1>
                    <img style={{ width: '400px' }} alt='eegDevice' src={eeg}></img>
                    <div className='homeText'>
                        <p className="homeTextP">In the quiet corners of the cosmos, where stars whisper ancient secrets, a cosmic dance unfolds. Celestial bodies pirouette in the vast expanse, choreographing a symphony of light and shadow. Nebulas weave tapestries of color, while galaxies twirl in the cosmic ballet. Each shimmering point of light tells a story, a narrative written in the language of the universe.</p>
                        <div className='homeButtons'>
                            <Button sx={{ maxWidth: '200px', minWidth: '200px', borderRadius: 12.5, fontSize: '18px' }} className='about' variant="contained" size='large' color='cortx'>Get Device</Button>
                            <Button sx={{ maxWidth: '200px', minWidth: '200px', borderRadius: 12.5, fontSize: '18px' }} className='about' variant="contained" size='large' color='cortx' onClick={() => { navigate('/Analyse') }}>Connect Device</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </ThemeProvider>
    )
}