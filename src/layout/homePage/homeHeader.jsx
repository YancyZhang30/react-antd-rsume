import React from "react";
import {GithubOutlined} from "@ant-design/icons";
import logo from "../../asset/logo.png";

export default function HomeHeader(){

    return(
        <div style={{boxShadow: "0 0 5px #ccc",height: '60px',lineHeight: '60px',padding: "0 20px"}}>
            <header>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="about">
                    <a href="https://github.com/YancyZhang30/react-antd-rsume.git"><GithubOutlined /></a>
                </div>
            </header>
        </div>
    )
}
