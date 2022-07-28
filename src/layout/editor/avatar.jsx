import React from "react";
import {Button, Card, Upload, Switch} from "antd";
import {UploadOutlined} from "@ant-design/icons";


export  function AvatarSetting({handleChange, values}){
    function beforeUpload(file) {
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
            handleChange({
                avatar: {
                    ...values,
                    url: e.currentTarget.result
                }
            },  true)
        }
        return false //使upload组件停止上传
    }

    function showAvatar(c){
        handleChange({
            avatar: {
                ...values,
                display: c,
            }
        },  true)
    }

    return (
        <div className={'form-creator'}>
            <Card>
                <Upload beforeUpload={beforeUpload} maxCount={1}>
                    <Button icon={<UploadOutlined />}>点我上传头像</Button>
                </Upload>
                <div style={{padding: '10px 0'}}>
                    <span>显示头像: </span><Switch checked={values.display} onChange={showAvatar} />
                </div>
            </Card>
        </div>
    )
}
