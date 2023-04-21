import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const JobCategories = () => {
  return (
    <View style = {styles.container}>
       <View style = {styles.GreetingWrapper}>
            <Text style = {styles.HelloText}>Good Morning</Text>
            <Text style = {styles.NameText}>Tom</Text>
       </View>

       <View style = {styles.JobCategoryWrapper}>
            <View style = {styles.Textheading}>
                <Text style = {styles.findJobText}>Find your Dream job</Text>
            </View>

            <View style = {styles.CategoryWrapper}>
                <TouchableOpacity>
                    <View style = {styles.RemoteJobWrapper}>
                        <View style = {styles.RemoteJobImageWrapper}>
                            <Image style = {styles.RemoteJobLogo} source = {require('../assets/Essentials/RemoteJobs.png')} />
                        </View>
                        <View>
                            <Text style = {styles.RemoteJobNumber}>44.8k</Text>
                        </View>
                        <View>
                            <Text style = {styles.RemoteJobsText}>Remote Jobs</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>

                <View style = {styles.fullparttimeWrapper}>
                    <TouchableOpacity>
                        <View style = {styles.fulltimeWrapper}>
                            <View style = {styles.FulltimeImageWrapper}>
                                <Image style = {styles.RemoteJobLogo} source = {require('../assets/Essentials/Fulltime.png')} />
                            </View>

                            <View style = {styles.FullTimeNumberandText}>
                                <View>
                                    <Text style = {styles.FulltimeNumber}>66.7k</Text>
                                </View>
                                <View>
                                    <Text style = {styles.FulltimeText}>Full time</Text>
                                </View>

                            </View>
                            
                            
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style = {styles.partimeWrapper}>
                            
                            <View style = {styles.PartTimeImageWrapper}>
                                    <Image style = {styles.RemoteJobLogo} source = {require('../assets/Essentials/PartTime.png')} />
                                </View>

                                <View style = {styles.PartTimeNumberAndText}>
                                    <View>
                                        <Text style = {styles.FulltimeNumber}>38.4k</Text>
                                    </View>
                                    <View>
                                        <Text style = {styles.FulltimeText}>Part time</Text>
                                    </View>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

       </View>
    </View>
  )
}

export default JobCategories

const styles = StyleSheet.create({
    container: {
        paddingLeft: 22,
        marginTop: 25,
    },
    HelloText: {
        color: '#636363',
        fontSize: 28,
        fontWeight: '500'
    },
    NameText: {
        fontSize: 35,
        fontWeight: '500'
    },
    GreetingWrapper: {

    },

    JobCategoryWrapper: {
        marginTop: 20,
        paddingRight: 25,
        
    },
    findJobText: {
        fontSize: 16,
        fontWeight: '500',

    },

    CategoryWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,

    },
    fullparttimeWrapper: {
        
    },
    RemoteJobWrapper: {
        backgroundColor: '#32edd7',
        height: 200,
        width: 170,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

        
    },
    fulltimeWrapper: {
        backgroundColor: '#f6b9fa',
        height: 90,
        width: 150,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        
        
       
    },
    partimeWrapper: {
        backgroundColor: '#73ff7c',
        height: 90,
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },

    RemoteJobLogo: {
        height: 30,
        width: 30,
        
    },

    RemoteJobImageWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },

    RemoteJobNumber: {
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 20,
        paddingBottom: 7,
    },

    RemoteJobsText: {
        fontWeight: '300',
        fontSize: 15,
    },

    FulltimeImageWrapper: {
        width: 50,
        height: 50,
        borderRadius: 400,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    FullTimeNumberandText: {
        paddingLeft: 20,
        marginBottom: 20,
    },

    FulltimeNumber: {
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 20,
        paddingBottom: 7,
    },

    FulltimeText: {
        fontWeight: '300',
        fontSize: 15,
    },

    PartTimeImageWrapper: {
        width: 50,
        height: 50,
        borderRadius: 400,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    PartTimeNumberAndText: {
        paddingLeft: 20,
        marginBottom: 20,
    },

})