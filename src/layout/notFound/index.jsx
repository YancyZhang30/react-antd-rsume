import React from "react";
import "./index.css";
import {Button} from "antd";
import notFoundImg from "../../asset/404.svg";
import {useNavigate} from "react-router-dom";
export default function NotFound(){
    const nav = useNavigate();

    return(
        <div className="error-page">
            <div className="img-box">
                <img src={notFoundImg} alt=""/>
            </div>
            <p>┗|｀O′|┛ 嗷~~，页面不存在哦！</p>
            <div>
                <Button type="primary" onClick={()=>nav("/")}>回到首页</Button>
            </div>
        </div>
    )
}
