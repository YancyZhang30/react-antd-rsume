import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';
import './asset/global.less'


ReactDOM.render(
    <Router basename={'/r'}>
        <App/>
    </Router>,
    document.getElementById('root'));
