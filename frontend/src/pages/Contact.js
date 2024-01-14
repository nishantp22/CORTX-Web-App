import '../styles/Home.css';
import * as React from 'react';
import logo from '../assets/logo.png';
import logoTextOnly from '../assets/logoTextOnly.png';
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useState } from 'react';


const StyledButton = styled(Button)(({ }) => ({
    color: 'black',
    border: '2px solid',
    borderColor: 'rgb(200,200,200)',
    ':hover': {
      color: '#5B74B7',
      backgroundColor: 'rgb(245, 245, 245)',
      border: '2px solid',
      borderColor: '#5B74B7',
    },
  }));



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

export default function Compact() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [country,setCountry]=useState('')
    const [subject,setSubject]=useState('')
    const [body,setBody]=useState('')
    const [submitting,setSubmitting]=useState('Send Message');

    function handleFirstName(event){
        setFirstName(event.target.value)
    }
    function handleLastName(event){
        setLastName(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleCountry(event){
        setCountry(event.target.value)
    }
    function handleSubject(event){
        setSubject(event.target.value)
    }
    function handleBody(event){
        setBody(event.target.value)
    }


    async function sendQuery(){
        if(firstName===''||lastName===''||email===''||country===''||subject===''){
            setSubmitting('Please fill the mandatory fields marked as *')
            setTimeout(()=>setSubmitting('Send Message'), 3000);
        }
        else{
            try{
                setSubmitting('Submitting...')
                const response=await axios.post('http://localhost:5000/send_mail', {
                    first_name:firstName,
                    last_name:lastName,
                    email:email,
                    country:country,
                    subject:subject,
                    body:body?body:'No Body'
                })    
                setSubmitting('Message Sent Successfully!')
                console.log(response.data)
                setTimeout(()=>setSubmitting('Send Message'), 2000);
    
            }catch(error){
                console.error(error);
            };
            setBody('');setFirstName('');setLastName('');setSubject('');setEmail('');setCountry('')
        }
        
    }


    const variantsRight = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
    };
    const variantsLeft = {
        hidden: { opacity: 0, x: '-100%' },
        visible: { opacity: 1, x: 0 },
    };

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Helmet>
                <title>Contact | CORTX</title>
            </Helmet>
            <div>
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
                    <motion.h1 initial='hidden' animate='visible' variants={variantsRight} transition={{ stiffness: 50, duration: 0.8 }}
                        className='homeHeading'>Contact Us</motion.h1>
                    <motion.div initial='hidden' animate='visible' variants={variantsLeft} transition={{ stiffness: 50, duration: 0.8 }} style={{width:'500px'}}>
                        <h2 style={{textAlign:'center',color:'#5B74B7'}}>Leave us a message!</h2>
                        <Box
                            component="form"
                            sx={{'& .MuiTextField-root': { m: 1 },}} noValidate autoComplete="off">
                            <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
                                <TextField value={firstName} onChange={handleFirstName}sx={{width:'22ch'}} required id="outlined-required" label="First Name"/>
                                <TextField value={lastName} onChange={handleLastName} sx={{width:'22ch'}} required id="outlined-required" label="Last Name"/>
                                <TextField value={email} onChange={handleEmail} sx={{width:'22ch'}} required id="outlined-required" label="Email"/>
                                <TextField value={country} onChange={handleCountry} sx={{width:'22ch'}} required id="outlined-required" label="Country"/>
                                <TextField value={subject} onChange={handleSubject} fullWidth required id="outlined-multiline-flexible"  label="Subject"/>
                                <TextField value={body} onChange={handleBody} fullWidth id="outlined-multiline-flexible"  label="Write your message..."  multiline rows={4}/>
                                <Button disabled={submitting==='Submitting...'} onClick={sendQuery}fullWidth sx={{mt:2, borderRadius: 12.5, fontSize: '18px' }} className='about' variant="contained" size='large' color='cortx'>{submitting}</Button>
                            </div>
                        </Box>
                    </motion.div>
                    <motion.div initial='hidden' animate='visible' variants={variantsRight} transition={{ stiffness: 50, duration: 0.8 }} style={{display:'flex', alignItems:'center'}} >
                        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                            <div>
                                <p className="emailLabel"><b>Email</b></p>
                                <a className="mailLink" href="mailto:cortxhealth@gmail.com"><b>cortxhealth@gmail.com</b></a>
                            </div>
                            <div>
                                <p className="emailLabel"><b>Office</b></p>
                                <a href="#" className="mailLink"><b>CORTX Office Placeholder</b></a>
                            </div>
                            <div>
                                <h3>Follow Us</h3>
                                <StyledButton className='buttonControl' sx={{ height: '30px',maxWidth:'30px',minWidth:'30px',fontSize:'15px', }} size="small" variant="outlined" onClick={()=>{window.open('https://www.linkedin.com/in/nishant-pandey-6b7196247/')}}><FontAwesomeIcon style={{color:'#5B74B7'}} icon={faLinkedin}/></StyledButton>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </ThemeProvider>
    )
}