import React from 'react';
import { getBezierPath, EdgeLabelRenderer, BaseEdge } from 'reactflow';
import './customEdge.scss';

// this is a little helper component to render the actual edge label
function EdgeLabel({ transform, label }) {
  return (
    <div
      style={{
        transform
      }}
      className="nodrag nopan customEdge"
    >
      {label}
    </div>
  );
}

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        {data.startLabel && (
          <EdgeLabel
            transform={`translate(-50%, 0%) translate(${sourceX}px,${sourceY}px)`}
            label={data.startLabel}
          />
        )}
        {data.endLabel && (
          <EdgeLabel
            transform={`translate(-50%, -100%) translate(${targetX}px,${targetY}px)`}
            label={data.endLabel}
          />
        )}
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
