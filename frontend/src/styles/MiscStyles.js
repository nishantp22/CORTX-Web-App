
import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });



export const defaultTheme = createTheme({
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
        black:createColor('#000000')
    },
});