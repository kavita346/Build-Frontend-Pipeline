// outputNode.js

import { useState } from 'react';
import Node from './Node';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'Output '));
  const [outputType, setOutputType] = useState(data.outputType || '');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <Node id={id} type="Output" targetHandles={["one", "two", "three"]} sourceHandles={[]}>
      <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className='commonBoxStyle'
          />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}
            className='dropdown'
            >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
    </Node>
  );
}
