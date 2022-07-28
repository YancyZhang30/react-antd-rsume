import React, {useCallback, useContext} from "react";
import {ResumeContext} from "../initialState"
import debounce from "lodash.debounce";
import "./index.less";
import { Tabs, Button, Modal } from 'antd';
const { TabPane } = Tabs;
import {config} from './config';
import {FormGenerator, FormListCreator} from "./FormGenerator";
import {AvatarSetting} from "./avatar";
import {TemplatesList} from "./templatesList";
import Preview from "../preview/idnex";
import { PDFDownloadLink} from "@react-pdf/renderer";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function Editor(){
    const { state, dispatch } = useContext(ResumeContext);

    const handleSave = useCallback(
        debounce((value) => {
            dispatch({
                type: "save",
                payload: value,
            });
        }, 1000),
        []
    );

    const handleChange = (value, immediately) => {
        if (immediately) {
            dispatch({
                type: "save",
                payload: value,
            });
        } else {
            handleSave(value);
        }
    };

    const restore = () => {
        dispatch({
            type: "restore",
            payload: {},
        });
    }

    const confirm = () => {
        Modal.confirm({
            title: '重置简历',
            icon: <ExclamationCircleOutlined />,
            content: '重置简历以后, 输入的简历信息将清空！',
            okText: '确认',
            cancelText: '取消',
            onOk: restore
        });
    };

    return(
        <div>
            <div className="editor-header">
                <Link to="/"><span className={'title'} style={{color:"#228245"}}>🌱 小草简历 </span></Link>
                <div className={'option'}>
                    <PDFDownloadLink
                        document={<Preview state={state}/>}
                        fileName={`${state.profile.name}的简历.pdf`}
                    >
                        <Button type='primary'>下载简历</Button>
                    </PDFDownloadLink>
                    <Button onClick={confirm}>重置信息</Button>
                </div>
            </div>
            <div className="menu">
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    style={{
                        height: "100%"
                    }}
                >
                    <Tabs.TabPane tab="🎃模板选择" key="0">
                        <TemplatesList handleChange={handleChange} index={state.index}></TemplatesList>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="👨‍💻基本信息" key="1">
                        <AvatarSetting handleChange={handleChange} values={state.avatar}></AvatarSetting>
                        <FormGenerator
                            config={config.profile}
                            name="profile"
                            value={state.profile}
                            onChange={handleChange}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="🏫教育经历" key="2">
                        <FormListCreator
                            name="educationList"
                            config={config.educationList}
                            value={state}
                            onChange={handleChange}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="🛠️专业技能" key="3">
                        <FormListCreator
                            name="skillList"
                            config={config.skillList}
                            value={state}
                            onChange={handleChange}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="📒项目经历" key="4">
                        <FormListCreator
                            name="projectList"
                            config={config.projectList}
                            value={state}
                            onChange={handleChange}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="🧰工作经历" key="5">
                        <FormListCreator
                            name="workExpList"
                            config={config.workExpList}
                            value={state}
                            onChange={handleChange}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="🎖️荣誉证书" key="6">
                        <FormListCreator
                            name="awardList"
                            config={config.awardList}
                            value={state}
                            onChange={handleChange}
                        />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}
