export const config = {
    profile: [
        {
            type: "input",
            displayName: "姓名",
            attributeId: "name",
        },
        {
          type: "number",
          displayName: "年龄",
          attributeId: "age",
        },
        {
          type: "input",
          displayName: "性别",
          attributeId: "sex"
        },
        {
          type: "input",
          displayName: "工作经验",
          attributeId: "experience"
        },
        {
            type: "input",
            displayName: "手机",
            attributeId: "mobile",
        },
        {
            type: "input",
            displayName: "email",
            attributeId: "email",
        },
        {
            type: "input",
            displayName: "求职意向",
            attributeId: "positionTitle",
        },
    ],
    educationList: [
        {
            type: "input",
            displayName: "学校",
            attributeId: "school",
        },
        {
            type: "input",
            displayName: "开始时间",
            attributeId: "start_time",
        },
        {
            type: "input",
            displayName: "结束时间",
            attributeId: "end_time",
        },
        {
            type: "input",
            displayName: "专业",
            attributeId: "major",
        },
        {
            type: "input",
            displayName: "学位",
            attributeId: "degree",
        },
    ],
    skillList: [
        {
            type: "input",
            displayName: "技能描述",
            attributeId: "name",
        }
    ],
    workExpList: [
        {
            type: "input",
            displayName: "公司名称",
            attributeId: "company",
        },
        {
            type: "input",
            displayName: "部门",
            attributeId: "department",
        },
        {
            type: "input",
            displayName: "职位",
            attributeId: "role",
        },
        {
            type: "input",
            displayName: "开始时间",
            attributeId: "start_time",
        },
        {
            type: "input",
            displayName: "结束时间",
            attributeId: "end_time",
        },
        {
            type: "textarea",
            displayName: "工作描述",
            attributeId: "desc",
        },
    ],
    projectList: [
        {
            type: "input",
            displayName: "项目名称",
            attributeId: "name",
        },
        {
            type: "input",
            displayName: "担任角色",
            attributeId: "role",
        },
        {
            type: "input",
            displayName: "开始时间",
            attributeId: "start_time",
        },
        {
            type: "input",
            displayName: "结束时间",
            attributeId: "end_time",
        },
        {
            type: "textarea",
            displayName: "项目描述",
            attributeId: "desc",
        }
    ],
    awardList: [
        {
            type: "input",
            displayName: "描述",
            attributeId: "info",
        }
    ],
};

export const themes = [
    {
        key: "1",
        name: "墨绿",
        primaryColor: "#084c41",
        secondaryColor: "#B1D0E0",
    },

    {
        key: "2",
        name: "山吹",
        primaryColor: "#f48a00",
        secondaryColor: "#fff8e6",
    },
    {
        key: "3",
        name: "蓝莹",
        primaryColor: "#5c9dff",
        secondaryColor: "#dbeafe",
    },
    {
        key: "4",
        name: "凝夜紫",
        primaryColor: "#B983FF",
        secondaryColor: "#F3F1F5",
    },
    {
        key: "5",
        name: "绿意",
        primaryColor: "#35b378",
        secondaryColor: "rgba(127, 226, 159, 0.48)",
    },
    {
        key: "6",
        name: "极客黑",
        primaryColor: "#141E27",
        secondaryColor: "#E0DDAA",
    },
];
