import React from "react";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import {CheckCircleOutlined, CheckCircleTwoTone} from "@ant-design/icons";


export const TemplatesList = ({handleChange, index}) => {
    const list = [
        {
            id: 1,
            imageUrl: "https://thumb.jianliben.com/tplimg/tpl_tpl131_131.jpg",
            name: "通栏式极简风商务蓝",
            desc: "成熟稳重, 简约而不简单。"
        },
        {
            id:2,
            imageUrl: "https://thumb.jianliben.com/tplimg/tpl_tpl108_108.jpg",
            name: "图片背景潮流风格",
            desc: "图片背景, 美观大气。"
        },
        {
            id: 3,
            imageUrl: "https://thumb.jianliben.com/tplimg/tpl_tpl110_110.jpg",
            name: "双栏布局模板",
            desc: "双栏布局, 一目了然。"
        }
    ]

    function handleSelect(i){
        handleChange({index: i}, true)
    }

    return (
        <div className={'list'} style={{padding: '10px', display: 'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
            {
                list.map(i=>(
                    <div style={{padding: '10px 0', width: '47%'}} key={i.id} onClick={(e)=> handleSelect( i.id, e)}>
                        <Card
                            hoverable
                            style={{ width: '100%', padding: 10 }}
                            cover={<img alt="example" src={i.imageUrl}/>}
                            actions={ i.id === index ? [<CheckCircleTwoTone/>] : [<CheckCircleOutlined />]}
                        >
                            <Meta title={i.name} description={i.desc} />
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}
