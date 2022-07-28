import React from "react";
import pdf from "@react-pdf/renderer";
const { Page, View, Text, StyleSheet, PDFViewer, Font, Image} = pdf;

Font.register({
    family: "MyFont",
    src: "/huakang.ttf",
});


// Create styles
const styles = StyleSheet.create({
    page:{
        fontFamily: "MyFont",
        fontSize: '14px'
    },
    page_top: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: "20px 0"
    },
    avatar_box:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
     },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: '50%'
    },
    profile_item:{
        paddingTop: 10,
        paddingRight: 10
    },
    item_box:{
        borderTop: "1px solid #ccc",
        padding: "10 0",
        margin: "0 50"
    },
    box_title:{
        paddingLeft: 15,
        borderLeft: '5px solid #4472c4',
        fontSize: '17px',
        marginBottom: 10
    },
    flex_info_box:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: "#5e8ee0"
    },
    header_info_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: "#5e8ee0",
        paddingBottom: 5
    },
    desc_box: {
        paddingBottom: 5
    }
});

export const ResumeT2 = ({state})=>{
    return (
        <Page size="A4" style={styles.page}>
            <View style={{position: "fixed", top: 30, height: 60}}>
                <Image src={"https://static.jianliben.com/images/cvbg_head_tpl108.png"}></Image>
            </View>
            <View style={styles.avatar_box}>
                <View style={{position: "fixed", top: -50, height: 120}}>
                    <Image src={state.avatar.url} style={styles.avatar}></Image>
                </View>
            </View>
            <View style={{position: "fixed", top: -50}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 10}}>
                    <Text style={{fontSize: "30px"}}>{state.profile.name}</Text>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        { state.profile.sex && <Text style={styles.profile_item}>{state.profile.sex}</Text>}
                        { state.profile.age && <Text style={styles.profile_item}>{state.profile.age}</Text>}
                        { state.profile.experience && <Text style={styles.profile_item}>{state.profile.experience}</Text>}
                        { state.profile.mobile && <Text style={styles.profile_item}>{state.profile.mobile}</Text>}
                        { state.profile.email && <Text style={styles.profile_item}>{state.profile.email}</Text>}
                        { state.profile.positionTitle && <Text style={styles.profile_item}>{state.profile.positionTitle}</Text>}
                    </View>
                </View>
                <View style={styles.item_box}>
                        {state.educationList.length > 0 && <Text style={styles.box_title}>教育经历</Text>}
                        {state.educationList.length > 0 && state.educationList.map(e=>(
                            <View style={styles.flex_info_box} key={e.school}>
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
            </View>
        </Page>
    )
}
