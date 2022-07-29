import React from "react";
import {useNavigate} from "react-router-dom";
import HomeHeader from "./homeHeader";
import "./index.css";
import {Button} from "antd";
import p1_img from "../../asset/p1_img.png"

export default function HomePage(){
    const navigate = useNavigate();

    return(
        <div className="home">
            <HomeHeader></HomeHeader>
            <div className="main">
                <div className="p1">
                    <div className="p1-left-box" style={{fontSize: '20px'}}>
                        <h1 style={{color: "#228245", fontWeight: 800}}>小 草 简 历</h1>
                        <p style={{color: '#555'}}>即使像小草一样，也要野蛮生长，把最长的根插进最深的土壤！</p>
                        <div className="intro" style={{color: '#666'}}>
                            <ol>
                                <li>无需注册登录，数据储存于LocalStorage中。</li>
                                <li>填写表单，动态响应，实时预览。</li>
                                <li>多重模板，多样选择。</li>
                            </ol>
                        </div>
                        <Button onClick={()=>navigate('/resume')} size={'large'}>立即使用</Button>
                    </div>

                    <div className="p1-right-box">
                        <img src={p1_img} alt=""/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>© 2022 小草简历 </p>
            </div>
        </div>
    )
}
