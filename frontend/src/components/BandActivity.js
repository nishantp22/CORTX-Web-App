import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';

const options = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
      labels: {
        boxWidth: 0,
      }
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};
const barOptions = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          display: false,
          labels: {
            boxWidth: 0,
          }
        },
      },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      
      y: {
        display: false,
      },
    },
  };


export default function BandActivity({ state,barData }) {
  return (
    <div style={{ display: 'flex',flexDirection:'column' }}>
      <div style={{position:'relative' ,width: '100%' }}>
        <div style={{height:'300px'}} className="lineDiv">
          <Line style={{ position:'relative', width: '100%'}} data={state.fp1} options={options} />
            <div  style={{position: 'absolute', top: '50%', transform: 'translate(4.7%,-52.5%)', backgroundColor: 'rgba(113,188,195,0.3)',width:'15%',height:'100%' }}>
                <h4 style={{textAlign:'center',zIndex:'100'}}>Delta</h4>
            </div>
            <div  style={{position: 'absolute', top: '50%',left:'50%', transform: 'translate(-228.8%, -52.5%)',width:'15%',height:'100%' }}>
                <h4 style={{textAlign:'center',zIndex:'100'}}>Theta</h4>
            </div>
            <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-129.1%, -52.5%)', backgroundColor: 'rgba(113,188,195,0.3)',width:'15%',height:'100%'}}>
                <h4 style={{textAlign:'center',zIndex:'100'}}>Alpha</h4>
            </div>
            <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-17.5%, -52.5%)',width:'25%',height:'100%' }}>
                <h4 style={{textAlign:'center',zIndex:'100'}}>Beta</h4>
            </div>
            <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(68.7%, -52.5%)', backgroundColor: 'rgba(113,188,195,0.3)',width:'30%',height:'100%', }}>
                <h4 style={{textAlign:'center',zIndex:'100'}}>Gamma</h4>
            </div>
          </div>
      </div>
      <div style={{height:'300px',width:'100%'}}>
        <Bar data={barData} options={barOptions}></Bar>
      </div>
    </div>
  );
}
