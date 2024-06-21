// toolbar.js

import { DraggableNode } from "../draggableNode/draggableNode";
import "./toolbar.scss";

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <h2>Build Pipeline</h2>
            <div className="options">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
