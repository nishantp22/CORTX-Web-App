import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LineChart from './Monitor';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import record from './assets/record.png'



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


function CustomTabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AnalyseTabs() {
  
  const initialState = {
    fp1: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: 'FP1',
          pointRadius: 0,
          data: new Array(1000).fill(0),
          borderWidth: 0.5,
          borderColor: '#3498db',
          backgroundColor: '#3498db',
        },
      ],
    },
    fp2: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: 'FP2',
          pointRadius: 0,
          borderWidth: 0.5,
          data: new Array(1000).fill(0),
          borderColor: '#e74c3c',
          backgroundColor: '#e74c3c',
        },
      ],
    },
    t3: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: ' T3',
          pointRadius: 0,
          borderWidth: 0.5,
          data: new Array(1000).fill(0),
          borderColor: '#2c3e50',
          backgroundColor: '#2c3e50',
        },
      ],
    },
    t4: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: ' T4',
          pointRadius: 0,
          data: new Array(1000).fill(0),
          borderWidth: 0.5,
          borderColor: '#2ecc71',
          backgroundColor: '#2ecc71',
        },
      ],
    },
    o1: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: ' O1',
          pointRadius: 0,
          borderWidth: 0.5,
          data: new Array(1000).fill(0),
          borderColor: '#f39c12',
          backgroundColor: '#f39c12',        
        },
      ],
    },
    o2: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: ' O2',
          pointRadius: 0,
          data: new Array(1000).fill(0),
          borderColor: '#9b59b6',
          borderWidth: 0.5,
          backgroundColor: '#9b59b6',
        },
      ],
    },
    p3: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: ' P3 ',
          pointRadius: 0,
          borderWidth: 0.5,
          data: new Array(1000).fill(0),
          borderColor: '#1abc9c',
          backgroundColor: '#1abc9c',
        },
      ],
    },
    p4: {
      labels: Array.from({ length: 1000 }, () => '0'),
      datasets: [
        {
          label: 'P4 ',
          pointRadius: 0,
          borderWidth: 0.5,
          data: new Array(1000).fill(0),
          borderColor: '#e67e22',
          backgroundColor: '#e67e22',
        },
      ],
    },
  };

  const mapping = { 0: 'fp1', 1: 'fp2', 2: 't3', 3: 't4', 4: 'o1', 5: 'o2', 6: 'p3', 7: 'p4' }

  const [state, setState] = useState(initialState);
  const [dataPoints,setDataPoints] = useState(1280);


  const fetchDataAndDisplay = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/data');
      const data_r = response.data;
      const numRows = 8;
      const numCols = 64;

      const dataArray = new Array(numRows);

      for (let i = 0; i < numRows; i++) {
        dataArray[i] = new Array(numCols);
      }


      for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 8; j++) {
          dataArray[j][i] = (data_r[i].channel_data[j])
        }
      }

      const updateState = (key) => {
        const maxDataPoints=dataPoints
        const newLabels = [...state[mapping[key]].labels, ...dataArray[key].map(String)].slice(-maxDataPoints);
        const newDataPoints = [...state[mapping[key]].datasets[0].data, ...dataArray[key]].slice(-maxDataPoints);

        const newData = {
          labels: newLabels,
          datasets: [
            {
              ...state[mapping[key]].datasets[0],
              data: newDataPoints,
            },
          ],
        };

        setState((prevState) => ({
          ...prevState,
          [mapping[key]]: newData,
        }));
      };
      updateState(0);
      updateState(1);
      updateState(2);
      updateState(3);
      updateState(4);
      updateState(5);
      updateState(6);
      updateState(7);
    } catch (error) {
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchDataAndDisplay, 250);
    return () => clearInterval(intervalId);
  }, [state]);


  
  const [started, setStarted] = useState(false)
  const startedText = started ? 'Finish' : 'Record'
  function handleStart() {
    if(started){
      setStarted(false)
      setElapsedTime(0)
    }
    else setStarted(true)
  }
  const [elapsedTime, setElapsedTime] = useState(0);
  function formatElapsedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  


  useEffect(() => {
    let interval;

    if (started) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [started]);


  const [uV, setUV] = useState('');

  const handleChangeUV = (event) => {
    setUV(event.target.value);
  };

  const [time, setTime] = useState('');

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    setDataPoints(event.target.value);
  };


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
        <Tabs sx={{ mb: 1 }} value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "#5B74B7" } }} aria-label="basic tabs example">
          <Tab label="Monitor" {...a11yProps(0)} />
          <Tab label="Band Activity" {...a11yProps(1)} />
        </Tabs>
        <div className="controls">
            <h3 style={{margin:'0'}}>{formatElapsedTime(elapsedTime)}</h3>
            {started?<img className="record" src={record} alt="recording" />:null}
            <StyledButton className='buttonControl' sx={{ height: '40px' }} onClick={handleStart} size="small" variant="outlined">{startedText}</StyledButton>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="userDiv">
            <div className="uvTimeControls">
              <div className="uvTimeControlsInner">
                <FormControl sx={{ minWidth: 100, mb: 2 }} size="small">
                  <InputLabel id="demo-simple-select-label">uV</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={uV}
                    label="uV"
                    onChange={handleChangeUV}>
                    <MenuItem value={10}>10uV</MenuItem>
                    <MenuItem value={20}>20uV</MenuItem>
                    <MenuItem value={30}>30uV</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 100, mb: 2 }} size="small">
                  <InputLabel id="demo-simple-select-label">time</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    label="time"
                    onChange={handleChangeTime}>
                    <MenuItem value={512}>2 Secs</MenuItem>
                    <MenuItem value={1280}>5 Secs</MenuItem>
                    <MenuItem value={2560}>10 Secs</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          <div className='buttons'>

            <TextField sx={{ p: 0 }}
              label="Add a Comment"
              variant="outlined"
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <FontAwesomeIcon style={{ fontSize: '18px' }} icon={faPenToSquare} />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { fontSize: 15 }
              }}
            />
            <StyledButton sx={{ height: '40px', color: 'black', borderColor: 'black' }} size="small" variant="outlined"><FontAwesomeIcon icon={faBookmark} /> &nbsp; Mark</StyledButton>
          </div>
        </div>
        <LineChart state={state}></LineChart>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      </CustomTabPanel>
    </Box>
  );
}
