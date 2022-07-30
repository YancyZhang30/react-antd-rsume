import React from "react";
import logo from "../../asset/logo.png";
import giteeLogo from "../../asset/gitee-logo.svg";
import gitgubLogo from "../../asset/github-logo.svg";
export default function HomeHeader(){

    return(
        <div style={{boxShadow: "0 0 5px #ccc",height: '60px',lineHeight: '60px',padding: "0 20px"}}>
            <header>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="about">
                    <a href="https://github.com/YancyZhang30/react-antd-rsume.git"><img src={giteeLogo} alt=""/></a>
                    <a href="https://github.com/YancyZhang30/react-antd-rsume.git"><img src={gitgubLogo} alt=""/></a>
                </div>
            </header>
        </div>
    )
}
