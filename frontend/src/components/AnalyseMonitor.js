import { Line } from 'react-chartjs-2';
import 'chart.js/auto';



const options = {
  animation: false,
//   responsive: true,
  maintainAspectRatio: false,
  plugins: {

    tooltip: {
      enabled: false,
   },
    legend: {
      display:false,
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

export default function LineChart({state}) {

  return (
    <div id="monitorDiv" style={{display:'flex',justifyContent:'center'}}>
      <div className="chartLabels">
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>Fp1</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>Fp2</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>&nbsp;T3</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>&nbsp;T4</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>&nbsp;O1</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>&nbsp;O2</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>&nbsp;P3</h3>
        </div>
        <div style={{display:'flex'}}>
        {/* <FontAwesomeIcon style={{margin:'auto',paddingRight:'10px'}}icon={faSignal} /> */}
          <h3>&nbsp;P4</h3>
        </div>
      </div>
      <div className="lineDivAnalyseContainer">
        <div className="chartWrapper"style={{width:state.fp1.datasets[0].data.length*(3/4)}}>
                <div className="lineDivAnalyse" >
                    <Line data={state.fp1} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line  data={state.fp2} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line data={state.t3} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line data={state.t4} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line  data={state.o1} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line  data={state.o2} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line  data={state.p3} options={options} />
                </div>
                <div className="lineDivAnalyse" >
                <Line data={state.p4} options={options} />
                </div>
            </div>
      </div>
    </div>
  )
};