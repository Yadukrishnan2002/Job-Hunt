import { StyleSheet, Text, View,Dimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ScreenWidth = Dimensions.get('window').width; 
const ScreenHeight = Dimensions.get('window').height;


const JobCard = () => {

    

  return (
    <View style = {styles.container}>
        <View style = {styles.CardContainer}> 
            
            <View style = {styles.JobCardHeader}>

                <View style = {styles.CompanyLogoWrapper}>
                    <Image style = {styles.CompanyLogoImage} source = {require('../assets/Essentials/microsoft.png')} />
                </View>
                <View style = {styles.JobCardHeaderWrapper}>
                    <View style = {styles.JobPositionHeader}>
                        <Text style = {styles.JobPositionText}>Software Developer</Text>
                    </View>
                    <View style = {styles.JobSalaryHeader}>
                        <Text style = {styles.JobSalaryText}>$10k-12k/month</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style = {styles.BookmarkLogoWrapper}>
                        <Image style = {styles.BookmarkLogo} source = {require('../assets/Essentials/bookmark.png')} />
                    </View>
                </TouchableOpacity>

            </View>

            <View style = {styles.JobCardFooter}>


                <View style = {styles.JobTypeWrapper}>
                    <Text style = {styles.JobTypeText}>Full time</Text>
                </View>

                <TouchableOpacity>
                    <View style = {styles.ApplyButtonWrapper}>
                        <Text style = {styles.ApplyButtonText}>Apply now</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    </View>
  )
}

export default JobCard

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        
        
       
    },
    CardContainer: {
        width: ScreenWidth - (0.12 * ScreenWidth),
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
        
    },
    CompanyLogoWrapper:{ 
        width: 60,
        height: 60,
        backgroundColor: 'black',
        borderRadius: 400,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    CompanyLogoImage: {
        width: 30,
        height: 30,
    },
    JobCardHeader:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        alignItems: 'center',

    },
    BookmarkLogoWrapper:{
        marginRight: 20,
        
     },
    BookmarkLogo: {
        width: 20,
        height: 20,
    },

    JobCardHeaderWrapper: {
        marginRight: 20,
    },
    JobPositionText: {
        fontSize: 20,
        fontWeight: '700',

    },
    JobSalaryHeader: {
        marginTop: 6,
    },
    JobSalaryText:{ 
        fontSize: 16,
        fontWeight: '500',
    },

    JobCardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 24,
    },

    JobLevelWrapper: {
        width: 120,
        height: 20,
        backgroundColor: '#ededed',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    JobTypeWrapper:{
        width: 120,
        height: 35,
        backgroundColor: '#ededed',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    ApplyButtonWrapper: {
        width: 120,
        height: 35,
        //backgroundColor: '#33b1ff',
        backgroundColor: '#fff533',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
})