import React from "react";
import pdf from "@react-pdf/renderer";
import f from "../../../asset/huakang.ttf";

const { Page, View, Text, StyleSheet, PDFViewer, Font, Image} = pdf;

Font.register({
    family: "MyFont",
    src: f,
});


// Create styles
const styles = StyleSheet.create({
    page:{
        fontFamily: "MyFont",
        padding: '50px',
        fontSize: '15px'
    },
    user_info_box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: "10px"
    },
    user_name:{
        fontSize: '30px',
        color: '#4472c4'
    },
    profile_list: {
        width: 450,
        display: 'flex',
        flexDirection: 'row',
        padding: "10px 0",
        flexWrap: 'wrap'
    },
    profile_item: {
        width: '50%',
        fontSize: '15px',
        paddingTop: '5px'
    },
    avatar:{
        width: 100,
        height: 100
    },
    item_box:{
        paddingBottom: '10px'
    },
    box_title: {
        color: '#4472c4',
        paddingBottom: '5px',
        borderBottom: '2px dashed #4472c4',
        marginBottom: '10px',
        fontSize: '16px'
    },
    education_info_box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_info_box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#4472c4',
        fontSize: "15px"
    },
    desc_box:{
        padding: "10px 0",
        fontSize: '14px'
    }
});

export const ResumeT1 = ({state})=>{
    return (
        <Page size="A4" style={styles.page}>
            <View style={styles.user_info_box}>
                <View>
                    <View style={styles.user_name}>
                        <Text>{ state.profile.name }</Text>
                    </View>
                    <View style={styles.profile_list}>
                        { state.profile.sex && <Text style={styles.profile_item}>性别: {state.profile.sex}</Text>}
                        { state.profile.age && <Text style={styles.profile_item}>年龄: {state.profile.age}</Text>}
                        { state.profile.experience && <Text style={styles.profile_item}>经验: {state.profile.experience}</Text>}
                        { state.profile.mobile && <Text style={styles.profile_item}>电话: {state.profile.mobile}</Text>}
                        { state.profile.email && <Text style={styles.profile_item}>邮箱: {state.profile.email}</Text>}
                        { state.profile.positionTitle && <Text style={styles.profile_item}>职位: {state.profile.positionTitle}</Text>}
                    </View>
                </View>
                <View style={styles.avatar}>
                    { state.avatar.display ? <Image src={state.avatar.url}/> : null}
                </View>
            </View>
            <View style={styles.item_box}>
                {state.educationList.length > 0 && <Text style={styles.box_title}>教育经历</Text>}
                {state.educationList.length > 0 && state.educationList.map(e=>(
                    <View style={styles.education_info_box} key={e.school}>
                        <Text>{ e.school } / {e.degree}</Text>
                        <Text>{ e.start_time } - { e.end_time }</Text>
                        <Text>{e.major}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.item_box}>
                {state.skillList.length > 0 && <Text style={styles.box_title}>专业技能</Text>}
                {state.skillList.length > 0 && state.skillList.map(s => <Text key={s.name} style={styles.skill_item}>
                    {s.name}
                </Text>)}
            </View>
            <View style={styles.item_box}>
                {state.projectList.length > 0 && <Text style={styles.box_title}>项目经历</Text>}
                {state.projectList.length > 0 && state.projectList.map(p=>(
                    <View key={p.name}>
                        <View style={styles.header_info_box}>
                            <Text>{ p.name }</Text>
                            <Text>{ p.start_time } - { p.end_time }</Text>
                            <Text>{p.role}</Text>
                        </View>
                        <Text style={styles.desc_box}>{ p.desc }</Text>
                    </View>
                ))}
            </View>
            <View style={styles.item_box}>
                {state.workExpList.length > 0 && <Text style={styles.box_title}>工作经历</Text>}
                {state.workExpList.length > 0 && state.workExpList.map(w=>(
                    <View key={w.company}>
                        <View style={styles.header_info_box}>
                            <Text>{ w.company } / { w.department }</Text>
                            <Text>{ w.start_time } - { w.end_time }</Text>
                            <Text>{ w.role }</Text>
                        </View>
                        <Text style={styles.desc_box}>{ w.desc }</Text>
                    </View>
                ))}
            </View>
            <View style={styles.item_box}>
                {state.awardList.length > 0 && <Text style={styles.box_title}>荣誉证书</Text>}
                {state.awardList.length > 0 && state.awardList.map(a => <Text key={a.info} style={styles.skill_item}>
                    {a.info}
                </Text>)}
            </View>
        </Page>
    )
}
