import React from "react";
import pdf from "@react-pdf/renderer";
const { Page, View, Text, StyleSheet, Font, Image} = pdf;

Font.register({
    family: "MyFont",
    src: "/huakang.ttf",
});


// Create styles
const styles = StyleSheet.create({
    page:{
        fontFamily: "MyFont",
        display: 'flex',
        flexDirection: 'row',
    },
    left_box: {
        width: '35%',
        backgroundColor: '#244564',
        padding: '20px',
    },
    avatar_box:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar :{
      width: 100,
      height: 100
    },
    profile_box :{
      padding: '30 0'
    },
    profile_item: {
        color: "white",
        padding: "5 0",
        fontSize: '13px'
    },
    left_item_box: {
        color: 'white',
    },
    left_box_title: {
        paddingBottom: 5,
        marginBottom: 5,
        borderBottom: '2px solid white',
        paddingTop: 20
    },
    skill_item:{
        fontSize: '13px'
    },
    right_box: {
        width: '65%',
        padding: '30px',
        fontSize: '14px'
    },
    box_title: {
        padding:' 0 0 0 8px',
        backgroundColor: '#244564',
        color: 'white',
        marginBottom: 10
    },

    header_info_box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: "#4472c4"
    },
    education_header_info_box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        color: "#4472c4"
    },
    time:{
        fontSize: '12px',
        color: '#6c6c6c'
    },
    desc_box:{
        padding: '10 0'
    }
});

export const ResumeT3 = ({state})=>{
    return (
        <Page size="A4" style={styles.page}>
            <View style={styles.left_box}>
                <View style={styles.avatar_box}>
                    <View>
                        <Image src={state.avatar.url} style={styles.avatar}></Image>
                    </View>
                </View>
                <View style={styles.profile_box}>
                    { state.profile.name && <Text style={styles.profile_item}>姓名: {state.profile.name}</Text>}
                    { state.profile.sex && <Text style={styles.profile_item}>性别: {state.profile.sex}</Text>}
                    { state.profile.age && <Text style={styles.profile_item}>年龄: {state.profile.age}</Text>}
                    { state.profile.experience && <Text style={styles.profile_item}>经验: {state.profile.experience}</Text>}
                    { state.profile.mobile && <Text style={styles.profile_item}>电话: {state.profile.mobile}</Text>}
                    { state.profile.email && <Text style={styles.profile_item}>邮箱: {state.profile.email}</Text>}
                    { state.profile.positionTitle && <Text style={styles.profile_item}>意向: {state.profile.positionTitle}</Text>}
                </View>
                <View style={styles.left_item_box}>
                    {state.skillList.length > 0 && <Text style={styles.left_box_title}>专业技能</Text>}
                    {state.skillList.length > 0 && state.skillList.map(s => <Text key={s.name} style={styles.skill_item}>
                        {s.name}
                    </Text>)}
                </View>
                <View style={styles.left_item_box}>
                    {state.awardList.length > 0 && <Text style={styles.left_box_title}>荣誉证书</Text>}
                    {state.awardList.length > 0 && state.awardList.map(a => <Text key={a.info} style={styles.skill_item}>
                        {a.info}
                    </Text>)}
                </View>
            </View>
            <View style={styles.right_box}>
                <View style={styles.item_box}>
                    {state.educationList.length > 0 && <Text style={styles.box_title}>教育经历</Text>}
                    {state.educationList.length > 0 && state.educationList.map(e=>(
                        <View style={styles.education_header_info_box} key={e.school}>
                            <Text>{ e.school } / {e.degree}</Text>
                            <Text>{ e.start_time } - { e.end_time }</Text>
                            <Text>{e.major}</Text>
                        </View>
                    ))}
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
                                <Text>{ w.role }</Text>
                            </View>
                            <Text >Time: { w.start_time } - { w.end_time }</Text>
                            <Text style={styles.desc_box}>{ w.desc }</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Page>
    )
}
