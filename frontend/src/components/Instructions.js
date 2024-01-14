import  Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

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

export default function Instructions({ open, handleClose }){
    return(
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
    )
}