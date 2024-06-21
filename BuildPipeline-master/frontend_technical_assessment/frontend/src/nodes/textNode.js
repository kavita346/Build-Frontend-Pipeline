// textNode.js

import { useState } from 'react';
import Node from './Node';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [label, setLabel] = useState('Text');
  const textbox = document.getElementById("expandableTextBox");
  const [targetHandles, setTargetHandles] = useState([]);
  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    textbox.style.height = "auto";
    textbox.style.height = textbox.scrollHeight + "px";
    checkForVariables(e);
  };


  const checkForVariables = (event) => {
    const variableRegex = /\{\{(.*?)\}\}/g; // Regular expression for variable names

    const matches = event.target.value.match(variableRegex) || []; // Get all matches (or empty array)
    const temp = [];
    matches.forEach(match => {
      const variableName = match.slice(2, -2); // Extract variable name (remove braces)
      const found = temp?.find((item) => item === variableName);
      if (!found) {
        temp.push(variableName);
      }
    }
    );
    setTargetHandles(temp);
  }

  return (
    <Node id={id} type="Text" targetHandles={targetHandles} sourceHandles={[label]}>
      <input
        type="text"
        value={label}
        onChange={handleLabelChange}
        className='commonBoxStyle'
      />
      <textarea name="text" id="expandableTextBox" rows="1" cols="30" type="text"
        className='textBox'
        value={currText}
        placeholder='Start typing..'
        onChange={handleTextChange}>
      </textarea>
    </Node>
  );
}
