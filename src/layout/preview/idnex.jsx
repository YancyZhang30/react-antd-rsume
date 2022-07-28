import React from 'react';
import pdf from "@react-pdf/renderer";
const {Document } = pdf;
import {ResumeT1} from "./reaumeTemplates/resumeT1";
import {ResumeT2} from "./reaumeTemplates/resumeT2";
import {ResumeT3} from "./reaumeTemplates/resumeT3";

// Create Document Component
const Preview = ({ state }) => {
    let tempalteIndex = state.index;
    try {
        const index = JSON.parse(localStorage.getItem("tempalte_index"));
        if (index) {
            tempalteIndex = index;
        }
    } catch (error) {}
    function switchTemp(i){
        switch (i) {
            case 1:
                return <ResumeT1 state={state}></ResumeT1>;
            case 2:
                return <ResumeT2 state={state}></ResumeT2>;
            case 3:
                return <ResumeT3 state={state}></ResumeT3>
        }
    }
    return (
            <Document >
                {switchTemp(tempalteIndex)}
            </Document>
    )
}

export default Preview;
