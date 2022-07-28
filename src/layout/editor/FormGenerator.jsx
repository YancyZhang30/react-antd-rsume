import React from "react";
import get from "lodash.get";
import map from "lodash.map";
import { Form, Input, InputNumber, Button, Switch, Card, Radio, DatePicker} from "antd";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons"


const FormItemComponentMap = (type) => (props) => {
    switch (type) {
        case "theme":
            return (
                <Radio.Group {...props} value={props.value} buttonStyle="solid">
                    {/*{themes.map((t) => (*/}
                    {/*    <Radio.Button key={t.key} value={t.key}>*/}
                    {/*        {t.name}*/}
                    {/*    </Radio.Button>*/}
                    {/*))}*/}
                </Radio.Group>
            );
        case "checkbox":
            return <Switch {...props} checked={props.value}/>;
        case "input":
            return <Input {...props} />;
        case "number":
            return <InputNumber {...props} />;
        case "textarea":
            return <Input.TextArea rows={4} {...props} />;
        case "range":
            return <DatePicker  />;
        default:
            return <Input/>;
    }
};

export const FormGenerator = ({name, value, onChange, config,}) => {
    const handleChange = (values) => {
        let immediately = false;
        const keys = Object.keys(values);
        if (
            keys.includes("theme") ||
            keys.includes("display") ||
            keys.includes("circle")
        ) {
            immediately = true;
        }
        onChange(
            {
                [name]: {...value, ...values},
            },
            immediately
        );
    };

    return (
        <div className="form-creator">
            <Card>
                <Form
                    labelCol={{span: 4}}
                    initialValues={value}
                    autoComplete="off"
                    onValuesChange={handleChange}
                >
                    {map(config, (c) => {
                        return (
                            <Form.Item
                                key={c.attributeId}
                                label={c.displayName}
                                wrapperCol={c.displayName ? {span: 18} : {span: 24}}
                                name={c.attributeId}
                                {...(c.formItemProps || {})}
                            >
                                {FormItemComponentMap(c.type)({
                                    ...(c.cfg || {}),
                                    value: get(value, [c.attributeId]),
                                })}
                            </Form.Item>
                        );
                    })}
                </Form>
            </Card>
        </div>
    );
};

export const FormListCreator = ({name, config, onChange, value}) => {
    const onValuesChange = (value, allValues) => {
        onChange(allValues);
    };
    return (
        <Form
            className="form-creator"
            autoComplete="off"
            initialValues={value}
            onValuesChange={onValuesChange}
        >
            <Form.List name={name}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }, index) => (
                            <Card style={{ marginBottom: 12 }} key={index}>
                                <Button
                                    className="remove-icon"
                                    icon={<DeleteOutlined />}
                                    onClick={() => remove(index)}
                                    type="primary"
                                    ghost
                                ></Button>

                                {map(config, (c) => {
                                    return (
                                        <Form.Item
                                            name={[name, c.attributeId]}
                                            key={c.attributeId}
                                            label={c.displayName}
                                            labelCol={{ span: 4 }}
                                            wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
                                        >
                                            {FormItemComponentMap(c.type)({
                                                ...(c.cfg || {}),
                                            })}
                                        </Form.Item>
                                    );
                                })}
                            </Card>
                        ))}
                        <Form.Item>
                            <Button type="primary" ghost onClick={() => add({})} block>
                                <PlusCircleOutlined /> 添加
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    );
};
