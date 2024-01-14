import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png';
import logoTextOnly from '../assets/logoTextOnly.png';
import { Link } from "react-router-dom";
import "../styles/Analyse.css"

export const SideNavbar = (
    <div>
        <div style={{ width: '10%', position: 'absolute', top: '-50px', left: '12px' }} className='LogoDiv'>
            <Link to='/'>
                <div className="logoDiv">
                    <img className="logo" src={logo} alt="logo"></img>
                    <img className="logoText" src={logoTextOnly} alt="logoText"></img>
                </div>
            </Link>
        </div>
        <React.Fragment>
            <div id="sideNavDiv" style={{marginTop:'10px'}}>
            <Link className="sideNavLink" to="/">
            <ListItemButton>
                <ListItemIcon>
                        <FontAwesomeIcon style={{ style: '20px', color: 'black' }} icon={faArrowLeft} />
                </ListItemIcon>
                <ListItemText primary="Website" />
            </ListItemButton>
            </Link>
            <Link className="sideNavLink" to="/Home">
            <ListItemButton>
                <ListItemIcon>
                    <FontAwesomeIcon style={{ style: '20px', color: 'black' }} icon={faHome} />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            </Link>
            <Link className="sideNavLink" to="/Analyse">
            <ListItemButton>
                <ListItemIcon>
                    <FontAwesomeIcon style={{ style: '20px', color: 'black' }} icon={faChartLine} />
                </ListItemIcon>
                <ListItemText primary="Analyse" />
            </ListItemButton>
            </Link>
            </div>
        </React.Fragment>
    </div>
);
