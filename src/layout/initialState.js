import React from "react";
import {message} from "antd";

export const initialState = {
    index: 1,
    profile: {
        name: "小草简历",
        age:20,
        sex: "男",
        experience: "应届生",
        email: "**********@qq.com",
        mobile: "188********",
        positionTitle: "前端开发工程师",
    },
    avatar: {
        url: new URL(`../asset/avatar.jpg`, import.meta.url).href,
        display: true,
        circle: true,
        theme: "1",
    },
    skillList: [
        {
            name: "1、能熟练使用XX工具做XX工作"
        },
        {
            name: "2、有XX技能实践经验，能完成XX工作"
        },
        {
            name: "3、取得XX证书，能熟练处理XX工作"
        }
    ],
    educationList: [
        {
            start_time: "2019.09",
            end_time: "2023.06",
            school: "XX大学",
            major: "XX专业",
            degree: "XX学历",
        },
    ],
    awardList: [
        {
            info: "1、获得的证书"
        },
        {
            info: "2、比赛获得的奖项"
        }
    ],
    workExpList: [
        {
            company: "公司名称",
            department: "所在部门",
            role: "职位",
            start_time: "2019.09",
            end_time: "2023.06",
            desc: "公司介绍：如有必要，这里可对公司做简单的介绍\n工作内容：\n你负责做了什么事情，运用了哪些工具和方法，取得了什么成果，分条陈列。",
        }
    ],
    projectList: [
        {
            name: "项目名称",
            role: "担任角色",
            start_time: "2019.09",
            end_time: "2023.06",
            desc: "项目介绍：如有必要，这里可对项目做简单的介绍\n工作内容：\n你负责做了什么事情，运用了哪些工具和方法，取得了什么成果，分条陈列。"
        },
    ],
};

export const ResumeContext = React.createContext({
    state: initialState,
    dispatch: (action) => action,
});

export function reducer(state, action){
    switch (action.type) {
        case "save":
            localStorage.setItem(
                "resume_data",
                JSON.stringify({ ...state, ...action.payload })
            );
            message.success('简历已更新.');
            return { ...state, ...action.payload };
        case "restore":
            localStorage.removeItem("resume_data");
            message.success('简历已重置.');
            return initialState;
        default:
            message.error('意外的错误.');
            throw new Error();
    }
}
