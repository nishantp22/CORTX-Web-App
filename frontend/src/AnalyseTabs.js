import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LineChart from './AnalyseMonitor';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import BandActivity from './BandActivity';
import Papa from 'papaparse';


const VisuallyHiddenInput = styled('input')`clip: rect(0 0 0 0); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; bottom: 0; left: 0; white-space: nowrap; width: 1px;`;

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

export default function HomeTabs() {
  
  const mapping = { 0: 'fp1', 1: 'fp2', 2: 't3', 3: 't4', 4: 'o1', 5: 'o2', 6: 'p3', 7: 'p4' }

  const initialState = {
    fp1: {
      labels: [],
      datasets: [
        {
          label: 'FP1',
          pointRadius: 0,
          data: [],
          borderWidth: 0.5,
          borderColor: '#3498db',
          backgroundColor: '#3498db',
        },
      ],
    },
    fp2: {
      labels: [],
      datasets: [
        {
          label: 'FP2',
          pointRadius: 0,
          borderWidth: 0.5,
          data: [],
          borderColor: '#e74c3c',
          backgroundColor: '#e74c3c',
        },
      ],
    },
    t3: {
      labels: [],
      datasets: [
        {
          label: ' T3',
          pointRadius: 0,
          borderWidth: 0.5,
          data: [],
          borderColor: '#2c3e50',
          backgroundColor: '#2c3e50',
        },
      ],
    },
    t4: {
      labels: [],
      datasets: [
        {
          label: ' T4',
          pointRadius: 0,
          data: [],
          borderWidth: 0.5,
          borderColor: '#2ecc71',
          backgroundColor: '#2ecc71',
        },
      ],
    },
    o1: {
      labels: [],
      datasets: [
        {
          label: ' O1',
          pointRadius: 0,
          borderWidth: 0.5,
          data: [],
          borderColor: '#f39c12',
          backgroundColor: '#f39c12',
        },
      ],
    },
    o2: {
      labels: [],
      datasets: [
        {
          label: ' O2',
          pointRadius: 0,
          data: [],
          borderColor: '#9b59b6',
          borderWidth: 0.5,
          backgroundColor: '#9b59b6',
        },
      ],
    },
    p3: {
      labels: [],
      datasets: [
        {
          label: ' P3 ',
          pointRadius: 0,
          borderWidth: 0.5,
          data: [],
          borderColor: '#1abc9c',
          backgroundColor: '#1abc9c',
        },
      ],
    },
    p4: {
      labels: [],
      datasets: [
        {
          label: 'P4 ',
          pointRadius: 0,
          borderWidth: 0.5,
          data: [],
          borderColor: '#e67e22',
          backgroundColor: '#e67e22',
        },
      ],
    },
  };

  const barData = {
    labels: ['Delta', 'Theta', 'Alpha', 'Beta', 'Gamma', 'Sigma'],
    datasets: [
      {
        label: 'Data Set 1',
        backgroundColor: 'rgba(113,188,195,1)',
        borderColor: 'rgba(113,188,195,1)',
        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(113,188,195,0.3)',
        // hoverBorderColor: 'rgba(113,188,195,1)',
        data: [65, 59, 80, 81, 56, 22],
      },
    ],
  };


  const [state, setState] = useState(initialState);

  const [selectedFile, setSelectedFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      dynamicTyping: true, 
    });
  };

  function processFile(){
    for(let i=0;i<csvData.length;i++){
      for(let j=0;j<csvData[0].length;j++){
        initialState[mapping[i]].labels.push('0');
        initialState[mapping[i]].datasets[0].data.push(csvData[i][j]);
      }
    }
    setState(initialState);
  }



  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'left', gap:'50px' }}>
        <Tabs sx={{ mb: 1 }} value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "#5B74B7" } }} aria-label="basic tabs example">
          <Tab label="Monitor" {...a11yProps(0)} />
          <Tab label="Band Activity" {...a11yProps(1)} />
        </Tabs>
        <div className="controls">
          <StyledButton className='buttonControl' sx={{ height: '40px' }} size="small" variant="outlined" onChange={handleFileUpload} component="label" role={undefined}>Upload a Recorded File <VisuallyHiddenInput type="file" accept=".csv"/></StyledButton>
          {selectedFile&&<StyledButton className='buttonControl' sx={{ height: '40px' }} size="small" variant="outlined" onClick={processFile} component="label" role={undefined}>Show Recorded Data</StyledButton>}
          {selectedFile&&<p>Selected file : {selectedFile.name}</p>}
        </div>
      </Box>
      
      <CustomTabPanel value={value} index={0}>
        <LineChart state={state}></LineChart>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BandActivity state={state} barData={barData}></BandActivity>
      </CustomTabPanel>
    </Box>
  );
}
