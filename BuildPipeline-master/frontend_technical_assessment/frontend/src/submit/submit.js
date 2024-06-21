// submit.js
import './submit.scss';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import React, { useState } from 'react';
import Popup from '../popup/popup';

export const SubmitButton = () => {
  const [result, setResult] = useState({});
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges
  });
  const {
    nodes,
    edges
  } = useStore(selector, shallow);

  const data = { nodes: nodes, edges: edges };


  const submitPipeline = async () => {

    const url = new URL('http://127.0.0.1:8000/pipelines/parse');
    url.searchParams.append('pipeline', JSON.stringify(data));

    await fetch(url, { method: "POST" })
      .then(response => response.json())
      .then(data => {
        // Process the response data
        setResult(data);

      })
      .catch(error => {
        console.error('Error parsing pipeline:', error);
      });
  };

  return (
    <>
      <div className="submit" style={{}}>
        <button type="submit" onClick={() => submitPipeline()}>Submit</button>
      </div>
      {result.num_nodes && <Popup resultData={result} setVisibility={setResult}></Popup>}</>
  );
}
