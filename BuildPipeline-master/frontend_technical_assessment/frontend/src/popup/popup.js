import React from 'react';
import './popup.scss';


const Popup = ({resultData, setVisibility }) => {
console.log(resultData);
  return (
    <div className='fullscreen-container'> 
    <div className='popup'>
        <h2>Results</h2>
        <hr/>
        <h4>There are {resultData.num_nodes} nodes</h4>
        <h4>There are {resultData.num_edges} edges</h4>
        <h4>This graph {resultData.is_dag ? 'IS': ' IS NOT '} cyclic</h4>
        <hr/>
        <button className='close' onClick={() => { setVisibility({}) }}>close</button>
    </div>
    </div>
  );
};

export default Popup;
