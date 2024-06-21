import { useState } from 'react';
// import { Handle, Position } from 'reactflow';
import Node from './Node'; 

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'Input '));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <Node id={id} type="Input" targetHandles={[]} sourceHandles={[currName]}>
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
          <select value={inputType} onChange={handleTypeChange}
            className='dropdown'
            >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
    </Node>
  );
}
