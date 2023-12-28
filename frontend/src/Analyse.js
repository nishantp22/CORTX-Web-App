import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBattery } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AnalyseTabs from './AnalyseTabs';
import logo from './assets/logo.png';
import logoTextOnly from './assets/logoTextOnly.png';
import './styles/Analyse.css';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { motion } from "framer-motion"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  borderRadius:'15px',
  boxShadow: 24,
  p: 4,
};



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const defaultTheme = createTheme({
  typography: {
    fontFamily:"'Quicksand', sans-serif",
    button:{ 
      textTransform: "none"
    }
  } 
});

export default function Dashboard() {

  const [user, setUser] = useState('');

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };


  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }; 
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={menuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
  </Menu>
);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Helmet>
        <title>Analyse | CORTX</title>
      </Helmet>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{textAlign:'center'}} id="modal-modal-title" variant="h4" component="h2">
            Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ol>
              <li>Turn the EEG device On and connect your computer to the Wi-Fi network 'IITK ORIC EEG'.</li>
              <li>A gateway page opens. Click on 'Configure Wi-Fi' and connect to another Wi-Fi network, mobile hotspot etc.
              If the connection is successful, the light on the EEG device will change to <b>Blue</b>.
              </li>
              <li>Connect your computer to the same Wi-Fi network used in step 2.</li>
              <li>Download the EEG device Connection Client Here.</li>
              <li>Extract the zip file, and run the Windows Batch file named 'CORTX.bat'. Two separate windows will open,
                Don't close any of these windows. Click on 'Allow' if any security prompt from Windows appears. 
              </li>
              <li>If the device is successfully connected, you can see the data packets being transferred in the two windows.
              </li>
              <li>View the real-time data from the EEG device on this page.
              </li>
            </ol>
          </Typography>
        </Box>
      </Modal>
    </div>
      <motion.Box initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar sx={{backgroundColor:'rgb(235, 235, 235)'}}position="absolute">
          <Toolbar
            sx={{
              pr: '24px', 
              display:'flex',
              justifyContent:'space-between'
            }}
          >
              <div style={{width:'10%'}} className='LogoDiv'>
                <Link to='/'>
                  <div className="logoDiv">
                    <img className="logo" src={logo} alt="logo"></img>
                    <img className="logoText" src={logoTextOnly} alt="logoText"></img>
                  </div>
                </Link>
                </div>
                <div className="user">

                  <Box sx={{ minWidth: 250, maxWidth: 250,mr:3}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user}
                  label="User"
                  onChange={handleChangeUser}
                  >
                  <MenuItem value={'User 1'}>User 1</MenuItem>
                  <MenuItem value={'User 2'}>User 2</MenuItem>
                  <MenuItem value={'User 3'}>User 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
                </div>

            <div className="iconButtons">
            <IconButton color="inherit" onClick={handleOpen}>
              <FontAwesomeIcon className="navBarIcon" icon={faCircleQuestion} />
            </IconButton>
            <IconButton color="inherit">
              <FontAwesomeIcon className="navBarIcon" icon={faBattery} />
            </IconButton>
            <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
          <AccountCircle sx={{color:'black', fontSize:'40px'}} />
        </IconButton>
      </MenuItem>
          </div>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={2000} md={200} lg={2000}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <AnalyseTabs></AnalyseTabs>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      {renderMenu}
      </motion.Box>
    </ThemeProvider>
  );
}
