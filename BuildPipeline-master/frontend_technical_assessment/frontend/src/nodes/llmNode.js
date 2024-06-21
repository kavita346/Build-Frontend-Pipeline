// llmNode.js

import Node from './Node';
export const LLMNode = ({ id, data }) => {

  return (
    <Node id={id} type="LLM" targetHandles={['Input', 'one', 'two', 'three']} sourceHandles={['Output']}>
      <span style={{margin: "0.5rem 1rem"}}>This is a LLM. You can add any amount children or functionality to this node.</span>
    </Node>
  );
}
