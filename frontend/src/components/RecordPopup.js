import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import  Button  from "@mui/material/Button";
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from "../styles/MiscStyles";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};

export default function RecordPopup({ recordPopupOpen, handleRecordPopupClose,handleStart, handleFileName,handleDurationSet }) {
    const [duration,setDuration]=useState(30)
    const handleDurationPopup = (event) => {
        setDuration(event.target.value);
        handleDurationSet(event.target.value);
      };
    return (
        <ThemeProvider theme={defaultTheme}>

        <Modal
            open={recordPopupOpen}
            onClose={handleRecordPopupClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography sx={{ textAlign: 'center' }} id="modal-modal-title" variant="h4" component="h2">
                    Record
                </Typography>
                <TextField sx={{mt:3,mb:3}} fullWidth id="outlined-basic" label="File Name (Default : recording)" variant="outlined" onChange={handleFileName} />
                <FormControl sx={{mb:3}} fullWidth>
                    <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={duration}
                        label="Duration"
                        onChange={handleDurationPopup}
                        >
                        <MenuItem value={10}>10 Seconds</MenuItem>
                        <MenuItem value={30}>30 Seconds</MenuItem>
                        <MenuItem value={60}>1 Minute</MenuItem>
                        <MenuItem value={120}>2 Minutes</MenuItem>
                        <MenuItem value={300}>5 Minutes</MenuItem>
                        <MenuItem value={600}>10 Minutes</MenuItem>
                        <MenuItem value={1800}>30 Minutes</MenuItem>
                    </Select>
                </FormControl>
                <div style={{display:'flex',justifyContent:'right',columnGap:'10px'}}>
                    <Button sx={{ maxWidth: '160px', minWidth: '160px', borderRadius: 12.5, fontSize: '15px' }} className='about' variant="outlined" size='large' color='black' onClick={handleRecordPopupClose}>Cancel</Button>
                    <Button sx={{ maxWidth: '160px', minWidth: '160px', borderRadius: 12.5, fontSize: '15px' }} className='about' variant="contained" size='large' color='cortx' onClick={()=>{handleStart();handleRecordPopupClose()}}>Start Recording</Button>
                </div>
            </Box>
        </Modal>
        </ThemeProvider>
    )
}