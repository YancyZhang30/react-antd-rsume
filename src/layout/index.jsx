import React, {useReducer} from "react";
import Editor from "./editor";
import Preview from "./preview/idnex";
import "./index.less";
import pdf from "@react-pdf/renderer";
const { PDFViewer } = pdf;

import {
    ResumeContext,
    initialState,
    reducer
} from "./initialState.js";

export default function Layout() {
    let initial = initialState;
    try {
        const local = JSON.parse(localStorage.getItem("resume_data"));
        if (local) {
            initial = local;
        }
    } catch (error) {}

    const [state, dispatch] = useReducer(reducer, initial);

    return (
        <ResumeContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            <div className="layout">
                <div className="editor">
                    <Editor></Editor>
                </div>
                <div className="preview flex-1 bg-gray-800 flex justify-center items-center">
                    <PDFViewer showToolbar={false} style={{width: '100%', height: '100%'}} >
                        <Preview state={state}></Preview>
                    </PDFViewer>
                </div>
            </div>
        </ResumeContext.Provider>
    )
}
